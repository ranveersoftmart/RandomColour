import React from "react";
import { Button } from 'reactstrap';
const About =()=>{

    function random_bg_colour(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z =Math.floor(Math.random() * 256);
        var bgcolour = "rgb("+ x + "," + y + "," + z +")";
        console.log(bgcolour);
        document.body.style.background = bgcolour;
    }
     return(
         <div className="container">
         <h1>Change color </h1>
         <Button onClick={random_bg_colour} className="btn btn-primary">Click to change </Button>
         </div>
     );
    
};
export default About;