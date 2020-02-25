import React from 'react';
import './menu.css';
import logo from "../logo.png";
import apropos from "../components/About";
import contact from "../components/Contact";
import {Link} from 'react-router-dom';


export default class Menu extends React.Component{
    
    render()
    {
        return (
        <div className="madiv">
           <img src={logo}/>
            <ul>
                <li>
               <Link to="/">Accueil</Link>
               </li>
               <li>
               <Link to="/contact">Contact</Link>
               </li>
               <li>
               <Link to="/About">À propos</Link>
               </li>
               <li>
               <Link to="/compte">Compte</Link>
               </li>
            </ul>
      
         </div>
         );
    }
}

