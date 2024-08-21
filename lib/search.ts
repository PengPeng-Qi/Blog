export async function getAllBlogs() {
  const response = await fetch("/searchIndex.json");
  const blogs = await response.json();

  return blogs;
}
