"use client";

import Link from "next/link.js";
import styles from "./Navbar.module.css";
import { useState } from "react";
import Modal from "./HostEventModal.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <div className={`${styles.navBar}`}>
        <div className="flex flex-wrap w-full justify-around ps-5">
          <div>
            <Link href="/">
              <h1>Tower</h1>
            </Link>
          </div>
          <div>
            <Link href="/concert">
              <button className={styles.navButton}>Concerts</button>
            </Link>
          </div>
          <div>
            <Link href="/sport">
              <button className={styles.navButton}>Sports</button>
            </Link>
          </div>
          <div>
            <Link href="/convention">
              <button className={styles.navButton}>Convention</button>
            </Link>
          </div>
          <div>
            <Link href="/digital">
              <button className={styles.navButton}>Digital</button>
            </Link>
          </div>
          <div>
            <Link href="/other">
              <button className={styles.navButton}>Other</button>
            </Link>
          </div>
          <Modal />
          {/* <div>
            <button onClick={() => setIsOpen(true)}>Host Event!</button>
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              style={customStyles}
            >
              <h1>Modal Content</h1>
              <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>
          </div> */}
          <button data-text="Awesome" className={styles.loginButton}>
            <span className={styles.actualText}>&nbsp;Login&nbsp;</span>
            <span className={styles.hoverText} aria-hidden="true">
              &nbsp;Login&nbsp;
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
