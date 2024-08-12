import Footer from "../../_components/footer/footer";
import Header from "../../_components/header/header";
import MenuNav from "../../_components/menu-nav/menu-nav";
import MenuMap from "../../_components/menu-map/menu-map";
import { MenuItem } from "../../../types";
import { oswald } from "../../fonts";

export default function Cocktails() {
    const menuItems: MenuItem[] = [
        {
            categoryName: "",
            items: [
                {
                    itemName: "Bridgeport Bramble",
                    itemDescription: "elevate vodka, apple brandy, fresh lemon juice, blackberries",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
                        },
                    ]
                },
                {
                    itemName: "And So It Gose",
                    itemDescription: "mi campo blanco, fresh lime juice, agave nectar, strawberry, basil, & gose",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
                        }
                    ]
                },
                {
                    itemName: "Micalizzi's Sangria",
                    itemDescription: "micalizzi cherry italian ice, strawberry, orange slice, apple brandy, topped with red wine & a scoop of micalizzi’s italian ice",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
                        }
                    ]
                },
                {
                    itemName: "Elderflower Fizz",
                    itemDescription: "elevate vodka, aperol, st. germain, lemon, topped with ginger beer",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
                        }
                    ]
                },
                {
                    itemName: "The Law",
                    itemDescription: "litchfield bourbon, triple sec, cranberry juice, fresh lemon juice, bitters, topped with lemon-lime soda",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
                        }
                    ]
                },
                {
                    itemName: "The Spicy Bee",
                    itemDescription: "pendleton 1910 rye, hot honey, pineapple juice, lemon juice & orange",
                    itemPrices: [
                        {
                            price: "12.00",
                            size: ""
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
                    <h1 className={oswald.className}>Great Cocktails</h1>
                    <MenuNav />
                    <MenuMap menuItems={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}