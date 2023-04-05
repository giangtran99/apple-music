import MusicPlayer from "./MusicPlayer";
import SideMenu from "./SideMenu";
import styles from '@src/styles/Layout.module.css'






export default function Layout({ children }: any) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles["side-bar"]}>
                    <SideMenu />
                </div>
                <div className={styles["music-player"]}>
                    <MusicPlayer />
                </div>
                <main className={styles["main-content"]}>
                    {children}
                </main>
            </div>
        </>
    )
}