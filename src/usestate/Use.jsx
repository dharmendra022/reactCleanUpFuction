import React, { useState } from 'react';

const Use = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")

    const[allEntry,setallEntry]=useState([]);

    const SubmitForm=(e)=>{
        e.preventDefault();
       const newEntry={email:email,password:password};
       setallEntry([...allEntry, newEntry])
       console.log(allEntry)
    }
  return (
      <>
      <h1>Form Creating</h1>
      <form action="" onSubmit={SubmitForm}>
      <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter your Email' id='email' name="email"  value={email}
              onChange={(e)=>setEmail(e.target.value)}
          />
      </div>

      <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder='Password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>

      <button type='submit'>
          Submit
      </button>



      </form>
      <div>
          {
              allEntry.map((cuurElem)=>{
                  return(
                      <>
                      <div key={cuurElem.id}>
                          <h1>{cuurElem.email}</h1>
                          <h1>{cuurElem.password}</h1>
                      </div>

                      </>
                  )
              })
          }
      </div>

      </>
  )
};

export default Use;
