import {React, useContext,useEffect, useState} from "react";
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import  ListItem  from "@mui/material/ListItem";
import Drawer from '@mui/material/Drawer';
import Rightheader from "./Rightheader";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
 const Navbaar =() => {

    const{account, setAccount} = useContext(LoginContext)
    console.log(account);
    
    

    

    const getdetailsvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        

        const data = await res.json();
       console.log(data);
       

       if (res.status !== 201) {
        console.log("first login");
    } else {
         console.log("cart add ho gya hain");
        setAccount(data);
    }


    };
    

    useEffect(() => {
        getdetailsvaliduser();
    }, []);

    const getText=(iteams) =>{
        setText(iteams)
        setLiopen(false)
    }
    const[text,setText] = useState("");
    console.log(text);
    const[liopen, setLiopen] = useState(true);

    const { products } = useSelector(state => state.getproductsdata);
    
    return(
        <header>
            <nav>
                <div className="left">


                <IconButton className="hamburgur">
            <MenuIcon style={{color:"#fff"}} />
          </IconButton>
            <Drawer >
              <Rightheader/>
            </Drawer>

                    <div className="navlogo">
                    <NavLink to=""> <img src="./amazon_PNG25.png" alt="" /> </NavLink>  
                    </div>
                    <div className="nav_searchbaar">
                        <input  type="text" name="" 
                        onChange={(e)=>getText(e.target.value)}
                        placeholder="Serach your products"
                        id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>

                        {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                        {
                                            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                                <ListItem>
                                                    <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}>
                                                    {product.title.longTitle}
                                                 </NavLink>
                                                </ListItem>
                                            ))
                                        }
                            </List>
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">singin</NavLink>
                    </div>
                    <div className="cart_btn">
                        {
                            account?<NavLink to="/buynow">
                        <Badge badgeContent={account.carts?.length || 0} color="secondary">

                        <ShoppingCartIcon  id="icon" />
                    </Badge>
                    </NavLink>:<NavLink to="/login">
                        <Badge badgeContent={ 0} color="secondary">

                        <ShoppingCartIcon  id="icon" />
                    </Badge>
                    </NavLink>
                        }
                    
                    
                    
                    <p>Cart</p>
                    </div>
                    {
                        <Avatar className="avtar2" >T</Avatar>

                    }
                    
                </div>
            </nav>
        </header>
       
    )
 }

  export default Navbaar