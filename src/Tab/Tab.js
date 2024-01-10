import './Tab.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tab(){
    let link = ["/", "/Favorited", "/Shopping", "/About"];

    const TabContent = [
        { Page: "Home"},
        { Page: "Favorited"},
        { Page: "Shopping"},
        { Page: "About"},
    ];

    const [page, setPage] = useState("");

    const TabChange = (index) => { 
        switch (index) {
            case 1:
                setPage("Homepage");
                break;
            case 2:
                setPage("Favorited");
                break;
            case 3:
                setPage("Shopping");
                break;
            case 4:
                setPage("About");
                break;
            default:
                setPage("Homepage");
                break;
        }
    }

    return (
        <>
            <div className="TabContainer">
                {TabContent.map((content, index) => (
                    <div key={content.Page} className="TabContent">
                        <h1><Link to={link[index]} className="Link">{content.Page}</Link></h1>
                    </div>
                ))}
            </div>
        </>
    )
}