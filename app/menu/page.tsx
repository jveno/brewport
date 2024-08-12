import clsx from "clsx";
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import styles from './menu.styles.module.css';
import Link from "next/link";
import { oswald } from "../fonts";

export default function Menu() {
    return (
        <>
            <Header />
            <main>
                <section className="menu">
                    <h1 className={oswald.className}>Food & Beer</h1>
                    <div className={styles.blockmenu}>
                        <Link href="menu/beer" className={clsx(styles.beer, oswald.className)}>Great Beer</Link>
                        <Link href="menu/pizza" className={clsx(styles.pizza, oswald.className)}>Great Pizza</Link>
                        <Link href="menu/salad" className={clsx(styles.salad, oswald.className)}>Great Salad</Link>
                        <Link href="menu/cocktails" className={clsx(styles.cocktails, oswald.className)} > Great Cocktails</Link>
                        <Link href="menu/wine" className={clsx(styles.wine, oswald.className)}> Great wine</Link>
                    </div>
                </section >
            </main >
            <Footer />
        </>
    );
}