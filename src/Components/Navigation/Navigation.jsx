
import React from 'react';
import './navigation.css';
// import { /* Container */ Col } from 'react-bootstrap';
import TEXT_DATA from '../../DataSET.js';
import NavItems from './nav_items.js';


const Navigation = () => {

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '1.4rem' }}>
                <a className="navbar-brand" href="#">{TEXT_DATA.Main.Navbar.heading}  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {TEXT_DATA.Main.Navbar.head_items.map((item) => {
                            return (<NavItems
                                key={item.name}
                                obj={item}
                            />)
                        }
                        )}

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                            </button>
                    </form>
                </div>              
            </nav>
        </div >
    )
}

export default Navigation;
