"use client";

import Image from 'next/image';
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import { oswald } from "../fonts";
import styles from './photos.styles.module.css';
import Masonry from 'react-masonry-css';

import SemiPrivateImg1 from "../../public/gallery/semi-private/semi-private1.png";
import SemiPrivateImg2 from "../../public/gallery/semi-private/semi-private2.png";
import SemiPrivateImg3 from "../../public/gallery/semi-private/semi-private3.png";
import SemiPrivateImg4 from "../../public/gallery/semi-private/semi-private4.png";
import SemiPrivateImg5 from "../../public/gallery/semi-private/semi-private5.png";
import SemiPrivateImg6 from "../../public/gallery/semi-private/semi-private6.png";

import PrivateImg1 from "../../public/gallery/private/private1.png";
import PrivateImg2 from "../../public/gallery/private/private2.png";
import PrivateImg3 from "../../public/gallery/private/private3.png";

import FoodDrink1 from "../../public/gallery/fooddrink/fooddrink1.png";
import FoodDrink2 from "../../public/gallery/fooddrink/fooddrink2.png";
import FoodDrink3 from "../../public/gallery/fooddrink/fooddrink3.png";
import FoodDrink4 from "../../public/gallery/fooddrink/fooddrink4.png";
import FoodDrink5 from "../../public/gallery/fooddrink/fooddrink5.png";
import FoodDrink6 from "../../public/gallery/fooddrink/fooddrink6.png";
import FoodDrink7 from "../../public/gallery/fooddrink/fooddrink7.png";
import FoodDrink8 from "../../public/gallery/fooddrink/fooddrink8.png";
import FoodDrink9 from "../../public/gallery/fooddrink/fooddrink9.png";
import FoodDrink10 from "../../public/gallery/fooddrink/fooddrink10.png";
import FoodDrink11 from "../../public/gallery/fooddrink/fooddrink11.png";
import FoodDrink12 from "../../public/gallery/fooddrink/fooddrink12.png";
import FoodDrink13 from "../../public/gallery/fooddrink/fooddrink13.png";
import FoodDrink14 from "../../public/gallery/fooddrink/fooddrink14.png";
import FoodDrink15 from "../../public/gallery/fooddrink/fooddrink15.png";
import FoodDrink16 from "../../public/gallery/fooddrink/fooddrink16.png";

import VenueImg1 from "../../public/gallery/venue/venue1.png";
import VenueImg2 from "../../public/gallery/venue/venue2.png";
import VenueImg3 from "../../public/gallery/venue/venue3.png";
import VenueImg4 from "../../public/gallery/venue/venue4.png";
import VenueImg5 from "../../public/gallery/venue/venue5.png";
import VenueImg6 from "../../public/gallery/venue/venue6.png";
import VenueImg7 from "../../public/gallery/venue/venue7.png";
import VenueImg8 from "../../public/gallery/venue/venue8.png";
import VenueImg9 from "../../public/gallery/venue/venue9.png";
import VenueImg10 from "../../public/gallery/venue/venue10.png";
import VenueImg11 from "../../public/gallery/venue/venue11.png";
import VenueImg12 from "../../public/gallery/venue/venue12.png";
import VenueImg13 from "../../public/gallery/venue/venue13.png";
import VenueImg14 from "../../public/gallery/venue/venue14.png";
import VenueImg15 from "../../public/gallery/venue/venue15.png";
import VenueImg16 from "../../public/gallery/venue/venue16.png";
import VenueImg17 from "../../public/gallery/venue/venue17.png";
import VenueImg18 from "../../public/gallery/venue/venue18.png";
import VenueImg19 from "../../public/gallery/venue/venue19.png";
import VenueImg20 from "../../public/gallery/venue/venue20.png";
import VenueImg21 from "../../public/gallery/venue/venue21.png";
import VenueImg22 from "../../public/gallery/venue/venue22.png";
import VenueImg23 from "../../public/gallery/venue/venue23.png";
import VenueImg24 from "../../public/gallery/venue/venue24.png";
import VenueImg25 from "../../public/gallery/venue/venue25.png";
import VenueImg26 from "../../public/gallery/venue/venue26.png";
import VenueImg27 from "../../public/gallery/venue/venue27.png";
import VenueImg28 from "../../public/gallery/venue/venue28.png";
import VenueImg29 from "../../public/gallery/venue/venue29.png";
import VenueImg30 from "../../public/gallery/venue/venue30.png";

export default function Photos() {

    return (
        <>
            <Header />
            <main>
                <section className="photos">
                    <h1 className={oswald.className}>Photos</h1>
                    <div>
                        <h2 className={oswald.className}>Semi-private Event Room</h2>
                        <div className={styles.gallery}>
                            <Masonry
                                breakpointCols={3}
                                className={styles.masonryGrid}
                                columnClassName={styles.masonryGridColumn}>

                                <Image width={1200} height={800} src={SemiPrivateImg1} alt="Semi-private Event Room" />
                                <Image width={1200} height={800} src={SemiPrivateImg2} alt="Semi-private Event Room" />
                                <Image width={1200} height={800} src={SemiPrivateImg3} alt="Semi-private Event Room" />
                                <Image width={1200} height={800} src={SemiPrivateImg4} alt="Semi-private Event Room" />
                                <Image width={1200} height={800} src={SemiPrivateImg5} alt="Semi-private Event Room" />
                                <Image width={1200} height={800} src={SemiPrivateImg6} alt="Semi-private Event Room" />
                            </Masonry>
                        </div>
                    </div>
                    <div>
                        <h2 className={oswald.className}>Private Event Room</h2>
                        <div className={styles.gallery}>
                            <Masonry
                                breakpointCols={3}
                                className={styles.masonryGrid}
                                columnClassName={styles.masonryGridColumn}>

                                <Image width={1200} height={800} src={PrivateImg1} alt="Private Event Room" />
                                <Image width={1200} height={800} src={PrivateImg2} alt="Private Event Room" />
                                <Image width={1200} height={800} src={PrivateImg3} alt="Private Event Room" />
                            </Masonry>
                        </div>
                    </div>

                    <div>
                        <h2 className={oswald.className}>Food &amp; Drinks</h2>
                        <div className={styles.gallery}>
                            <Masonry
                                breakpointCols={5}
                                className={styles.masonryGrid}
                                columnClassName={styles.masonryGridColumn}>

                                <Image width={1200} height={800} src={FoodDrink1} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink2} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink3} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink4} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink5} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink6} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink7} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink8} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink9} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink10} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink11} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink12} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink13} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink14} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink15} alt="Food and Drinks" />
                                <Image width={1200} height={800} src={FoodDrink16} alt="Food and Drinks" />
                            </Masonry>
                        </div>
                    </div>

                    <div>
                        <h2 className={oswald.className}>Venue</h2>
                        <div className={styles.gallery}>
                            <Masonry
                                breakpointCols={5}
                                className={styles.masonryGrid}
                                columnClassName={styles.masonryGridColumn}>

                                <Image width={1200} height={800} src={VenueImg1} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg2} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg3} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg4} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg5} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg6} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg7} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg8} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg9} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg10} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg11} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg12} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg13} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg14} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg15} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg16} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg17} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg18} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg19} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg20} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg21} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg22} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg23} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg24} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg25} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg26} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg27} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg28} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg29} alt="Venue" />
                                <Image width={1200} height={800} src={VenueImg30} alt="Venue" />
                            </Masonry>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}