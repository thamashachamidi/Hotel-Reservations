import React from "react";
import './Home.css'

const Home = ()=> {
    return (
        <section clasName='home'>
           
            <div className="secContainer container">
                
                <br/><br/><br/><br/><br/>
                
            <div className="hometext">
                <h1>Holiday Central </h1>
                <h1 className="title">
                    Plan your trip with us , we make your holiday perfect!
                </h1>
                
                    <p className="subTitle">
                        Visit to your favirote places ! Book Now 
                    </p>
            
                
            </div><br/>
            <img src="https://sunset-beach-hotel-mahe-island.booked.net/data/Photos/OriginalPhoto/9254/925455/925455745/Sunset-Beach-Hotel-Mahe-Island-Exterior.JPEG" alt = "Test"/>
            <div class ="center">
            <button className='btn'>
                <a href="#">Explore Now</a>
            </button></div> <br/>
            <div className="homeCard grid">
                <div className="locationDiv">
                    <label htmlFor= "location">Destination</label>
                    <input type="text" placeholder='Dream Destination'/>
                </div>
            
            <br/><br/>
           
                <div className="distDiv">
                    <label htmlFor= "Distance">Location</label>
                    <input type="text" placeholder='11/Meters'/>
                </div>
            
            <br/>
            
                <div className="priceDiv">
                    <label htmlFor= "price">Price</label>
                    <input type="text" placeholder='$140-$500'/>
                </div> <br/>
                <button className='btn'>
                    search
                </button>
                
        
            </div>
            </div>

        </section>
    )
}

export default Home 