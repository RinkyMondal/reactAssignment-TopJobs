import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

import job_search from '../Images/job_search.png';
import jobsearch from '../Images/jobsearch.png';
import resumesearch from '../Images/resumesearch.png';
import jobs from '../Images/jobs.png';
import contact_us from '../Images/contact_us.png';
import Header from '../Components/Header';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="ui fluid card" style={{ boxShadow: "none" }}>
            <Header />
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ width: 1500, height: 370 }}
                        className="d-block"
                        src={job_search}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ left: '-27%',  color: 'black'}}>
                        <h3><b>WE ARE HIRING!</b></h3>
                        <p>BUILD YOUR CAREER WITH US.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: 1500, height: 370 }}
                        className="d-block"
                        src={jobsearch}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ left: '-27%',  color: 'black' }}>
                        <h3><b>Get your Dream Company!</b></h3>
                        <p>It starts when knowing where you stand.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: 1500, height: 370 }}
                        className="d-block"
                        src={resumesearch}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ left: '-27%',  color: 'black' }}>
                        <h3><b>LOOK AND FIND JOBS</b></h3>
                        <a style={{color: 'blue'}} onClick={()=>navigate("/joblists")}>Get Started.</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>&nbsp;
            <div className='ui container grid'>
                <div className='ui three column grid'>
                    <div className='row'>
                        <div className='column'>
                            <div className='ui fluid card'>
                                <div className='image'>
                                    <img src={jobs} alt='avatar picture' />
                                </div>

                                <div className='content'>
                                    <span className='header'>JOBS</span>
                                    <div className='meta'>
                                        <a onClick={() => navigate("/joblists")}
                                            style={{ color: "blue" }}>Click here</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='ui fluid card'>
                                <div className='image'>
                                    <img src={contact_us} alt='avatar picture' />
                                </div>

                                <div className='content'>
                                    <span className='header'>Contact Us</span>
                                    <div className='meta'>
                                        <a onClick={() => navigate("/contactus")}
                                            style={{ color: "blue" }}>Click here</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='ui fluid card'>
                                <div className='image'>
                                    <img src={jobs} alt='avatar picture' />
                                </div>

                                <div className='content'>
                                    <span className='header'>Coming Soon</span>
                                    <div className='meta'>
                                        <a>Keep look on the Updates!!!</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>&nbsp;&nbsp;
        </div>

    )

}

export default Home;