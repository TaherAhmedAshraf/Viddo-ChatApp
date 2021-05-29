import React from "react";
import { NavLink } from "react-router-dom";
import image4 from "../Assets/Images/4";
import image5 from "../Assets/Images/5";
import imageEarth from "../Assets/Images/earth";
import "../Styles/home.css";

export default function Home() {
  return (
    <div className="body">
      <header className="header">
        <div className="container-header">
          <p className="header-pretitle">WELCOME TO</p>
          <h1 className="site-title">
            <span className="white-accent">V</span>ID
            <span className="underline">DO</span>
          </h1>
          <NavLink to="/chat" className="join-now">
            JOIN NOW
          </NavLink>
        </div>
      </header>

      <section className="chat">
        <img src={imageEarth} alt="a pixelated earth map" />
        <h2>
          <span className="blue-accent">CHAT</span> LIKE NEVER BEFORE !
        </h2>
      </section>

      <section className="randomness">
        <div className="randomness-left-maintain">
          <h2>
            <span className="blue-accent">RANDOMNESS</span> LIKE NEVER BEFORE !
          </h2>
        </div>
      </section>

      <section className="fun">
        <h2 className="blue-accent">FUN IN REAL TIME...</h2>
        <img src={image4} alt="animated people talking" />
      </section>

      <section className="waiting">
        <div className="col">
          <h2>
            WHAT ARE <br />
            YOU WAITING FOR ?
          </h2>
          <NavLink to="/chat" className="join-now">
            JOIN NOW
          </NavLink>
        </div>
        <div className="col">
          <img src={image5} alt="" />
        </div>
      </section>
    </div>
  );
}
