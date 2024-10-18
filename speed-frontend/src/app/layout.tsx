import 'normalize.css';
import { PropsWithChildren } from "react";

import Link from 'next/link';
import './global.css';
import styles from './layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <title>SPEED</title>
            </head>
            <body>
                <div className={styles.header}>
                    <div className={`${styles.centered} ${styles.headerContent}`}>
                        <Link href='/' className={styles.headerLink}>
                            <h1>SPEED</h1>
                        </Link>
                        <Link href='/discover'>Discover</Link>
                        <Link href='/submit'>Submit</Link>
                        <Link href='/moderate'>Moderate</Link>
                        <Link href='/analyze'>Analyze</Link>
                        <Link href='/admin'>Admin</Link>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.centered}>
                        <main>{children}</main>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.centered}>
                            <p>© SPEED 2024</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
