import React from 'react';
import {tabLabels} from "./constant";
import {Link} from "react-router-dom";
import "./Tabs.css";

const Tabs = ({activeTabName, onClickTab}) => {
    const {CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE} = tabLabels;

    const renderTabTitle = (tabTitle, isActive, icon, id) => (
        <div
         onClick={() => onClickTab(tabTitle) } 
         id={id} 
         className={`tab-item ${isActive && "tab-border"
         }`}
        >
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    );

  return (
    <>
        <section className='tabs'>
            <div className='container'>
                {renderTabTitle(
                    CANCEL_AT_ANY_TIME,
                    activeTabName===CANCEL_AT_ANY_TIME, 
                    "fas fa-door-open fa-3x", 
                    "tab-1"
                )}
                {renderTabTitle(
                    WATCH_ANYWHERE, 
                    activeTabName===WATCH_ANYWHERE, 
                    "fas fa-tablet-alt fa-3x", 
                    "tab-2"
                )}
                {renderTabTitle(
                    PICK_YOUR_PRICE, 
                    activeTabName===PICK_YOUR_PRICE, 
                    "fas fa-tags fa-3x", 
                    "tab-2"
                )}
            </div>
        </section>
        {activeTabName === CANCEL_AT_ANY_TIME && (
            <section className='tab-content'>
                <div className='container'>
                    <div
                     id='tab-1-content'
                     className={`tab-content-item ${activeTabName === CANCEL_AT_ANY_TIME && "show"
                     }`}
                    >
                        <div className='tab-1-content-inner'>
                            <div>
                                <p className='text-lg'>
                                <b>If you decide Netflix isn't for you - No commitments, cancel anytime.</b>
                                </p>
                                <Link to="/netflix-show" className='btn btn-lg'>
                                <b>Watch Free For 30 Days</b>
                                </Link>
                            </div>
                            <img src='https://i.ibb.co/J2xDJV7/tab-content-1.png' alt='' />
                        </div>
                    </div>
                </div>
            </section>
        )}
        {activeTabName === WATCH_ANYWHERE && (
            <section className='tab-content'>
                <div className='container'>
                    <div
                     id='tab-2-content'
                     className={`tab-content-item ${activeTabName === WATCH_ANYWHERE && "show"
                     }`}
                    >
                        <div className='tab-2-content-top'>
                            <p className='text-lg'><b>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</b>
                            </p>
                            <Link to="/netflix-show" className='btn btn-lg'>
                            <b>Watch Free For 30 Days</b>
                            </Link>
                        </div>
                        <div className='tab-2-content-bottom'>
                            <div>
                                <img
                                 src='https://i.ibb.co/DpdN7Gn/tab-content-2-1.png'
                                 alt=''
                                />
                                <p className='text-md'><b>Enjoy on your TV</b></p>
                                <p className='text-dark'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                            </div>
                            <div>
                                <img
                                 src='https://i.ibb.co/R3r1SPX/tab-content-2-2.png'
                                 alt=''
                                />
                                <p className='text-md'><b>Download your shows to watch offline</b></p>
                                <p className='text-dark'>Save your favourites easily and always have something to watch.</p>
                            </div>
                            <div>
                            <img
                                 src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png'
                                 alt=''
                                />
                                <p className='text-md'><b>Use any device</b></p>
                                <p className='text-dark'>Watch right now on netflix.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
        {activeTabName === PICK_YOUR_PRICE && (
            <section className='tab-content'>
                <div className='container'>
                    <div
                     id='tab-3-content'
                     className={`tab-content-item ${activeTabName === PICK_YOUR_PRICE && "show"
                     }`}
                    >
                        <div className='text-center'>
                            <p className='text-lg'>
                            <b>Choose the plan that’s right for you</b>
                            </p>
                            <Link to="/netflix-show" className='btn btn-lg'>
                            <b>Watch Free For 30 Days</b>
                            </Link>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Basic</th>
                                    <th>Standard</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monthly price</td>
                                    <td>₹ 199</td>
                                    <td>₹ 499</td>
                                    <td>₹ 649</td>
                                </tr>
                                <tr>
                                    <td>HD available</td>
                                    <td>
                                        <i className='fas fa-times'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>HDR available</td>
                                    <td>
                                        <i className='fas fa-times'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-times'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Screens you can watch on at the same time</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Watch on your laptop, TV, phone and tablet</td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Unlimited movies and TV shows</td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cancel anytime</td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>First month free</td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                    <td>
                                        <i className='fas fa-check'></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )}
    </>
  );
};

export default Tabs;