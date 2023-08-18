import React,{useState, useEffect} from "react";
import "../App.css";
import { useMyContext } from '../MyContext';

const Prediction = () => {
  const [predict, setPredict] = useState({image:"",head:"",text:""})
  const { sharedData } = useMyContext();
  const data = sharedData;
  
  useEffect(() => {
    if( data === "0"){
      setPredict({ image: "healthyheart.jpg", head: "Congratulations! You don't have any heart disease!",text:"You have a healthy heart !!!" })}else{
        setPredict({ image: "unhealthyheart.jpg", head: "Alas! You have a heart disease!",text:"You need to  consult a doctor soon!!!" })};
      }, [data])
 return (
    <div className="container-fluid" style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh",  backgroundImage:`url(${predict.image})`, backgroundSize: "cover",backgroundPosition: "center"}} >

      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px",borderRadius: "10px", color: "white", textAlign: "center"}}>

        <h1>{predict.head}</h1>
        <p>{predict.text}</p>
     
      </div>
    
    </div>
  );
};

export default Prediction;

