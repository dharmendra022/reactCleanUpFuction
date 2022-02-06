import React, { useEffect, useState } from 'react';

const UseEf = () => {
    // console.log("Hello Outside");
    const [count,setCount]=useState(0)


    const ClickHandler=()=>{
        setCount(count+1);
    }


    useEffect(()=>{
        // console.log("Heelo UseEffect");
        if(count >=1){

            document.title=`Chats (${count})`
        }else{
            document.title=`Chats`
        }
    },[count])
  return(
      <>
      <h1>UseEffect Example</h1>
      <h1>{count}</h1>
      <button onClick={ClickHandler}>Click Me 👍</button>



      </>
  )
};

export default UseEf;
