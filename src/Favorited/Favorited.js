import Tab from "../Tab/Tab"
import './Favorited.css'
import { Link } from "react-router-dom"
import Header from "../Header/Header"
import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js";

export default function Favorited(){
    const supabase = createClient("https://ltdijrmtbxlqblglqtqf.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZGlqcm10YnhscWJsZ2xxdHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDk1MzI0MCwiZXhwIjoyMDIwNTI5MjQwfQ.QIxmc7ZXOBCfIXO-w5lcBVWUIzMzjde0e4JtnFe55VA");
    const [Content, setContent] = useState([]);
    useEffect(() => {
        getData();
    },[]);

    async function getData() {
        const {data} = await supabase.from("sharingcontent").select();
        setContent(data);
    }

    return(
        <>
            <Header />
            <div className="Content-page">
                <h1>Favorited</h1>
                <p>Learn Cooking here</p>
            </div>
            <div className="Content-Second">
                <div className="Favorite-Search" id="Favorite-Search">
                    <div className="SearchTag">
                        <input id="Searching" type="text"></input>
                    </div>
                    <button className="SearchButton">
                        <img src="Search.png"></img>
                    </button>
                </div>
                <Link to="/AddFavorite" className="Add-Content">
                    Add Content
                </Link>
                <div className="Favorite-Content">
                    {Content.map((content) => (
                        <div className="Fav-Content" key={content.ContentName}>
                            <div className="Fav-Content-Title">
                                <p>{content.ContentName}</p>
                                <p className="Fav-Context">{content.ContentDesc}</p>
                                <p className="Fav-Author">{"By " + content.ContentAuthor}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Tab />
        </>
    )
}