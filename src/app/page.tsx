import Tags from "./components/Tags";

export default function Home() {
  return (
    <div className="flex cursor-pointer justify-between">
      <div></div>

      <div>
        <div className="font-semibold">TOP CATEGORIES</div>
        <Tags />
      </div>
    </div>
  );
}
