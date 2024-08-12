import styles from './announcements.styles.module.css';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { oswald } from '../../fonts';

const Announcements = () => {
    return (
        <div className={styles.news}>
            <div className={styles.panel}>
                <div className={styles.contents}>
                    <h1 className={oswald.className}><NewspaperIcon sx={{ marginRight: '4px', width: '30px', height: '30px' }} /> Announcement</h1>
                    <p className={styles.postdate}>Tuesday, January 4, 2024</p>
                    <p>We are excited to announce the launch of our new website! Explore our updated features and improved user experience. Stay tuned for more updates and thank you for your continued support.</p>
                </div>
            </div>
        </div>
    );
};

export default Announcements;