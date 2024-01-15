import Tab from "../Tab/Tab"
import './About.css'
import { useState, useEffect } from "react"
import Spline from '@splinetool/react-spline';


export default function About(){
    const [AboutHeight, setAboutHeight] = useState(window.innerHeight);

    const handleHeight = () => {
        setAboutHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleHeight);
        var AboutPage = document.getElementById("AboutPage");
        AboutPage.style.height = `${AboutHeight}px`;

        return () => {
            window.removeEventListener('resize', handleHeight)
        }
    },[AboutHeight])

    const NextPage = (Num) => {
        var FirstPAGE = document.getElementsByClassName("About");
        FirstPAGE[Num].classList.add("GoUpAnimate");
        var next = Num + 1;
        var Page;
        switch (next) {
            case 1:
                Page = "Second";
                break;
            case 2:
                Page = "Third";
                break;
            case 3: 
                Page = "Fourth";
                break;
            default:
                Page = "Error!";
                break;
        }
        FirstPAGE[Num].addEventListener("animationend", OtherPage(Page));
        return () => {
            FirstPAGE[Num].removeEventListener("animationend", OtherPage(Page));
        }
    }

    const OtherPage = (Page) => {
        var OtherPage = document.getElementById(`${Page}`);
        OtherPage.style.display = "flex";
    }

    return(
        <>
            <div id="AboutPage">
                <div className="About" id="First">
                    <h1>Freshly Dropped</h1>
                    <p>About Us</p>
                    <img src="ArrowDown.png" onClick={() => NextPage(0)}></img>
                </div>
                <div className="About" id="Second">
                    <div className="AboutTitle">
                        <h1>Why Freshly Dropped</h1>
                    </div>
                    <div className="WhyFreshly">
                        <div className="TextContainerWhy" id="ContainerWhy">
                            <p>Why Freshly Dropped?</p>
                            <p>You ask</p>
                            <p>Freshly dropped teach you how to cook</p>
                            <p>Platform for users to buy material and equipment for cooking</p>
                            <p>Like I said Cook Fresh, Eat Fresh.</p>
                            <p>What are you waiting for?</p>
                            <p>Start COOKING with Freshly Dropped</p>
                            <p>#Freshly</p>
                        </div>
                    </div>
                    <div className="SplineViewer">
                        <Spline scene="https://prod.spline.design/2NdBT9FMHJDeDcaq/scene.splinecode" />
                    </div>
                    <button className="ThirdPage" onClick={() => NextPage(1)}>
                        Who is Freshly Dropped
                    </button>
                </div>
                <div className="About" id="Third">
                </div>
            </div>
        </>
    )
}