import "../styles/Navbar.css"
import { useEffect, useState } from "react"
import { NavDrawer } from "./NavDrawer.jsx"
import { Settings } from "./Settings.jsx"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export function Navbar(){

    const [styleBool, setStyleBool] = useState(false);
    
    // Run this to open the drawer / and keep track of the state of the styleBool
    useEffect(() => {
        setStyleBool(false);
    })

    // If clicked, set the styleBool to true
    function clicked(){
        setStyleBool(true);
    }


    return(
        <div>
            <NavDrawer styleBool={styleBool}/>
            <div className="nav flex main">
                <div className="left flex">
                    <div className="symbol link flex"><Link className="classlink" to={"/"}>LW</Link></div>
                    <div className="link flex"><Link className="classlink">Resume</Link></div>
                    <div className="link flex"><Link className="classlink">Classes</Link></div>
                    <div className="link flex"><Link className="classlink" to={"/Projects"}>Projects</Link></div>
                </div>
                <div className="right flex">
                    <div className="link flex"><Link className="classlink">Help</Link></div>
                </div>
            </div>
            <div className="nav flex sub">
                <button className="menu left" onClick={clicked}>menu</button>
            </div>
            <Outlet/>
            <Settings/>
        </div>
    )
}