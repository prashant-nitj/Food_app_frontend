import React, { useEffect, useState } from 'react';
import '../Styles/plan.css';
import Tick from '../Images/check-mark.png'
import axios from 'axios';

function Plans() {
    const [arr, arrset] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const data = await axios.get("/plans/top3");
            console.log(data, 23443);
            arrset(data.data.data);
          } catch (err) {
            console.log(err);
          }
        }
      
        fetchData();
      }, []); // Empty dependency array to run the effect only once

    return (
        <div className='plansCard'>
            <div className='h1Box'>
                <h1 className='h1'>START EATING HEALTHY TODAY</h1>
                <div className="line"></div>
            </div>
            <div className='planDetails'>
                {arr && arr?.map((ele, key) =>
                    <div className='pCard' key={key}>
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
                        <button className='btn'>I'm Hungry</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Plans;
