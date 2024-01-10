import './Header.css'


export default function Header(){
    const Icon = [
        {icon: "Facebook.png"},
        {icon: "Instagram.png"},
        {icon: "LinkedIn.png"},
    ];

    return (
        <>
            <div className="TopContainer">
                <div className="Logo">Freshly Dropped</div>
                <div className="Social-Media">
                    {Icon.map((Social) => (
                        <div className="Social-Icon" key={Social.icon}>
                            <button><img src={Social.icon} alt={Social.icon}></img></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}