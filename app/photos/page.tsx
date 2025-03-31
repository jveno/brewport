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

import lgZoom from 'lightgallery/plugins/zoom';
import dynamic from 'next/dynamic';
const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false
});

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

export default function Photos() {

    return (
        <>
            <Header />
            <main>
                <section className="photos">
                    <h1 className={oswald.className}>Photos</h1>
                    <div>
                        <h2 className={oswald.className}>Semi-private Event Room</h2>
                        <LightGallery elementClassNames={styles.masonryGallery} mode="lg-fade" plugins={[lgZoom]}>
                            <div className="grid-sizer"></div>
                            <a href={SemiPrivateImg1.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg1} alt="Semi-private Event Room" />
                            </a>
                            <a href={SemiPrivateImg2.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg2} alt="Semi-private Event Room" />
                            </a>
                            <a href={SemiPrivateImg3.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg3} alt="Semi-private Event Room" />
                            </a>
                            <a href={SemiPrivateImg4.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg4} alt="Semi-private Event Room" />
                            </a>
                            <a href={SemiPrivateImg5.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg5} alt="Semi-private Event Room" />
                            </a>
                            <a href={SemiPrivateImg6.src} data-lg-size="1200-800">
                                <Image className={styles.imgResponsive} width={400} height={200} src={SemiPrivateImg6} alt="Semi-private Event Room" />
                            </a>
                        </LightGallery>
                    </div>
                    <div>
                        <h2 className={oswald.className}>Private Event Room</h2>
                        <div className={styles.gallery}>
                            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                <a href={PrivateImg1.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={PrivateImg1} alt="Private Event Room" />
                                </a>
                                <a href={PrivateImg2.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={PrivateImg2} alt="Private Event Room" />
                                </a>
                                <a href={PrivateImg3.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={PrivateImg3} alt="Private Event Room" />
                                </a>
                            </LightGallery>
                        </div>
                    </div>

                    <div>
                        <h2 className={oswald.className}>Food &amp; Drinks</h2>
                        <div className={styles.gallery}>
                            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                <a href={FoodDrink1.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={600} src={FoodDrink1} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink2.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={225} src={FoodDrink2} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink3.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink3} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink4.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink4} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink5.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink5} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink6.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink6} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink7.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink7} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink8.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink8} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink9.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink9} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink10.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink10} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink11.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink11} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink12.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink12} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink13.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink13} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink14.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink14} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink15.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink15} alt="Food and Drinks" />
                                </a>
                                <a href={FoodDrink16.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={FoodDrink16} alt="Food and Drinks" />
                                </a>
                            </LightGallery>
                        </div>
                    </div>

                    <div>
                        <h2 className={oswald.className}>Venue</h2>
                        <div className={styles.gallery}>
                            <LightGallery mode="lg-fade" plugins={[lgZoom]}>
                                <a href={VenueImg1.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg1} alt="Venue" />
                                </a>
                                <a href={VenueImg2.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg2} alt="Venue" />
                                </a>
                                <a href={VenueImg3.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg3} alt="Venue" />
                                </a>
                                <a href={VenueImg4.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg4} alt="Venue" />
                                </a>
                                <a href={VenueImg5.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg5} alt="Venue" />
                                </a>
                                <a href={VenueImg6.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg6} alt="Venue" />
                                </a>
                                <a href={VenueImg7.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg7} alt="Venue" />
                                </a>
                                <a href={VenueImg8.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg8} alt="Venue" />
                                </a>
                                <a href={VenueImg9.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg9} alt="Venue" />
                                </a>
                                <a href={VenueImg10.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg10} alt="Venue" />
                                </a>
                                <a href={VenueImg11.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg11} alt="Venue" />
                                </a>
                                <a href={VenueImg12.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg12} alt="Venue" />
                                </a>
                                <a href={VenueImg13.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg13} alt="Venue" />
                                </a>
                                <a href={VenueImg14.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg14} alt="Venue" />
                                </a>
                                <a href={VenueImg15.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg15} alt="Venue" />
                                </a>
                                <a href={VenueImg16.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg16} alt="Venue" />
                                </a>
                                <a href={VenueImg17.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg17} alt="Venue" />
                                </a>
                                <a href={VenueImg18.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg18} alt="Venue" />
                                </a>
                                <a href={VenueImg19.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg19} alt="Venue" />
                                </a>
                                <a href={VenueImg20.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg20} alt="Venue" />
                                </a>
                                <a href={VenueImg21.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg21} alt="Venue" />
                                </a>
                                <a href={VenueImg22.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg22} alt="Venue" />
                                </a>
                                <a href={VenueImg23.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg23} alt="Venue" />
                                </a>
                                <a href={VenueImg24.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg24} alt="Venue" />
                                </a>
                                <a href={VenueImg25.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg25} alt="Venue" />
                                </a>
                                <a href={VenueImg26.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg26} alt="Venue" />
                                </a>
                                <a href={VenueImg27.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg27} alt="Venue" />
                                </a>
                                <a href={VenueImg28.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg28} alt="Venue" />
                                </a>
                                <a href={VenueImg29.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg29} alt="Venue" />
                                </a>
                                <a href={VenueImg30.src} data-lg-size="1200-800">
                                    <Image className={styles.imgResponsive} width={400} height={200} src={VenueImg30} alt="Venue" />
                                </a>
                            </LightGallery>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}