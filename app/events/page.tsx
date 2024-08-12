
'use client';

import clsx from "clsx";
import styles from './events.styles.module.css';
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";

import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { oswald } from "../fonts";

export default function Events() {
    return (
        <>
            <Header />
            <ParallaxProvider>
                <main>
                    <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                        <ParallaxBannerLayer
                            translateY={['0%', '0%']}
                            shouldAlwaysCompleteAnimation={true}
                            style={{ zIndex: 1 }}
                        >
                            <div className={styles.content}>
                                <div>
                                    <h1 className={clsx(oswald.className, styles.title)}>Events</h1>
                                    <p className={styles.subtitle}>What&lsquo;s happening @ <strong>Brewport</strong></p>
                                    <h2 className={oswald.className}>Special Events</h2>
                                    <p>No events posted, please check back again later.</p>
                                </div>
                            </div>
                        </ParallaxBannerLayer>
                        <ParallaxBannerLayer image={"../../img/events.jpeg"} speed={-30} />
                    </ParallaxBanner>
                </main>
            </ParallaxProvider >
            <Footer />
        </>
    );
}