import sortBar from "./SortBar.module.css";

export default function SortBar() {
  return (
    <div className={sortBar.sortBar}>
      <div className="grid grid-cols-6 gap-10">
        <div>
          <button className={sortBar.btn}>All</button>
        </div>
        <div>
          <button className={sortBar.btn}>Concert</button>
        </div>
        <div>
          <button className={sortBar.btn}>Convention</button>
        </div>
        <div>
          <button className={sortBar.btn}>Sport</button>
        </div>
        <div>
          <button className={sortBar.btn}>Digital</button>
        </div>
        <div>
          <button className={sortBar.btn}>Other</button>
        </div>
      </div>
    </div>
  );
}
