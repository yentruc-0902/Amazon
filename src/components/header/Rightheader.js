import React from "react"
import  Avatar  from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
const Rightheader = () => {
    const{account, setAccount} = useContext(LoginContext)
 return( 
        <>
        <div className="rightheader">
            <div className="right_nav">
            {
                        <Avatar className="avtar" ></Avatar>

                    }
            </div>
                        <div className="nav_btn">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/'>Shop by category</NavLink>
                            <Divider/>
                            <NavLink to='/'>Deal</NavLink>
                            {
                              account?   <NavLink to='/bynow'>Orders</NavLink>: <NavLink to='/login'>Orders</NavLink>
                            }
                            <div className="fiag">

                            <NavLink to='/'>Deal</NavLink>
                            </div>
                           
                        </div>
        </div>
        </>
    )
    }
export default Rightheader;