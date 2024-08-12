'use client';

import Image from 'next/image';
import clsx from 'clsx';
import styles from './wellingtons.styles.module.css';
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import WellingtonLogo from "../../public/img/wellingtons-logo.png";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { oswald } from "../fonts";

export default function Wellingtons() {
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
                                <div className={styles.logoContainer}>
                                    <Image className={styles.logo} src={WellingtonLogo} alt="Wellingtons logo" />
                                </div>
                                <div>
                                    <h1 className={clsx(oswald.className, styles.title)}>Wellington&lsquo;s</h1>
                                    <p>Wellington&lsquo;s Old Style malted soft soda is a throwback to the old days of the soda shop. Produced from an old family recipe, this root beer is like no other. It is less sweet and fuller than its counterparts and refreshing with a bite! Wellington&lsquo;s is designed to go perfectly with ice cream, so don&lsquo;t forget to try our Wellington&lsquo;s Root Beer Floats!</p>
                                </div>
                            </div>
                        </ParallaxBannerLayer>
                        <ParallaxBannerLayer image={"../../img/wellingtons-image.jpeg"} speed={-30} />
                    </ParallaxBanner>
                </main>
            </ParallaxProvider >
            <Footer />
        </>
    );
}