import Tab from "../Tab/Tab";
import './AddFavorite.css';
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AddFavorite() {
    const [Title, setTitle] = useState("");
    const [Descript, setDesc] = useState("");
    const [Submit, setSubmit] = useState(false);

    const supabase = createClient("https://ltdijrmtbxlqblglqtqf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZGlqcm10YnhscWJsZ2xxdHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDk1MzI0MCwiZXhwIjoyMDIwNTI5MjQwfQ.QIxmc7ZXOBCfIXO-w5lcBVWUIzMzjde0e4JtnFe55VA");

    async function sendData() {
        if (Submit) {
            console.log("Start Adding data");
            const { data } = await supabase.from('sharingcontent').insert({ ContentName: Title, ContentDesc: Descript });
            setSubmit(false);
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Button Clicked");
        setSubmit(true);
        sendData();
    };

    return (
        <>
            <Header />
            <div className="ContentBox">
                <div className="ContentImage">
                    <img src="Food.jpg" alt="Food" />
                    <h1>Favorite</h1>
                </div>
                <div className="ContentDesc">
                    <form onSubmit={handleSubmit}>
                        <h1>Fill up the form to add content to Favorited</h1>
                        <input
                            type="text"
                            placeholder="Content Title..."
                            value={Title}
                            onChange={handleTitleChange}
                        />
                        <textarea
                            placeholder="Content Description..."
                            value={Descript}
                            onChange={handleDescChange}
                        ></textarea>
                        <button type="submit" id="SubmitButton">Add</button>
                    </form>
                </div>
            </div>
            <Tab />
        </>
    );
}
