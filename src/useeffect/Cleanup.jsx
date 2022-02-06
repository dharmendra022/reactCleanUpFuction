import React, { useState ,useEffect} from 'react';

const Cleanup = () => {
    const[width,setWidth]=useState(window.screen.width);

    const actualWidth=()=>{
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        console.log("add event")
        window.addEventListener("resize",actualWidth)

        return()=>{
            console.log("remove event");
            window.removeEventListener("resize",actualWidth);
        }

    });

    

  return (
      <>
      <h1>Cleanup Function1</h1>
      <h3>The Actual Size of Window is</h3>
      <h1>{width}</h1>

      </>
  )
};

export default Cleanup;
