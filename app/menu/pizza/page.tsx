import Footer from "../../_components/footer/footer";
import Header from "../../_components/header/header";
import MenuMap from "../../_components/menu-map/menu-map";
import MenuNav from "../../_components/menu-nav/menu-nav";
import { MenuItem } from '../../../types';
import { MENU_SIZES } from "../../../constants";
import { oswald } from "../../fonts";

export default function Pizza() {
    const menuItems: MenuItem[] = [
        {
            categoryName: "",
            items: [
                {
                    itemName: "The Brewmaster",
                    itemDescription: "chicken, pepperoni, light hot pepper",
                    itemPrices: [
                        {
                            price: "21",
                            size: "Small"
                        },
                        {
                            price: "27",
                            size: "Large"
                        }
                    ]
                },
                {
                    itemName: "The Barrett",
                    itemDescription: "korean bbq pulled pork, kimchi",
                    itemPrices: [
                        {
                            price: "21",
                            size: "Small"
                        },
                        {
                            price: "26",
                            size: "Large"
                        }
                    ]
                },
                {
                    itemName: "The Tree Hugger",
                    itemDescription: "peppers, onions, mushrooms, broccoli, garlic",
                    itemPrices: [
                        {
                            price: "20",
                            size: "Small"
                        },
                        {
                            price: "25",
                            size: "Large"
                        }
                    ]
                },
                {
                    itemName: "The Meat Master",
                    itemDescription: "pepperoni, sausage, bacon, ham",
                    itemPrices: [
                        {
                            price: "21",
                            size: "Small"
                        },
                        {
                            price: "27",
                            size: "Large"
                        }
                    ]
                },
                {
                    itemName: "The White Clam",
                    itemDescription: "fresh shucked clams, garlic, olive oil, mozzarella",
                    itemPrices: [
                        {
                            price: "30",
                            size: "Small"
                        },
                        {
                            price: "50",
                            size: "Large"
                        }
                    ]
                },
                {
                    itemName: "The Chef's Choice",
                    itemDescription: "our rotating daily special - ask your server!",
                    itemPrices: []
                }
            ]
        },
        {
            categoryName: "Build Your Own Pie",
            categoryDescription: "Crust Options: Classic Crust 0.00 Gluten Free Cauliflower Crust 5.00 Gluten Free Crust 5.00 Toppings: fresh mozzarella/gorgonzola/pineapple 3.00/4.25, pepperoni / pork sausage / bacon / meatballs / ham 3.75/5.25, chicken / buffalo chicken / pulled pork / chicken sausage 5.00/6.00, jumbo shrimp 13/19, roasted red peppers / cherry peppers / mushroom 2.75/3.50, black olives / onion / tomato / green peppers 2.50/3.25, breaded eggplant / spinach / anchovies / broccoli 3.50/4.75, basil / garlic 1.00/1.50, artichoke hearts / mashed potato 3.25/4.50, egg 1.50 each",
            items: [
                {
                    itemName: "Red",
                    itemDescription: "house-made sauce with or without mozzarella",
                    itemPrices: [
                        {
                            price: "13",
                            size: MENU_SIZES.SMALL
                        },
                        {
                            price: "17",
                            size: MENU_SIZES.LARGE
                        }
                    ]
                },
                {
                    itemName: "White",
                    itemDescription: "oil, garlic, and parmesan with or without mozzarella",
                    itemPrices: [
                        {
                            price: "15",
                            size: MENU_SIZES.SMALL
                        },
                        {
                            price: "19",
                            size: MENU_SIZES.LARGE
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
                    <h1 className={oswald.className}>Great Pizza</h1>
                    <MenuNav />
                    <MenuMap menuItems={menuItems} />
                </section>
            </main>
            <Footer />
        </>
    );
}