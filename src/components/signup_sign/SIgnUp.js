import React, {useState }from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SIgnUp =() => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        isAdmin:"",
        password: "",
        cpassword: ""
    });

     console.log(udata);

    const adddata = (e) => {
       const { name, value } = e.target;
         

        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    };
    const senddata = async(e)=>{
        e.preventDefault();
        const{fname , email,mobile, password, cpassword}= udata;

        if(fname=== "" ){
            toast.warn("fname provide",{
                position: "top-center",
            })
        }else if(email===""){
            toast.warn("email provide",{
                position: "top-center",
            })
        }else {
          
        }
        const res = await fetch("register", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json' // Valid header
              },
              body: JSON.stringify({
                fname , email,mobile, password, cpassword
              }
              )
            });
            const data = await res.json();
         // console.log(data);
                if (res.status ===422 || !data){
                    //alert("no data")
                    toast.warn("invalid details",{
                        position: "top-center",
                    })
                }else{
                   //alert("data succesfully adde")
                   toast.success("data succesfully added",{
                    position: "top-center",
                   })
                    setUdata({...udata,fname:"",email:"",mobile:"",password:"", cpassword:""});
                }
        }
 

     return (
      <>
      <section>
       <div className="sign_container">
           <div className="sign_header">
               <img src="./blacklogoamazon.png" alt="amazonlogo" />
           </div>
           <div className="sign_form">
               <form method="POST">
                   <h1> Create account </h1>
                   <div className="form_data">
                       <label htmlFor="name">Your name  </label>
                       <input type="text" name="fname"
                       onChange={adddata}
                       value={udata.fname}
                         id="name"/>
                   </div>
                   
                   <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={udata.email}
                                id="email" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                onChange={adddata}
                                value={udata.mobile}
                                id="mobile" />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={udata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>

                   <div className="form_data">
                       <label htmlFor="passwordg">Password Again </label>
                       <input type="password" name="cpassword"
                       onChange={adddata}
                       value={udata.cpassword}
                       id="passwordg" />
                       </div>
                   <button className='signin_btn' onClick={senddata}>Continue</button>
                   <div className="signin_info">
                    <p>Already have an account?</p>
                    <NavLink to="/login">Signin</NavLink>

                   </div>
               </form>
           </div>
           <ToastContainer />
       </div>
      </section>
      </>
     )

}
export default SIgnUp