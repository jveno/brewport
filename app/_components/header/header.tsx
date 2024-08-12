"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '../nav/nav';
import styles from './header.styles.module.css';
import Logo from '../../../public/img/logo.png';

const Header = () => {

    const [small, setSmall] = useState<boolean>(false);
    const [logoWidth, setLogoWidth] = useState<number>(260);

    useEffect(() => {

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 200) {
                    setLogoWidth(160);
                    setSmall(true);
                } else {
                    setLogoWidth(260);
                    setSmall(false);
                }
            });
        }

    }), [];

    return (
        <>
            <div className={small ? styles.menuHeaderSm : styles.menuHeader}>
                <header>
                    <Link href="/">
                        <Image className='logo' src={Logo} width={logoWidth} alt="Logo" />
                    </Link>
                </header>
                <Nav />
            </div>

        </>

    );
}

export default Header;