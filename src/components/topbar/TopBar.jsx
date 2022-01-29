import React from 'react';
import "./topbar.css"
import {Link} from "react-router-dom";

export default function TopBar() {
    const user = false;
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
        <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
        <li className="topListItem"><Link className="link" to="/sidebar">ABOUT</Link></li>
        <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
        <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
        <li className="topListItem">{user && "LOGOUT"}</li>

    </ul>
</div>
<div className="topRight">
    {user ? (
        <img className="topImg" src="https://i.pinimg.com/150x150/e1/fa/08/e1fa08734dadd264b4d042323d4bcbe9.jpg" alt="login"/>
    ) : (
        <ul className="topList">
            <li className="topListItem">
        <Link className="link" to="/login">LOGIN</Link>
            </li>
        <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
        </li>
        </ul>
    )}

    <i className="topSearchIcon fas fa-search"> </i>
</div>

        </div>
    );
}