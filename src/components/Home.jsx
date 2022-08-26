import React from 'react';
import "./Assets/styles/Home.css"
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const itemList=["Map", "Dining", "TakeOut", "Delivery", "Tab", "Payment", "Cashier", "Manager"];

const Home = (props) => {
    return (
        <div>
            <NavBar islogin={false}/>
            <div className="home">
                {itemList.map((item)=>{
                    return(
                        <div className="item" key={item}>
                          <Link to={"/Open-Layer-Live-Location/"+item}><div className="item-name">{item}</div></Link>
                        </div>
                    )})
                }
            </div>
        </div>

    );
}

export default Home;