
import React from "react";
import { useState } from "react";
import './Header.css';

import NavMenu from './NavMenu'




export default function Header() {

    const [isMenu,setisMenu] = useState(false);



    const hideShow = ()=>{
        if(isMenu){
            setisMenu(false);

        }else{
            setisMenu(true);
        }
        
        

    }
    return (
        <div className="main-header">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="logo" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">King Food</a>


                    </div>
                    <div className="cart">

                        <input id="search" className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                        <span><i class="fa-solid fa-location-dot"></i></span>
                        <span><i class="fa-regular fa-user"></i></span>
                        <span onClick={hideShow}><i class="fa-solid fa-bars"></i></span>
                    </div>
                 {isMenu && <div className="menu">
                       
                       <NavMenu/>
                   </div>
                   }
                    
                    

                    

                </div>
            </nav>
        </div>
    );
}
// git status
// git add .
//git commit -m "commit msg"
//git push origin branch name
