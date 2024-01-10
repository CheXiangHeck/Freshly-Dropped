import Tab from "../Tab/Tab"
import Header from "../Header/Header"
import './Homepage.css'
import { useEffect, useState } from "react"

export default function Homepage() {
    const [windowHeight, setwindowHeight] = useState(window.innerHeight);

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

    return(
        <>
            <Header />
                <div className="First-Content" id="First-Content">
                    <video autoPlay muted>
                        <source src="./IT'SFKINGRAW.mp4"></source>
                    </video>
                </div>
                <div className="Content Second">
                    <h1>
                        Welcome to Freshly Dropped
                    </h1>
                    <p>Cook it fresh, Eat it fresh</p>
                    <button id="Share">Share</button>
                </div>
            <Tab />
        </>
    )
}