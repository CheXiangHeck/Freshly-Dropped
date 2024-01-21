import Tab from "../Tab/Tab"
import './AddFavorite.css'
import Header from "../Header/Header"
import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js";

export default function AddFavorite(){
    return(
        <>
            <Header/>
            <div className="ContentBox">
                <div className="ContentImage">
                    <img src="Food.jpg"></img>
                    <h1>Favorite</h1>
                </div>
                <div className="ContentDesc">
                    <form>
                        <h1>Fill up the form to add content to Favorited</h1>
                        <input type="text" placeholder="Content Title..." />
                        <textarea placeholder="Content Description..."></textarea>
                        <textarea placeholder="Contents..."></textarea>
                        <button></button>
                    </form>
                </div>
            </div>
            <Tab/>
        </>
    )
}