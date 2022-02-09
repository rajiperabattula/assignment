import React from "react";
import logo_mbl from '../logo-mbl.svg';
import hamburger from "../hamburger.svg";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div className="toolbar_logo">
      <img src={logo_mbl} className="App-logo-mbl" alt="logo" />
      </div>
      <div className="btn_menu">
        <button className='try-button login'>Login</button>
        <div className="toggle-button" onClick={props.drawerToggleClickHandler}>
          <img src={hamburger} alt='toogle' className="hamburger"/>
        </div>
      </div>
    </nav>
  </header>
);

export default toolbar;
