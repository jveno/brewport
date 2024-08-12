import Footer from "../../_components/footer/footer";
import Header from "../../_components/header/header";
import MenuNav from "../../_components/menu-nav/menu-nav";
import MenuMap from "../../_components/menu-map/menu-map";
import { MenuItem } from "../../../types";
import { MENU_SIZES } from "../../../constants";
import { oswald } from "../../fonts";

export default function Wine() {

    const menuItems: MenuItem[] = [
        {
            categoryName: "",
            items: [
                {
                    itemName: "Gooseneck Rosé",
                    itemDescription: "grenache, spain strawberry nose, dry & crisp with delicate fruit & citrus",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Rodney Strong: Chardonnay",
                    itemDescription: "california cold fermented with aromas of baked apple, pear, pineapple. leads to a creamy, well-balanced finish",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Ruffino Lumina: Pinot Grigio",
                    itemDescription: "sonoma, california: fresh nectarine, pear, and passion fruit flavors with hint of vanilla spice",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Gravel & Loam: Sauvignon Blanc",
                    itemDescription: "new zealand: full of bright gooseberry, vibrant passion fruit, lively citrus and peach flavours. aromatic & herbaceous.",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Franco Amoroso Barbera D'asti",
                    itemDescription: "piedmont, italy rich with notes of cherries, plums, and iris",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Bousquet: Malbec",
                    itemDescription: "mendoza, argentina: medium body with bright acidity, juicy body and round tannins.",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "Carmel Road: Cabernet Sauvignon",
                    itemDescription: "california: soft tannins, nice acidity, mocha & dark berry with a velvety smooth finish.",
                    itemPrices: [
                        {
                            price: "10",
                            size: MENU_SIZES.GLASS
                        },
                        {
                            price: "34",
                            size: MENU_SIZES.BOTTLE
                        }
                    ]
                },
                {
                    itemName: "The Prisoner Red Blend",
                    itemDescription: "california: this red blend is crafted from an unlikely mix of zinfandel, cabernet sauvignon, petite sirah, syrah, and charbono, which create a truly unique and memorable taste experience.",
                    itemPrices: [
                        {
                            price: "78",
                            size: MENU_SIZES.BOTTLE
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
                    <h1 className={oswald.className}>Great Wine</h1>
                    <MenuNav />
                    <MenuMap menuItems={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}