import Header from "@/components/Header";
import 'normalize.css';
import { PropsWithChildren } from "react";

import './global.css';
import styles from './page.module.css';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <div className={styles.centered}>
                    <Header></Header>
                    <main>{children}</main>
                </div>

            </body>
        </html>
    );
}
