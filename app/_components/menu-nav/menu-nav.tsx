'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './menu-nav.styles.module.css';
import { clsx } from 'clsx';

const MenuNav = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(window.location.pathname);
    }, []);

    const menuItems = [
        {
            label: "Beer",
            path: "/menu/beer"
        },
        {
            label: "Pizza",
            path: "/menu/pizza"
        },
        {
            label: "Salad",
            path: "/menu/salad"
        },
        {
            label: "Cocktails",
            path: "/menu/cocktails"
        },
        {
            label: "Wine",
            path: "/menu/wine"
        }
    ];

    return (
        <nav className={styles.menu}>
            {
                menuItems.map((item, index) => (
                    <Link className={clsx({
                        [styles.active]: active.startsWith(item.path),
                    })} href={item.path} key={index}>
                        {item.label}
                    </Link>
                ))
            }
        </nav>
    );
}

export default MenuNav;