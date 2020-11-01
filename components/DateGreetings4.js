import React from 'react';
function DateGreetings(){
  let date= new Date;
  let hours= date.getHours();
  let greeting;
  const mainstyles={
    fontSize:100
  }
  if(hours<12){
      greeting = "morning"
      mainstyles.color ="blue"
  }
  else if(hours>=12 && hours<=17){
      greeting = "afternoon"
      mainstyles.color ="pink"
    }
  else{
      greeting = "night"
      mainstyles.color ="red"
  }

  return (
    <div>
    <h1 style={{color:"red",backgroundColor:"powderblue"}}>it is about {hours} so have a good {greeting}</h1>
    <p style={mainstyles}>have a good {greeting}</p>
    </div>
  )
}

export default DateGreetings;
