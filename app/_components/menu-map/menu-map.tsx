import { MenuItem } from '../../../types';
import styles from './menu-map.styles.module.css';
import { oswald } from '../../fonts';

type MenuProps = {
    menuItems: MenuItem[];
};

const MenuMap: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <div className={styles.menuList}>
            {menuItems.map((category, index) => (
                <div className={styles.category} key={index}>
                    {category.categoryName && <h2 className={oswald.className}>{category.categoryName}</h2>}
                    {category.categoryDescription && <p>{category.categoryDescription}</p>}
                    <div className={styles.categoryItems}>
                        {category.items.map((item, index) => (
                            <div className={styles.menuItem} key={index}>
                                <div className={styles.menuItemName}>
                                    <h3 className={oswald.className}>{item.itemName}</h3>
                                    <p>{item.itemDescription}</p>
                                </div>
                                <div>
                                    <ul>
                                        {item.itemPrices.map((price, index) => (
                                            <li key={index}>
                                                <span>{price.size}</span> <strong>${price.price}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MenuMap;