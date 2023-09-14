import React, { useEffect, useState } from 'react';
import '../Styles/allplans.css';
import '../Styles/contact.css';
import '../Styles/footer.css';
import '../Styles/home.css';
import '../Styles/home.css';
import '../Styles/login.css';
import '../Styles/nav.css';
import '../Styles/plan.css';
import '../Styles/planDetail.css';
import '../Styles/profile.css';
import '../Styles/review.css';
import Tick from '../Images/check-mark.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllPlans() {
    const [arr, arrset] = useState([]);

    useEffect(() => {
        let isMounted = true; // A flag to check if the component is still mounted

        async function fetchData() {
            try {
                const response = await axios.get("/plans/allPlans");
                if (isMounted) {
                    arrset(response.data.data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData(); // Call the async function inside useEffect

        // Cleanup function
        return () => {
            isMounted = false; // Mark the component as unmounted to prevent state updates
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='allplansCard'>
            <div className='h1Box'>
                <h1 className='h1'>START EATING HEALTHY TODAY</h1>
                <div className="line"></div>
            </div>
            <div className='allplanDetails'>
                <div className='planDetails'>
                    {arr && arr.map((ele, key) => {
                        try {
                            return (
                                <div>
                                <div className='apCard' key={key}>
                                    <h3 className='h3'>{ele.name}</h3>
                                    <div className='pCard1'>
                                        <div className='priceBox'>
                                            <div className='price'>Rs {ele.price}</div>
                                            <div className="duration">/month</div>
                                        </div>
                                        <p className="point">That’s only 2₹ per meal</p>
                                    </div>

                                    <div className='pCard2'>
                                        <div className='ppoints'>
                                            <img src={Tick} alt='' className='img' />
                                            <p className='point'>{ele.duration} meal every day</p>
                                        </div>
                                        <div className='ppoints'>
                                            <img src={Tick} alt='' className='img' />
                                            <p className='point'>{ele.discount} discount available.</p>
                                        </div>
                                        <div className='ppoints'>
                                            <img src={Tick} alt='' className='img' />
                                            <p className='point'>{ele.ratingsAverage} rated meal.</p>
                                        </div>
                                    </div>

                                    <button className='btn'>
                                        <Link to={`/planDetail/${ele._id}`}>I'm Hungry</Link>
                                    </button>
                                </div>
                                </div>
                            );
                        } catch (error) {
                            console.error(error);
                            return null; // Skip rendering this item if there's an error
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllPlans;
