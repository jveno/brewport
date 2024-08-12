import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import Announcements from "./_components/announcements/announcements";
import { oswald } from "./fonts";


export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Announcements />
        </div>
        <div className={styles.quote}>
          Brewport enriches lives with thin crust pizza, gourmet salad, and connecticut style beers so amazingly great, that staff and guests keep coming back for more.
        </div>
        <div className={oswald.className}>
          <div className={styles.blockmenu}>
            <div className={styles.item}>
              <Link className={styles.storeBg} href="https://brewport.myshopify.com/">
                <span className={styles.linkName}>Store</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.eventsBg} href="/events">
                <span className={styles.linkName}>Events</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.foodBg} href="/menu">
                <span className={styles.linkName}>Food &amp; Beer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
