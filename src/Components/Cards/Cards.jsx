
import React, { useState, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import TEXT_DATA from '../../DataSET.js';
import CARD_ITEM from './cardItems.js';
import './card.css';


const Cards = () => {
    const [max_displayRange, set_displayRange] = useState(3);

    console.log("length cart-items : " + TEXT_DATA.Main.Cards.card_item.length);
    console.log("Max_display : ", max_displayRange);


    const HEAD = TEXT_DATA.Main.Cards.heading;
    const [head, sethead] = useState(HEAD); 


    // -------------------> for loadding more cards
    const xpandHandler = (e) => {
        e.preventDefault();
        set_displayRange(max_displayRange + 3);//----> 3cards - put on clicking the load more        
    }

    const hide_handler = (e) => {
        e.preventDefault();
        window.scrollTo({ behavior: 'smooth', top: refContainer.current.offsetTop - 80 })
        set_displayRange(3);
    }

    const refContainer = useRef(0);


    return (
        <div >

            <h4 className="head"> {head} </h4>

            {/* Each Card */}
            <Container  >
                <Row > {TEXT_DATA.Main.Cards.card_item.slice(0, max_displayRange).map((item) => {
                    return (
                        <CARD_ITEM
                            /*  data={item} */
                            key={item.id}
                            image = {item.image}
                            title = {item.title}
                            description = {item.description}
                            head_pass = {sethead}

                        />
                    )
                })}
                </Row>
            </Container>







            {/* Load More & Collapse Button */}
            <div className="text-center">
                {/* CHECK : if (total-used > 0) LOAD */}
                {(TEXT_DATA.Main.Cards.card_item.length - max_displayRange > 0) && <button
                    className="btn btn-warning"
                    onClick={xpandHandler}
                    style={{ marginLeft: "5%" }}
                >
                    LoadMore
                    </button>
                }


                {(max_displayRange > 6) &&
                    <button
                        className="btn Collapse btn-danger"
                        onClick={hide_handler}
                        style={{ marginLeft: "5%" }}
                    >
                        Collapse
                            </button>
                }
            </div>




            {/* 2ND PART */}
            <br /><br /><br />
            <h4 className="head">{TEXT_DATA.Main.Content.heading}</h4>
            <p>{TEXT_DATA.Main.Content.history}</p>





        </div>
    )
}

export default Cards
