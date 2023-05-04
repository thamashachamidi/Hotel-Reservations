import React from 'react'
import './Booking.css'
const Booking = () => {
    return (
        <div class="container">
        <form>
        <div >
              <label>
                  Destination
              </label>
              <select name="" id = "">
                  <option>Grand antiga </option>
                  <option>Maldives</option>
                  <option>London</option>
                  <option>India </option>
              </select>
          </div>
          <div>
              <div>
                  <label>
                      Check-In date
                      </label>
                  <input type= "date" />
              </div><br/>
              <div>
                  <label>Check-Out date</label>
                  <input type= "date" />
              </div>

          </div> 
          <label>search</label>
          <button>Rates and avalibity</button>
        </form>
  </div>
    ) 
        
         
        

}

export default Booking