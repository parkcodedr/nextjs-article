import styles from '../styles/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <div className={styles.main}>
                    {children}
                </div>

            </div>
        </>
    )
}

export default Layout
