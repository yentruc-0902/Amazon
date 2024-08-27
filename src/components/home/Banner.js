import React from "react"
import Carousel from 'react-material-ui-carousel'
import "./banner.css";
const data = [
    "https://gialong.com.vn/wp-content/uploads/2018/03/banner-ch%C3%A2n-trang.jpg",
    " https://www.phucanh.vn/media/news/3007_BNPCPAGamingt8-2020.jpg",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]


const Banner =() => {
     return (
       <Carousel
       className='carasousel' 
       autoPlay={true}
       animation='slide'
       indicators={false}
       navButtonsAlwaysVisible={true}
       cycleNavigation={true}
       navButtonsProps={{
        style:{
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: -22,
            height: "104px",
        }
       }}


       >

                {
                    data.map((imag,i)=>{
                            return(
                                <>
                                <img src={imag} alt="banner_img"/>
                                </>
                            )    
                    })


                
                }
       </Carousel>
     )

}
export default Banner