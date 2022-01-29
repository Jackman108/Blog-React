import React from 'react';
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";

function Home() {
    return (
        <>
            <TopBar />
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;