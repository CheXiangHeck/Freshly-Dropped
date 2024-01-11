import Tab from "../Tab/Tab"
import './Favorited.css'
import Header from "../Header/Header"

export default function Favorited(){
    return(
        <>
            <Header />
            <div className="Content-page">
                <h1>Favorited</h1>
                <p>Learn Cooking here</p>
            </div>
            <div className="Content-Second">

            </div>
            <Tab />
        </>
    )
}