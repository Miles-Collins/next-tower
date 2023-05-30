import Image from "next/image.js";
import styles from "./Banner.module.css";
import towerBanner from "/public/TowerBanner.jpg";

export default function Banner() {
  return (
    <div className="Banner justify-center flex-row flex">
      <div className="row">
        <Image
          src={towerBanner}
          alt="Banner"
          width="1550"
          height="100dvh"
          quality={100}
        ></Image>
      </div>
    </div>
  );
}
