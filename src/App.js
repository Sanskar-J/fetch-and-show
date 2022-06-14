import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { storeData } from "./app/userData";
import "./App.css";
import useFetch from "./hook/useFetch";
import { useState } from "react";


const App = () => {

   let [name , setName]=useState("")
   let [email , setEmail]=useState("")
   let [source , setSource]=useState("")
  var userData;
  const dispatch = useDispatch();
  const { isPending, error, data } = useFetch(
    "https://reqres.in/api/users?page=2"
  );
  isPending && console.log(isPending)
  error && console.log(error)

  userData = useSelector((state) => state.userDataR.userData);
  console.log(userData);

  const showData=(id)=>{

   
   console.log("i am running")
   fetch(`https://reqres.in/api/users/${id}`)

      .then(response => {

        return response.json()

      })

      .then(data => {

        setName(data.data.first_name + " "+ data.data.last_name)
        setEmail(data.data.email)
        setSource(data.data.avatar)
      })
   
 
   
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          data && dispatch(storeData(data));
        }}
      >
        show
      </button>
      <div className="boxes">
      {userData &&
        userData.data.map((user) => {
          return (
            <div>
              <button onClick={()=>{

               showData(user.id)}}>{user.id}</button>
        

            </div>
          );
        })}
        </div>
        <div className="card">
         <img src={source} alt="" />
        <h2>{name}</h2>
        <div>{email}</div>
        </div>
        
    </div>
  );
};

export default App;
