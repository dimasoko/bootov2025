import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (<footer className={styles.footer}>
        <hr/>
        <div className={styles.footerContent}>
            <div>
                <p className={styles.footerBlock}>адрес<br/>г. барнаул, ул. шевченко, 154</p>
            </div>
            <div>
                <p className={styles.footerBlock}>время работы<br/>бассейны 10-21<br/>остальные зоны 8-22</p>
            </div>
            <div>
                <p className={styles.footerBlock}>почта<br/>wedontknowhowtodo@busyness.com</p>
            </div>
            <div>
                <p className={styles.footerBlock}>&copy; 2024<br/>бидонклаб</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;