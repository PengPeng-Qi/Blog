import Tags from "./components/Tags";

export default function Home() {
  return (
    <div className="flex cursor-pointer justify-between">
      <div>
        <div className="mb-5">
          Hi, I&apos;m Qi Peng, Welcome to my blog that record my life ❤️.
        </div>

        <div>
          My blog will includes article with code, projects and about me.
        </div>
      </div>

      <div>
        <div className="font-semibold">TOP CATEGORIES</div>
        <Tags />
      </div>
    </div>
  );
}
