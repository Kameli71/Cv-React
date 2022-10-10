import React from 'react'
import "./User.css"
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function User() {
    return (
        <div className="user">
           <img src="./images/avatar.jpg" alt="Moi" className="user_avatar"/>
           <h1 className="user_name">Karim Kameli</h1>
           <p className="user_profession">Développeur Web fullstack</p>
           <div className="user_infos">
               <p className="user_info"> <HomeIcon />16 rue du Bois 71300 Montceau</p>
               <p className="user_info"> <PhoneAndroidIcon /><a href="tel:+33637791055">0637791055</a></p>
               <p className="user_info"> <LinkedInIcon /><a href="https://www.linkedin.com/in/karim-kameli-4a7992218/">https://www.linkedin.com/in/karim-kameli-4a7992218/</a></p>
               <p className="user_info"> <EventIcon />18/08/1990</p>
               <p className="user_info"> <LocationOnIcon />Saint-Vallier</p>
           </div>
        </div>
    )
}

export default User
