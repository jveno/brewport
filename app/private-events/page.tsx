'use client';
import clsx from "clsx";
import Button from '@mui/material/Button';
import Image from "next/image";
import { CustomPlaceholder } from 'react-placeholder-image';
import styles from './private-events.styles.module.css';
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import PrivatRoomImg1 from '../../public/img/private-room-1.jpg';
import PrivatRoomImg3 from '../../public/img/private-room-3.jpg';

import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { oswald } from "../fonts";

export default function PrivateEvents() {
    return (
        <>
            <Header />
            <ParallaxProvider>
                <main>
                    <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                        <ParallaxBannerLayer
                            translateY={['0%', '-40%']}
                            shouldAlwaysCompleteAnimation={true}
                            style={{ zIndex: 1 }}
                        >
                            <div className={styles.content}>
                                <div>
                                    <h1 className={clsx(oswald.className, styles.title)}>Private Events</h1>
                                    <p className={styles.largeText}>Host your next event at Brewport!</p>
                                    <p>Our Private And Semi-Private Event Rooms are perfect for any function you are looking to hold.

                                        All food at any event hosted in our private rooms will be served by Brewport, no outside food is allowed.

                                        Only Outside “Desserts” are permitted.

                                        Food Pricing is A La Carte.</p>
                                </div>
                            </div>
                        </ParallaxBannerLayer>
                        <ParallaxBannerLayer image={"../../img/events.jpeg"} speed={-30} />
                    </ParallaxBanner>
                    <div className={styles.page}>
                        <h2 className={clsx(oswald.className, styles.rentalContractsTitle)}>Rental Contracts</h2>
                        <div className={styles.rentalContracts}>
                            <div className={styles.rentalContractDays}>
                                <h3 className={oswald.className}>Private Room Contract</h3>
                                <div className={styles.rentalContractButtons}>
                                    <Button size="large" variant="contained">
                                        Friday &amp; Saturday
                                    </Button>
                                    <Button size="large" variant="contained">
                                        Sunday - Thursday
                                    </Button>
                                    <Image className={styles.contractImage} src={PrivatRoomImg1} width={360} alt="Event Room with tables and chairs" />
                                    Private Event Room holds 50-60 people
                                </div>
                            </div>
                            <div className={styles.rentalContractDays}>
                                <h3 className={oswald.className}>Large Event Space Contract</h3>
                                <div className={styles.rentalContractButtons}>
                                    <Button size="large" variant="contained" style={{ flex: 1 }}>
                                        Friday &amp; Saturday
                                    </Button>
                                    <Button size="large" variant="contained" style={{ flex: 1 }}>
                                        Sunday - Thursday
                                    </Button>
                                    <Image className={styles.contractImage} src={PrivatRoomImg3} width={360} alt="Event Room with various games and tables with chairs" />
                                    Semi-Private Event Room Holds 60-200 People
                                </div>
                            </div>
                            <div className={styles.rentalContractDays}>
                                <h3 className={oswald.className}>Cooper Room Contract</h3>
                                <div className={styles.rentalContractButtons}>
                                    <Button size="large" variant="contained">
                                        All Days
                                    </Button>
                                    <CustomPlaceholder className={styles.contractImage} width={360} height={240} text="Copper Room Image" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.gallery}>
                            <p className={styles.largeText}>
                                Check out our gallery to see more pictures of our private room!
                            </p>
                            <Button size="large" variant="contained">
                                View Photos
                            </Button>
                        </div>
                    </div>
                </main>
            </ParallaxProvider >
            <Footer />
        </>
    );
}