import React, { Children, useEffect } from 'react'
import { useState } from 'react';
import './user.css'
// import {usePagination} from './Pagination';
function User({props}) {


  
  const [text, settext] = useState("view-details");

  const [mystyle, setmystyle] = useState({
    display:"none",
  

  })



  const toggle=()=>{
    if(mystyle.display==='none'){
      setmystyle({
        display:"",
      })
      settext("hide-details");
    }
   if(mystyle.display==='' ){
    setmystyle({
      display:'none',
    })
    settext("view-details");
  }
}


  return (
  
    <div className='main-container'>

    <div className="ucontainer" key={props?.id}> 
   

    <div className="title"><h3>Name</h3>
    <div>    {props?.name}</div>
    </div>


<div className="title"><h3>contact</h3>
<div className="name">{props?.phone}</div>
</div>

<div className="title"><h3>City</h3>
<div className="name">{props?.address.city}</div>
</div>
{/* {x} */}

<div className="title"><h3>street</h3>
<div className="name">{props?.address.city}</div>
</div>


<div className="details" onClick={toggle}>{text}</div>

  <div className="hidedetail" style={mystyle}>
  <div className="grid"> 

  <div className="name"><h3>Username</h3>
  <div>{props?.username}</div>
  </div>
  <div className="name"><h3>Email</h3>
  <div>{props?.email}</div>

  </div>

  </div>
  <div className="grid">
      <div className="name"><h3>Address</h3>
  <div>{props?.address.street},{props?.address.city}</div>
  </div>
  <div className="name"><h3>Zipcode</h3>
  <div>{props?.address.zipcode}</div>
  
  </div>

  
  </div>
  <div className="grid">

  <div className="name"><h3>Website</h3>
  <div>{props?.website}</div>
  </div>
  <div className="name"><h3>Company-name</h3>
  <div>{props?.company.name}</div>
  
  </div>
  
  </div>

</div>

</div> 


</div>

  )
}

export default User