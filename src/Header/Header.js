import { Link } from 'react-router-dom';
import './Header.css'


export default function Header(){
    const Icon = [
        {icon: "Facebook.png"},
        {icon: "Instagram.png"},
        {icon: "LinkedIn.png"},
    ];

    const SocialLink = (SocialChoice) => {
        if (SocialChoice === "Facebook.png"){
            window.location.href = "https://www.facebook.com/che.weixiang.3";
        } else if (SocialChoice === "Instagram.png") {
            window.location.href = "https://www.instagram.com/";
        } else if (SocialChoice === "LinkedIn.png") {
            window.location.href = "https://www.linkedin.com/in/wei-xiang-apu/";
        }
    }

    return (
        <>
            <div className="TopContainer">
                <Link to="/" className="Logo">Freshly Dropped</Link>
                <div className="Social-Media">
                    {Icon.map((Social,index) => (
                        <div className="Social-Icon" key={Social.icon}>
                            <button onClick={() => SocialLink(Social.icon)}><img src={Social.icon} alt={Social.icon}></img></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}