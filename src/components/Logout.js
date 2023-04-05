import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{


    const Navigate = useNavigate();


    useEffect( () => {
        fetch('https://important-clam-shorts.cyclic.app/logout' ,{
            mehtod: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credenteials: "include"
        }).then((res) =>{
              Navigate('/login');
        })
    });



    return(
        <>
        <h1>you are logout from my website</h1>
        </>
    )


}

export default Logout;