import "../styles/Navbar.css"
import { useState } from "react"
import { NavDrawer } from "./NavDrawer"
import { Settings } from "./Settings"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export function Navbar(){

    return(
        <div>
            <div className="nav flex main">
                <div className="left flex">
                    <div className="symbol link flex"><Link className="classlink">LW</Link></div>
                    <div className="link flex"><Link className="classlink">Resume</Link></div>
                    <div className="link flex"><Link className="classlink">Classes</Link></div>
                    <div className="link flex"><Link className="classlink">Projects</Link></div>
                </div>
                <div className="right flex">
                    <div className="link flex"><Link className="classlink">Help</Link></div>
                </div>
            </div>
            <div className="nav flex sub">
                <button className="menu left">menu</button>
            </div>
            <Outlet/>
            <Settings/>
        </div>
    )
}