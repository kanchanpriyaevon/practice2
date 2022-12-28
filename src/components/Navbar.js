import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

export default function Navbar(props) {
    if(props.theme ==='green'){
        var custom = 'green-theme';
    } else if(props.theme ==='red'){
         custom = 'red-theme';
    } else if(props.theme ==='blue'){
         custom = 'blue-theme';
    } else if(props.theme ==='purple'){
         custom = 'purple-theme';
    } else if(props.theme ==='yellow'){
         custom = 'yellow-theme';
    } else{
        custom='';
   
    }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${custom}`} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">{props.about}</a>
                    </li>
                </ul>
                <div className='color_palletes'>
                    <button type="button" onClick={() => props.themeMode('green')}  className="green mx-1"></button>
                    <button type="button" onClick={() => props.themeMode('red')}  className="red mx-1"></button>
                    <button type="button" onClick={() => props.themeMode('blue')}  className="blue mx-1"></button>
                    <button type="button" onClick={() => props.themeMode('purple')} className="purple mx-1"></button>
                    <button type="button" onClick={() => props.themeMode('yellow')}  className="yellow mx-1"></button>

                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-lbel" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark' : 'Light'} Mode</label>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string

}
