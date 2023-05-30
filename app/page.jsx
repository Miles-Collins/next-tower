import Banner from "@/components/Homepage/Banner.jsx";
import SortBar from "@/components/Homepage/SortBar.jsx";
import Navbar from "@/components/Util/Navbar.jsx";
import styles from "./page.module.css";
import { getAllEvents } from "@/lib/eventsService.js";

export const Events = async () => {
  return getAllEvents();
};

export default async function Home() {
  const eventsData = await Events();
  const events = eventsData.map((e) => {
    return (
      <div key={e.id}>
        <div
          style={{ backgroundImage: `url(${e?.coverImg})` }}
          className={styles.eventCard}
        ></div>
      </div>
    );
  });

  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <SortBar />
      <div className="container items-stretch">
        <div className="grid grid-cols-4">{events}</div>
      </div>
    </div>
  );
}
