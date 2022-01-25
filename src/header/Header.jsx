import "./header.css";
import background from "../img/background.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={background} alt="background"/>
        </div>
    );
};

export default Header;