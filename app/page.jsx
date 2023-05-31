import Banner from "@/components/Homepage/Banner.jsx";
import SortBar from "@/components/Homepage/SortBar.jsx";
import Navbar from "@/components/Util/Navbar.jsx";
import styles from "./page.module.css";
import { getAllEvents } from "@/lib/eventsService.js";
import Link from "next/link.js";
import Footer from "@/components/Homepage/Footer.jsx";

export const Events = async () => {
  return getAllEvents();
};

export default async function Home() {
  const eventsData = await Events();
  const events = eventsData.map((e) => {
    return (
      <div key={e.id}>
        <Link href={{ pathname: `/events/${e.id}` }}>
          <div
            style={{ backgroundImage: `url(${e?.coverImg})` }}
            className={styles.eventCard}
          ></div>
        </Link>
      </div>
    );
  });

  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <SortBar />
      <div className="container mx-auto px-4 items-stretch">
        <div className="grid grid-cols-4 gap-5">{events}</div>
      </div>
      <Footer />
    </div>
  );
}
