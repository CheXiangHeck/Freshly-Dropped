import Tab from "../Tab/Tab"
import './Shopping.css'
import Header from "../Header/Header"

export default function Shopping(){
    return(
        <>
            <Header/>
            <div className="Shopping-Content">
                <div className="Shopping-Filter">

                </div>
                <div className="Shopping-Items">
                    <div className="Shopping-Items-Log">
                        <div className="Item-Name">

                        </div>
                        <div className="Item-Desc">

                        </div>
                        <div className="Item-Price">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Tab/>
        </>
    )
}