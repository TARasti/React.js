import React, { useState } from "react";

function Heading() {
  setInterval(updateTime,1000);

  const [time,setTime] = useState(new Date().toLocaleTimeString());
  const name = "TARasti";
  const hour = new Date().getHours();

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  let msgStyle = {
    color: "blue"
  };

  let msg = "";
  if (hour < 12) {
    msg = "Good Morning";
    msgStyle.color = "red";
  } else if (hour >= 12 && hour < 18) {
    msg = "Good Afternoon";
    msgStyle.color = "green";
  } else if (hour >= 18 && hour < 20) {
    msg = "Good Evening";
    msgStyle.color = "blue";
  } else {
    msg = "Good Night";
    msgStyle.color = "black";
  }
  return (
    <div className="greetingclass">
      <h3 className="name" style={msgStyle}>
        {msg} {name}
      </h3>
      <p className="time" style={msgStyle}>
        {time}
      </p>
  </div>
    
  );
}

export default Heading;
