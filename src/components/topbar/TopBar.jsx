import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
<div className="topLeft">
    <i className="topIcon fab fa-instagram"> </i>
    <i className="topIcon fab fa-twitter"> </i>
    <i className="topIcon fab fa-telegram-plane"> </i>
    <i className="topIcon fab fa-vk"> </i>
    <i className="topIcon fab fa-pinterest-p"> </i>
</div>
<div className="topCenter">
    <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
    </ul>
</div>
<div className="topRight">
    <img className="topImg" src="https://i.pinimg.com/150x150/e1/fa/08/e1fa08734dadd264b4d042323d4bcbe9.jpg" alt="login"/>
    <i className="topSearchIcon fas fa-search"> </i>
</div>

        </div>
    );
}