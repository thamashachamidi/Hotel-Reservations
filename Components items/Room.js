import React ,{useState} from "react";

function Room({room}) {
  return (
    <div className="row">
<div className="col-md-4">
   <img src={room.imageurls[0]} className="smallimg"/>

</div>
<div className="col-md-7">
<h1>{room.name}</h1>
<p>Max count :{room.maxcount}</p>
<p>Phone Number:{room.phonenumber}</p>
<p>Type:(room.type)</p> 

<div style={{float: 'right'}}>
    
    <button className='btn btn-primary'>View details</button>
</div>

    </div>
   </div> 
  )
} 

export default Room