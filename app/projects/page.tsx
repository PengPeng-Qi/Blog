export default function Page() {
  return (
    <div className="cursor-pointer">
      <div className="mb-6 font-medium text-red-600">Tools</div>

      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">Prettier Config</span>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">NextJs Template</span>
      </div>
      <div className="mb-3 flex leading-none hover:text-light-primary dark:hover:text-dark-primary">
        <span className="font-medium">VSCode Extension</span>
      </div>
    </div>
  );
}
