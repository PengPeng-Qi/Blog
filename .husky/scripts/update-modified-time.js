const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const matter = require("gray-matter");

const getStagedFiles = (extension) => {
  const stdout = execSync("git diff --cached --name-only").toString();
  return stdout
    .split("\n")
    .filter((file) => path.extname(file).toLowerCase() === extension);
};

const formatDate = (date, withTime) => {
  const localDate = new Date(date.getTime() + 8 * 60 * 60 * 1000); // Convert to UTC+8
  if (withTime) {
    return localDate.toISOString().replace("T", " ").substring(0, 19);
  } else {
    return localDate.toISOString().split("T")[0];
  }
};

const generateSlug = () => {
  return Math.random().toString(36).substring(2, 1); // Generate a random slug
};

const updateTimestamps = (filePath) => {
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse front matter
  const { data, content } = matter(fileContents);

  // Get current time
  const date = new Date();
  const createdFormattedDate = formatDate(date, false); // Without time
  const modifiedFormattedDate = formatDate(date, true); // With time

  // Update or add timestamps
  const updatedData = {
    ...data,
    slug: data.slug || generateSlug(),
    createdTime: data.createdTime || createdFormattedDate,
    modifiedTime: modifiedFormattedDate,
  };

  // Create new front matter and content
  const newFrontMatter = matter
    .stringify(content, updatedData)
    .replace(/'/g, '"');
  fs.writeFileSync(filePath, newFrontMatter, "utf8");
  console.log(`Updated timestamps for ${filePath}`);

  // Re-add file to the staging area
  execSync(`git add ${filePath}`);
};

const main = () => {
  const mdxFiles = getStagedFiles(".mdx");

  mdxFiles.forEach((filePath) => {
    if (fs.existsSync(filePath)) {
      updateTimestamps(filePath);
    }
  });
};

main();
