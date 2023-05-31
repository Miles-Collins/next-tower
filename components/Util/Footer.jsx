import footer from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={footer.height}>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="text-lg">Hello this is a footer!</h1>
        </div>
      </div>
    </div>
  );
}
