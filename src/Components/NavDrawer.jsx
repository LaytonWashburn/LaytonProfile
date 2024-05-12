import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import "../styles/NavDrawer.css"

export function NavDrawer({styleBool}){

    const [style, setStyle] = useState(styleBool ? "navdrawer flex open" : "navdrawer flex closed");

    // Run this to close the drawer / and keep track of the state of the style
    useEffect(() => {
        if(styleBool){
            setStyle("navdrawer flex open");
        }
    })

    // Run this to close the drawer
    function clicked(){
        setStyle("navdrawer flex closed");
    }


    return(
        <div className={style}>
            <div className="flex links">
                <div className="dlink"><Link className="decoration">Test1</Link></div>
                <div className="dlink"><Link className="decoration">Test2</Link></div>
                <div className="dlink"><Link className="decoration">Test3</Link></div>
            </div>
            <button className="menu" onClick={clicked}>menu</button>
        </div>
    )
}