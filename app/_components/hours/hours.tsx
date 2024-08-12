import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import styles from '../../styles/Home.module.css';

const Hours = () => {

    return (
        <div>
            <div className={styles.hours}>
                <div className={styles.panel}>
                    <div className={styles.header}>
                        <h2><AccessTimeFilledIcon sx={{ marginRight: '4px' }} />Hours</h2>
                        <p className={styles.headerNote}>Open for indoor/outdoor dining, take-out and curbside pick-up</p>
                    </div>
                    <div className={styles.contents}>
                        <p><strong>Weekdays</strong> from <strong>3:00pm to 9:30pm</strong></p>
                        <p><strong>Friday and Saturday</strong> from <strong>12:00pm to 11:00pm</strong></p>
                        <p><strong>Sunday</strong>  from <strong>12:00pm to 9:00pm</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hours;