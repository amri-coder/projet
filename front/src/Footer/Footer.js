import React from 'react';
import './footer.css';
import logo from "../logo.png";
import {Link} from 'react-router-dom';


export default class Footer extends React.Component{
    
    render()
    {
        return (
        <div className="footer">
               <p>
                   AMRI Hafedh
               </p>
               <p>
               © AgenceIMMO - Tous droits réservés - 2020
               </p>
            
      
         </div>
         );
    }
}

