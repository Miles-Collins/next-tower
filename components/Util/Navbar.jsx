import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={`${styles.navBar}`}>
      <div className="grid grid-cols-8 gap-2 ps-5">
        <div>
          <h1>Tower</h1>
        </div>
        <div>
          <button>Concerts</button>
        </div>
        <div>
          <button>Sports</button>
        </div>
        <div>
          <button>Convention</button>
        </div>
      </div>
    </div>
  );
}
