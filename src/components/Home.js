import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App FTD</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Immigration au canada</h1>
           
                <h4 style={{color : "#FFF" , marginLeft : 175}}> (Quiz)</h4>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="play/quiz">Commencer</Link></li>
                    </ul>
                </div>
                
            </section>
        </div>
    </Fragment>
);

export default Home;