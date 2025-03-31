"use client";

import Image from 'next/image';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { clsx } from 'clsx';
import { Button } from "@mui/material";

import styles from './about.styles.module.css';
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import AboutImgLeft from "../../public/gallery/fooddrink/fooddrink12.png";
import AboutImgRight from "../../public/img/about-2.jpeg";
import SeatingImg from "../../public/img/about-1.jpeg";
import { oswald } from '../fonts';

export default function About() {
    const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

    const faqs = [
        {
            question: "Is Brewport family friendly?",
            answer: "Yes! Brewport is the family place to be!"
        },
        {
            question: "Do I need to make a reservation before coming to Brewport?",
            answer: "We do not take reservations (unless it's for Wednesday Night Trivia). Brewport operates on a first come first serve basis!"
        },
        {
            question: "Can I bring outside food or beverages into Brewport?",
            answer: "No outside food or beverages are permitted."
        },
        {
            question: "Can I bring outside food or beverages into Brewport?",
            answer: "No outside food or beverages are permitted."
        },
        {
            question: "Are dogs allowed at Brewport? What about on the outdoor patio?",
            answer: "Although we love our furry friends, we unfortunately cannot permit any animals to be at Brewport due to health department guidelines."
        },
        {
            question: "What is Brewport doing to ensure dining is done safely?",
            answer: "In light of COVID-19, Brewport has updated the restaurant and outdoor patio from top to bottom. All tables are safely distanced 6 feet apart from each other, booth size has been increased, plexiglass dividers have been placed for the ultimate private dining experience, touchless hand washing station has been installed and of course various sani-stations placed throughout the building and outdoors."
        },
        {
            question: "What are the current rules regarding masks and COVID regulations?",
            answer: "We currently follow state mandated guidelines."
        }
    ];

    const handleClick = (index: number) => {
        console.log(index);

        if (activeQuestions.includes(index)) {
            const newActiveQuestions = activeQuestions.filter((question) => question !== index);
            setActiveQuestions(newActiveQuestions);
        } else {
            setActiveQuestions([...activeQuestions, index]);
        }
    }

    return (
        <>
            <Header />
            <main className={styles.about}>
                <section>
                    <h1 className={oswald.className}>About Us</h1>
                    <p>Brewport Enriches Lives with thin crust pizza, gourmet salad, and Connecticut style beers so amazingly great, that staff and guests keep coming back for more.</p>
                </section>

                <div className={styles.imgSplit}>
                    <Image src={AboutImgLeft} alt="Brewport" />
                    <Image src={AboutImgRight} alt="Brewport" />
                </div>

                <section>
                    <h2 className={oswald.className}>Frequently Asked Questions</h2>
                    <div className={styles.faqs}>
                        <div>
                            {faqs.map((faq, index) => (
                                <div key={index} className={styles.faqitem}>
                                    <div className={styles.question} onClick={() => handleClick(index)}>{faq.question} <ExpandCircleDownIcon /></div>
                                    <div className={clsx({
                                        [styles.answer]: true,
                                        [styles.show]: activeQuestions.includes(index) ? true : false,
                                    })}>{faq.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.seatingContainer}>
                        <div className={styles.seatingImg}>
                            <Image src={SeatingImg} alt="Brewport" />
                        </div>
                        <div className={styles.seating}>
                            <h2 className={oswald.className}>Seating</h2>
                            <p>At Brewport we have extensive indoor and outdoor seating in our large dining space. We follow first come, first serve seating for all parties, regardless of size. For large parties, the max per table is 12 individuals. We will try our best to accommodate seating by extending tables or seating multiple tables in close proximity.</p>
                            <p>Private event spaces are available for larger parties, please inquire at: <a href="tel:2036124438">(203) 612-4438</a>.</p>
                        </div>
                    </div>
                </section>

                <h2 className={clsx(styles.divider, oswald.className)}>Our Team</h2>
                <div className={styles.team}>
                    <div className={clsx({ [styles.row]: true, [styles.oddRow]: true, [styles.joinbtn]: true })}>
                        <Button variant="outlined" href="./application.pdf" target="_blank">Join our Team</Button>
                    </div>
                    <div className={clsx({ [styles.row]: true, [styles.oddRow]: true })}>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The brewery</h3>
                            <strong>Bringer of cheer</strong>
                            <p>15 Barrel Brewhaus, Mash tun, and Wort Kettle with four 30 barrel fermenters, and eight in house service tanks.</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The oven</h3>
                            <strong>Bringer of good food</strong>
                            <p>10,000 lbs American Made Gas Fired Brick Oven, the &quot;Maserati&quot; of Pizza Ovens, with over 700 degres of thin crust pizza power!</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The brewmaster</h3>
                            <strong>Jeff Browning</strong>
                            <p>The Brewmaster and Partner, has loved of all things beer since his childhood. He started collecting beer cans in the 70&lsquo;s with Brewport Partner Bruce Barrett and he stuck with it. Quickly he realized the importance of this wondrous liquid and started a lifelong pursuit of knowledge in all things beer!</p>
                            <p>Most people can&lsquo;t turn a childhood passion into a career but that&lsquo;s exactly what Jeff did. He developed his palate by running tastings in college and was already brewing at home starting in his teen years. After a brief experiment in the non-beer world, Jeff sought out a career in brewing in the mid 90&lsquo;s and has never looked back. Jeff has worked with many national and international companies as a marketing rep and product consultant, with brewing stops at Diglio&lsquo;s in Hamden, CT, then on to Longshore Brewing Co. in Garden City, Long Island. Eventually, for the last 15 years, he ran the brewery at BAR in New Haven, CT, growing the brewing operation into the largest brewpub in Connecticut.</p>
                            <p>When the Barrett Brothers came to tell him of this cool old building in Bridgeport that would make a great brewpub he jumped at the chance to make a difference in such a historic brewing city. To this project, Jeff brings tens of thousands of pages of pre-prohibition batch sheets (recipes) from long gone Bridgeport breweries such as Eckert, Hartmann, and the Bridgeport Brewing Co. With these and hundreds of his own recipes he can&lsquo;t wait to bring history from grain to glass again in Bridgeport; marrying the old and the new.</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The president</h3>
                            <strong>Bruce A. Barrett</strong>
                            <p>Bruce A. Barrett, President and Partner. Bruce is an active peacemaker, amateur pianist, and craft beer lover. He and grammar school friend (and partner) Jeff Browning collected beer cans longer before they were of drinking age. He attended Foran High School in Milford, and graduated from Carnegie-Mellon University in 1985. He forgot about beer, gave away his beer can collection (something he now regrets) taught English in Chile (something he loved), returned home, and with his father “Jack” Barrett and brother John, helped build Barrett Outdoor Communications Inc, the family billboard business.</p>
                            <p>In 2000, John and Bruce purchased the Fairfield County News building in Bridgeport, installed a billboard, and rented the building to the original newspaper distributor. Bruce’s notes on the original purchase read “would be a great location for a brewpub.” In 2009 Bruce created IWagePeace.Org and directed, edited, and co-produced his first film, The Billboard from Bethlehem, chronicling the peace work of the Israeli/Palestinian non-violent group The Combatants For Peace. The film won four documentary film awards, including the Mondavi Award for Peace and Cultural Understanding at the Napa Sonoma Wine Country Film Festival. In 2015, remembering beer, Bruce and John invited Jeff into a brewing partnership in Bridgeport. Jeff loved the idea and the partnership was sealed with a drink, a smile, and faith that beer, peace, and friendship held promise for the future of Bridgeport.</p>
                            <p>John, Bruce, and Jeff are having a great time.</p>
                        </div>
                    </div>
                    <div className={clsx({ [styles.row]: true, [styles.oddRow]: true })}>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The senior partner</h3>
                            <strong>John E. Barrett</strong>
                            <p>John E. Barrett, Senior Partner. Born in December of 1960, John Barrett was always a tinkerer and collector who liked “messing with stuff.” As a kid, he would melt lead fishing sinkers to mold coins inside potatoes. He dissected old telephones, rewired them, and mounted the parts on boards so he could see the parts spread out while he made a call. Just for fun, at age twelve, he visited construction sites, spoke with the foremen, collected news, old parts, and learned what was what and who was who. John also found time to train as an Emergency Medical Technician (EMT) and spent many years saving lives as a volunteer for the Stratford EMS. It was only natural among his many fascinations, that John took to home brewing.</p>
                            <p>John graduated from Carnegie Mellon University in 1980 and joined Barrett Outdoor Communications Inc, the family billboard business. Under John’s guidance, the company built many sign locations now prominent on I95, Route 84, and RT8. In 2000, John and his brother Bruce purchased the Fairfield County News Building in Bridgeport and John built the prominent billboard towering over the building. The brothers hoped one day to turn the site into a Brewery, but settled for leasing the warehouse to the news distributor who once owned the site…, that is until he and Bruce invited Jeff into the adventure of a lifetime: Brewport. How cool to have a friends who is one of the Connecticut&lsquo;s top Brewers? John is also a ham radio hobbyist and an elected “Burgess” to the borough of Woodmont, where he lives with his family. It is fitting and natural that John, Bruce, and Jeff are now joining forces to create Brewport; a dream come true and a gift for you and the city we love.</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The authour, friend, and beer expert</h3>
                            <strong>Terry Foster</strong>
                            <p>Terry was born in London, England where he was educated in both beer drinking and chemistry and was eventually doctored. Someone told him that all Americans were rich so he married an American woman. She turned out not to be rich so he entered into chemical research, while learning how to brew as a respite from the corporate grind. Soon he turned his hand to writing articles about beer, and finally into his first book, imaginatively titled “Dr. Foster’s Book of Beer”. He moved his family to the US in 1977 and persuaded President Carter to legalize home brewing, for which feat he was later awarded US citizenship. He wrote articles on beer and brewing for several magazines whose editors seemed to be under the impression that only Englishmen knew anything about good beer. Then came the books, the first in the Classic Beer Styles series, namely Pale Ale and Porter. In the meantime he was busy making a living in the mining industry, traveling the world to do so. In the process he survived winter in Siberia, arrest in Poland for parking in a no-parking zone outside a police station and being chased by an elephant with toothache in South Africa. He wrote a second, enlarged edition of Pale Ale, partly while working in Australia, and continued to brew back home. When he retired from his day job he teamed up with Jeff Browning, the well-known beer baron. With Jeff he re-created a number of 18th and 19th century English beers, which he researched in brewing libraries in both England and the US, while at the same time teaching the Boston Red Sox how to win a World Series. He still writes a column on brewing for Brew Your Own magazine and recently published a new book “Brewing Porters and Stouts”. He is currently researching some pre-prohibition beers from a Bridgeport brewery with a plan to re-create them at Brewport. He is also working on a process to turn all professional politicians into human beings.</p>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>The Brewport</h3>
                            <strong>Soft industrial steam</strong>
                            <p>Brewport&lsquo;s building was constructed in the late 1940&lsquo;s as the central distribution point for all the out of town newspapers in Fairfield County. The main dining area, bar, pizza kitchen, and brewing areas received newspapers twice dayly hot off the presses in New Haven, Waterbury, Hartford, New York and Boston. (Back then, many papers came out twice a day) The fresh newspapers were unbundled, folded, counted, re-bundled and shipped to newspaper boys and girls and stores and vending machines around the state. The metal rolling tables are the old newspaper folding tables. All the woodwork in the building is salvaged paneling from the various offices. Our Menus and other supplies are displayed in the old newspaper vending machines. The Bar rails are made from the original steam pipes that heated the building and the basement has remnants of the old coal bins for the steam boilers. (You can even find vestiges of the commercial green paint on the walls.) The vast entertainment space was an addition called the “book room.” The book room was where non daily periodicals like comic books, Time & Life magazines puzzle books and some paper back novels were stored.</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={oswald.className}>Enjoy</h3>
                            <strong>He vibe</strong>
                            <p>We invite you to sit “family style” at the old newspaper folding tables, perch high on top of the mezzanine scaffolding, relax at the bar, enjoy a private room for parties, or rest on the south patio as cars zoom around “the loop.” From every corner you will enjoy old steam and new beer lines, beams, the pizza oven, fermenters, wart kettle, bright tank, mash tun, and service tanks. All while enjoying great pizza, fresh salads, and terrific beer.</p>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
}