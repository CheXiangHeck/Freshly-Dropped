import Tab from "../Tab/Tab"
import './Favorited.css'
import Header from "../Header/Header"
import { useState } from "react"

export default function Favorited(){
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
                <div className="Favorite-Content">
                    <div className="Fav-Content">
                        <div className="Fav-Content-Title">
                            <p>Welcome</p>
                            <p className="Fav-Context"></p>
                            <p className="Fav-Author">By Ali</p>
                        </div>
                    </div>
                </div>
            </div>
            <Tab />
        </>
    )
}