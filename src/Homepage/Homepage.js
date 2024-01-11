import Tab from "../Tab/Tab"
import Header from "../Header/Header"
import './Homepage.css'
import { useEffect, useState } from "react"

export default function Homepage() {
    const [windowHeight, setwindowHeight] = useState(window.innerHeight);
    const [ButtonImage, setButtonImage] = useState("Pause");

    const handleResize = () => {
        setwindowHeight(window.innerHeight);    
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        var Content = document.getElementById("First-Content");
        Content.style.height = `${windowHeight}px`;
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[windowHeight])

    const Pause = () => {
        var Content = document.getElementById("Gordon");
        if(Content.paused) {
            Content.play();
            setButtonImage("Pause");
        } else{
            Content.pause();
            setButtonImage("Play");
        }
    }

    function Unmute() {
        var Video = document.getElementById("Gordon");
        Video.muted = !Video.muted;
    }

    return(
        <>
            <Header />
                <div className="First-Content" id="First-Content">
                    <video id="Gordon" autoPlay muted onClick={() => Unmute()}> 
                        <source src="./IT'SFKINGRAW.mp4"></source>
                    </video>
                    <button id="Pause" className={ButtonImage} onClick={() => Pause()}></button>
                    {/* <button></button> */}
                </div>
                <div className="Content Second">
                    <h1>
                        Welcome to Freshly Dropped
                    </h1>
                    <p>Cook it fresh, Eat it fresh</p>
                    <button id="Share">Share</button>
                </div>
                <div className="Content Last">
                    <div className="Context">
                        <h1 data-text="Shopping">Shopping</h1>
                    </div>
                    <div className="Context">
                        <h1 data-text="Favorited">Favorited</h1>
                    </div>
                    <div className="Middle">
                        <h1>Freshly Dropped</h1>
                    </div>
                </div>
            <Tab />
        </>
    )
}