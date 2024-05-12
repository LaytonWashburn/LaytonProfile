import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import "../styles/NavDrawer.css"

export function NavDrawer({styleBool}){

    const [style, setStyle] = useState(styleBool ? "navdrawer flex open" : "navdrawer flex closed");

    useEffect(() => {
        if(styleBool){
            setStyle("navdrawer flex open");
        }
    })

    function clicked(){
        setStyle("navdrawer flex closed");
    }


    return(
        <div className={style}>
            <div className="flex links">
                <div className="link"><Link className="decoration">Test1</Link></div>
                <div className="link"><Link className="decoration">Test2</Link></div>
                <div className="link"><Link className="decoration">Test3</Link></div>
            </div>
            <button className="menu" onClick={clicked}>menu</button>
        </div>
    )
}