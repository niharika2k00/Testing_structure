
import React from 'react';
import './navigation.css';
// import { Link } from 'react-router-dom'; ---->> we have to use the Router tag otherwise Error
import { Link } from "react-scroll";


const nav_items = (props) => {
    const { name, link } = props.obj;
    // console.log(name)

    return (
        <div>
            <li className="nav-item nav-link active ">

                {name === "HOME" && (
                    <a href="/" className="nav-link navi" >
                        HOME
                    </a>
                )}

                {name !== "HOME" && (
                    <Link
                        to={link}
                        duration={500}
                        className="nav-link navi"
                    // style={{ cursor: "pointer" }}
                    >
                        {name}
                    </Link>
                )}
            </li>
        </div >
    )
}

export default nav_items;
