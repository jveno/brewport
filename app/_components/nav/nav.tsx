import { useEffect, useState } from "react";
import Link from "next/link";
import RoomIcon from '@mui/icons-material/Room';
import Image from "next/image";
import { clsx } from 'clsx';

import Wellington from '../../../public/img/wellington.png';
import styles from './nav.styles.module.css';
import { oswald } from '../../fonts';

const Nav = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(window.location.pathname);
    }, []);

    const mainMenu = [
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Food & Beer",
            path: "/menu"
        },
        {
            label: "Wellingtons",
            path: "/wellingtons",
            image: {
                src: Wellington,
                alt: "Wellington"
            }
        },
        {
            label: "Order Online",
            path: "https://www.toasttab.com/brewport-bpt-225-south-frontage-road/v3"
        },
        {
            label: "Events",
            path: "/events"
        },
        {
            label: "Private Events",
            path: "/private-events"
        },
        {
            label: "Photos",
            path: "/photos"
        },
        {
            label: "Store",
            path: "https://brewport.myshopify.com/"
        }
    ];

    return (
        <div className={oswald.className}>
            <div className={styles.topmenu}>
                <div className={styles.address}>
                    <RoomIcon sx={{ marginRight: '5px' }} /> Find Us: <a href=""> 225 South Frontage Road, Bridgeport, CT</a>
                </div>
                <div className={styles.phone}>
                    Call Us: <a href='tel:2036124438'>(203) 612-4438</a>
                </div>
            </div>
            <nav className={styles.main}>
                <div className={oswald.className}>
                    {mainMenu.map((item, index) => (
                        <Link className={clsx({
                            [styles.active]: active.startsWith(item.path),
                        })} href={item.path} key={index}>
                            {item.image ? <Image className={styles.wellington} src={item.image.src} width="25" alt={item.image.alt} /> : ""}
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Nav;