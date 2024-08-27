import React, { useEffect, useState } from "react";
import {Divider} from '@mui/material';
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
import "./buynow.css";

const Buynow = () => {


    return (
        <>
        
        <div className="buynow_section">
                <div className='buynow_container'>
                    <div className="left_buy">
                        <h1>Shopping Cart</h1>
                        <p>Select all items</p>
                        <span className="leftbuyprice"> Price</span>
                        <Divider />

                        <div className="item_containert">
                         
                            <img src="data:image/jpeg;base64,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" alt="" /> 
                            <div className="item_details">
                                <h3> Molife Sense 500 SmartWatch </h3>
                                <h3> Smart Watches</h3>
                                <h3 className='difrentprice'> $4049.00</h3>
                                <p className="unusuall">Usually dispatched in 8 day  </p>
                                <p> Eligibe for FREE Shipping </p>
                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                <Option/>
                            </div>
                            <h3 className="item_price"> $4049.00 </h3>
                        </div>
                        <div className="item_containert">
                            <img src="https://vn-test-11.slatic.net/p/bdf399fc2af8bd84900588d187ff50c9.jpg"alt="" /> 
                             
                            <div className="item_details">
                                <h3> Molife Sense 500 SmartWatch </h3>
                                <h3> Smart Watches</h3>
                                <h3 className='difrentprice'> $4049.00</h3>
                                <p className="unusuall">Usually dispatched in 8 day  </p>
                                <p> Eligibe for FREE Shipping </p>
                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                <Option/>
                            </div>
                            <h3 className="item_price"> $4049.00 </h3>
                        </div>
                            <Divider/>
                            
                            < Subtotal/>
                    </div>
                    <Right/>

                </div>
            </div>;

        </>
    )
    
};

export default Buynow;
