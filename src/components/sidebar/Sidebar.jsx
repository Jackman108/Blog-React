import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME</span>
                <img src="https://revivecosmetics.eu/images/index/banner7.jpg" alt="photo"/>
                <p> CTRL + / / ⌘ / быстрое комментирование/раскоментирование кода
                    Так же в экстренный момент могут быт полезны горячие клавиши для работы с гитом
                    CTRL + K / ⌘ K коммит проекта в систему контроля версий
                    CTRL + SHIFT + K пуш проекта в систему контроля версий
                    Ну вот и всё, что стоит знать о горячих клавишах в IDE WEBStorm.
                    Научитесь использовать эти клавиши и все ваши коллеги или друзья программисты будут удивлены вашей скорости при показе вами экрана! :)</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>

                    <li className="sidebarListItem">Music</li>

                    <li className="sidebarListItem">Style</li>

                    <li className="sidebarListItem">Sport</li>

                    <li className="sidebarListItem">Tech</li>

                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-instagram"> </i>
                    <i className="sidebarIcon fab fa-twitter"> </i>
                    <i className="sidebarIcon fab fa-telegram-plane"> </i>
                    <i className="sidebarIcon fab fa-vk"> </i>
                    <i className="sidebarIcon fab fa-pinterest-p"> </i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;