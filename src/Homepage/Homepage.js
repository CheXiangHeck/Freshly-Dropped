import Tab from "../Tab/Tab"
import Header from "../Header/Header"
import './Homepage.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Homepage() {
    const [ButtonImage, setButtonImage] = useState("Pause");

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
                </div>
                <div className="Second">
                    <h1>
                        Welcome to Freshly Dropped
                    </h1>
                    <p>Cook it fresh, Eat it fresh</p>
                </div>
                <div className="Content Last">
                    <div className="Context">
                        <h1 data-text="Shopping"><Link className="Linking" to="/Shopping">Shopping</Link></h1>
                    </div>
                    <div className="Context">
                        <h1 data-text="Favorited"><Link className="Linking" to="/Favorited">Favorited</Link></h1>
                    </div>
                    <div className="Middle">
                        <h1>Freshly Dropped</h1>
                    </div>
                </div>
            <Tab />
        </>
    )
}