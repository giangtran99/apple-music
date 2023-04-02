import SearchBar from '@src/components/SearchBar'
import { BagIcon, ClockIcon, MicroIcon, MusicIcon, PlayIcon, PlayListIcon, RadioIcon, StarIcon } from '../icons'
const sideMenu = [
    {
        name: "Apple Music",
        childrens: [
            { icon: <PlayIcon />, name: "Listen Now" },
            { icon: <RadioIcon />, name: "Radio" },
        ]
    },
    {
        name: "Library",
        childrens: [
            { icon: <ClockIcon />, name: "Recently Added" },
            { icon: <MicroIcon />, name: "Artists" },
            { icon: <BagIcon />, name: "Allbums" },
            { icon: <MusicIcon />, name: "Songs" },
        ]
    },
    {
        name: "Store",
        childrens: [
            { icon: <StarIcon />, name: "Itunes Store" }

        ]
    },
    {
        name: "Playlists",
        childrens: [
            { icon: <PlayListIcon />, name: "All Playlists" }
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
                            <p>{menu.name}</p>
                            <ul>
                                {menu.childrens.map((item:any)=>{
                                    return <><li>
                                        
                                        
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