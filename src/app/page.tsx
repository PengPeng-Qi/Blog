import Tags from "./components/Tags";

export default function Home() {
  return (
    <div className="flex cursor-pointer justify-between">
      <div></div>

      <div>
        <div className="font-medium text-red-600">TOP CATEGORIES</div>
        <Tags />
      </div>
    </div>
  );
}
