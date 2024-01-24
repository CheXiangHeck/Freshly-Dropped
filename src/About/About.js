import "./About.css";
import Header from "../Header/Header";
import Tab from "../Tab/Tab";

export default function About() {
    

    return(
        <>
            <Header/>
            <div className="About-Page">
                <div className="About-Content">
                    <div className="About-title">
                        <h1>About Us</h1>
                    </div>
                    <div className="About-Introduction">
                        <div>
                            <h1>Why Freshly Dropped made?</h1>
                            <p>This website is made during 2024 for purpose of spending time on doing some project to enhance myself on React.</p>
                        </div>
                        <div>
                            <h1>What is Freshly Dropped</h1>
                            <p>Freshly Dropped was made for the purpose of giving users some knowledge on how to cook.</p>
                        </div>
                    </div>
                </div>
                <div className="About-Content">
                    <div className="Who">
                        <h1>Freshly Dropped</h1>
                    </div>
                    <div className="Developers">
                        <div className="Developer-Container">
                            <img src="Sonic.png"></img>
                            <h1>Sonic The Master Chef</h1>
                            <p>Wise Words: You're too slow!</p>
                        </div>
                        <div className="Developer-Container">
                            <img src="MasterChefRamsay.png"></img>
                            <h1>Master Chef Gordan Ramsay</h1>
                            <p>Wise word: It's fking raw! You twat.</p>
                        </div>
                        <div className="Developer-Container">
                            <img src="ChefRush.png"></img>
                            <h1>Chef Rush</h1>
                            <p>Wise word: 🗿🤨</p>
                        </div>
                    </div>
                    <div className="Declare">
                        <p>*This is just a joke, don't take it seriously.</p>
                    </div>
                </div>
                <div className="About-Content">
                    <div className="About-Contact">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="Contact-Info">
                        <div className="Info">
                            <p>Email: chehi716@gmail.com</p>
                            <p>LinkedIn: https://www.linkedin.com/in/wei-xiang-apu/</p>
                            <p>Phone-Num: +6011-16161257</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}