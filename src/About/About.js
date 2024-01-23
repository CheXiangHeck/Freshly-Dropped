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
                    
                </div>
                <div className="About-Content">

                </div>
            </div>
            <Tab/>
        </>
    )
}