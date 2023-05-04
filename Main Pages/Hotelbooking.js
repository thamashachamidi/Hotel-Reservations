import React, {useEffect, useState} from "react";
import axios from "axios"
//import {baseURL} from "../utils/constant";
function bookingscreen({match}){
    const [loading,setloading] = useState();
    const[error,seterror]= useState();
    const[room,setroom]=useState();
    useEffect(async()=> {
        try{
            setloading(true);
            const data = (await axios.post("/api/rooms/getroombyid", {roomid: match.params.roomid})).data; 
            
            setroom(data);
            setloading(false);
        } catch(error){
            setloading(false);
            seterror(true)
        }
    
    }, [])

    return(
    <div>
        <h1>booking screen</h1>
        <h1>Room id ={match.params.roomid}</h1>
            

        
    </div>
    );
}

export default Hotelbooking;