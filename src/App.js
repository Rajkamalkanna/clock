import React from 'react'
import "./styles.css"


export default function App() {
   const date = new Date()
   const hours = date.getHours()
   let timeOfDay
   if(hours < 12){
    timeOfDay = "Moring"
   }else if(hours >=12 && hours < 17){
    timeOfDay ="Afternoon"
   }else if(hours >=17 && hours < 22){
    timeOfDay = "Evening"
   }else{
    timeOfDay = "Night"
   }
    return(
        <div className='time'>
            <h1>Good <span className='wish'>{timeOfDay}</span></h1>
            <h2>{Date()}</h2>
        </div>
    )
};
