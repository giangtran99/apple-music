import SearchBar from '../components/SearchBar'
import { IoAlbumsOutline, IoGridOutline, IoMusicalNoteOutline, IoPlayCircleOutline, IoRadioOutline, IoStarOutline, IoTelescopeOutline, IoTimeOutline } from "react-icons/io5";
import styles from '@src/styles/SideMenu.module.css'
const sideMenu = [
    {
        name: "Apple Music",
        childrens: [
            { icon: <IoPlayCircleOutline />, name: "Listen Now" ,url :"/"},
            { icon: <IoRadioOutline />, name: "Radio" ,url :"/music-tab/radio"},
        ]
    },
    {
        name: "Library",
        childrens: [
            { icon: <IoTimeOutline />, name: "Recently Added" },
            { icon: <IoTelescopeOutline />, name: "Artists" },
            { icon: <IoAlbumsOutline />, name: "Allbums" },
            { icon: <IoMusicalNoteOutline />, name: "Songs" },
        ]
    },
    {
        name: "Store",
        childrens: [
            { icon: <IoStarOutline />, name: "Itunes Store" }

        ]
    },
    {
        name: "Playlists",
        childrens: [
            { icon: <IoGridOutline />, name: "All Playlists" }
        ]
    }

]



export default function SideMenu() {
    return (
        <>
            <div>
                <div>
                    <SearchBar />
                </div>
                {sideMenu.map((menu: any) => {
                    return <>
                        <div>
                            <p> * {menu.name}</p>
                            <ul>
                                {menu.childrens.map((item: any,index:number) => {
                                    return <>
                                    <li key={index}>
                                        <a href={item.url}>
                                        <div className={styles["tab-element"]}>
                                            {item.icon}
                                            {item.name}
                                        </div>
                                        </a>                       
                                    </li></>
                                })}
                            </ul>
                        </div>
                    </>
                })}

            </div>


        </>
    )
}