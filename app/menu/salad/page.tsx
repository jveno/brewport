import Footer from "../../_components/footer/footer";
import Header from "../../_components/header/header";
import MenuNav from "../../_components/menu-nav/menu-nav";
import MenuMap from "../../_components/menu-map/menu-map";
import { MenuItem } from '../../../types';
import { MENU_SIZES } from '../../../constants';
import { oswald } from "../../fonts";

export default function Salad() {
    const menuItems: MenuItem[] = [
        {
            categoryName: "",
            items: [
                {
                    itemName: "Baby Spinach Salad",
                    itemDescription: "spinach, red onions, hardboiled egg, gorgonzola, crispy bacon",
                    itemPrices: [
                        {
                            price: "14",
                            size: MENU_SIZES.INDIVIDUAL
                        },
                        {
                            price: "24",
                            size: MENU_SIZES.FAMILY
                        }
                    ]
                },
                {
                    itemName: "Caesar Salad",
                    itemDescription: "romaine, parmesan cheese with or without anchovies",
                    itemPrices: [
                        {
                            price: "11",
                            size: MENU_SIZES.INDIVIDUAL
                        },
                        {
                            price: "19",
                            size: MENU_SIZES.FAMILY
                        }
                    ]
                },
                {
                    itemName: "Antipasto",
                    itemDescription: "roasted red peppers, tomatoes, olives, ham, provolone, salami, pepperoni, giardiniera over house greens",
                    itemPrices: [
                        {
                            price: "15",
                            size: MENU_SIZES.INDIVIDUAL
                        },
                        {
                            price: "25",
                            size: MENU_SIZES.FAMILY
                        }
                    ]
                },
                {
                    itemName: "Garden Salad",
                    itemDescription: "mixed field greens and romaine with greens, apples, candied walnuts, gorgonzola",
                    itemPrices: [
                        {
                            price: "12",
                            size: MENU_SIZES.INDIVIDUAL
                        },
                        {
                            price: "27",
                            size: MENU_SIZES.FAMILY
                        }
                    ]
                },
                {
                    itemName: "Additions",
                    itemDescription: "add chicken $5 or shrimp $3 each to any salad",
                    itemPrices: []
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section>
                    <h1 className={oswald.className}>Great Salad</h1>
                    <MenuNav />
                    <MenuMap menuItems={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}