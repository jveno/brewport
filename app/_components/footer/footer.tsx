import React from 'react';
import Link from "next/link";
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './footer.styles.module.css';


const Footer = () => {

    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.contact}>
                    <div className={styles.address}>
                        <a target='_blank' href='https://www.google.com/maps/place/Brewport+Brewing+Co/@41.1707789,-73.1942734,17z/data=!3m1!4b1!4m6!3m5!1s0x89e80e72cc2d911d:0x3fb7b643553f6252!8m2!3d41.1707749!4d-73.1916985!16s%2Fg%2F11c48rq1t7?entry=ttu'>
                            <RoomIcon />225 South Frontage Road, Bridgeport, CT 06604
                        </a>
                    </div>
                    <div className={styles.phone}>
                        <a href="tel:(203) 612-4438"><LocalPhoneIcon /> (203) 612-4438</a>
                    </div>
                </div>

                <div className={styles.email}>
                    <a href="mailto:info@brewportct.com"><EmailIcon /> info@brewportct.com</a>
                </div>

                <div>
                    <a href="https://www.facebook.com/brewportct"><FacebookIcon sx={{ fontSize: 40, mr: "12px" }} /></a>
                    <a href='https://www.instagram.com/brewportct/'><InstagramIcon sx={{ fontSize: 40 }} /></a>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {currYear} Brewport. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;