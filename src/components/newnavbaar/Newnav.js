import React from "react";
import "./newnav.css";

 const Newnav = () => {
    return (
        <div className='new_nav'>
            <div className="nav_data">
                <div className="left_data">
                <p>Ưu đã hôm nay </p>
                    <p>Dịch vụ khách hàng</p>
                    <p>Thẻ quà tặng</p>
                    <p>Bán</p>
               

                </div>
                <div className="right_data">
                    <img src="./nav.jpg" alt="navata"/>

                </div>

            </div>

        </div>
    )
 }
  export default Newnav