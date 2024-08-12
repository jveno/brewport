import Footer from "../../_components/footer/footer";
import Header from "../../_components/header/header";
import MenuNav from "../../_components/menu-nav/menu-nav";
import MenuMap from "../../_components/menu-map/menu-map";
import { MenuItem } from '../../../types';
import { MENU_SIZES } from '../../../constants';
import { oswald } from "../../fonts";

export default function Beer() {

    const menuItems: MenuItem[] = [
        {
            categoryName: "Guest Taps",
            items: [
                {
                    itemName: "Tangerine Whisper - One Family",
                    itemDescription: "wheat ale - lovettswille, va 5.1% abv",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: MENU_SIZES.SEVEN_OUNCE
                        },
                        {
                            price: "5.25",
                            size: MENU_SIZES.TWELVE_OUNCE
                        },
                        {
                            price: "7.25",
                            size: MENU_SIZES.SIXTEEN_OUNCE
                        }
                    ]
                },
                {
                    itemName: "Jersey Vice - Bolero Snort",
                    itemDescription: "sour - carlstadt, nj 4.2% abv 2023 gabf silver medal winner",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                }
            ]
        },
        {
            categoryName: "Guest Bottles/Cans",
            items: [
                {
                    itemName: "Tangerine Whisper - One Family",
                    itemDescription: "wheat ale - lovettswille, va 5.1% abv",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Jersey Vice - Bolero Snort",
                    itemDescription: "sour - carlstadt, nj 4.2% abv 2023 gabf silver medal winner",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Tangerine Whisper - One Family",
                    itemDescription: "wheat ale - lovettswille, va 5.1% abv",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Jersey Vice - Bolero Snort",
                    itemDescription: "sour - carlstadt, nj 4.2% abv 2023 gabf silver medal winner",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Tangerine Whisper - One Family",
                    itemDescription: "wheat ale - lovettswille, va 5.1% abv",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Jersey Vice - Bolero Snort",
                    itemDescription: "sour - carlstadt, nj 4.2% abv 2023 gabf silver medal winner",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Tangerine Whisper - One Family",
                    itemDescription: "wheat ale - lovettswille, va 5.1% abv",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                },
                {
                    itemName: "Jersey Vice - Bolero Snort",
                    itemDescription: "sour - carlstadt, nj 4.2% abv 2023 gabf silver medal winner",
                    itemPrices: [
                        {
                            price: "4.00",
                            size: "7oz"
                        },
                        {
                            price: "5.25",
                            size: "12oz"
                        },
                        {
                            price: "7.25",
                            size: "16oz"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section>
                    <h1 className={oswald.className}>Great Beer</h1>
                    <MenuNav />
                    <MenuMap menuItems={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}