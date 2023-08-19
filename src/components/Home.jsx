import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Prediction from './Prediction';
import { useMyContext} from '../MyContext.js';

const Home = () => {
  const { updateData } = useMyContext();
  const navigate = useNavigate();
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [cp, setCP] = useState("");
  const [trtbps, setTRTBPS] = useState("");
  const [fbs, setFBS] = useState("");
  const [chol, setChol] = useState("");
  const [restecg, setRestECG] = useState("");
  const [thalachh, setMaxHR] = useState("");
  const [exng, setEXNG] = useState("");
  const [oldPeak, setOldPeak] = useState("");
  const [thall, setThall] = useState("");
  const [ca, setCa] = useState("");
  const [slp, setSTSlope] = useState("");

  const handleSubmit = async(e)=>{
              try {
            e.preventDefault();
            const payload={age,sex,cp,trtbps,chol,fbs,restecg,thalachh,exng,oldPeak,slp,ca,thall};
            const numericInputData = Object.values(payload).map(value => +value);
            const input_data = {"input_data":  Object.values(numericInputData)}
            console.log(input_data)
           
            
    // Send POST request using fetch
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input_data)
    });

    if (response.ok) {
      const data = await response.json();
        console.log(data.result);
      updateData(data.result);
      navigate('/predict');
    } else {
      console.log("An error occured");
    }
           } catch (error) {
            console.log(error);
           }
  }
  return (<>
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center"> 
        <h2 className='mb-3' style={{paddingBottom:"10px", textDecoration:"underline"}}>Heart Disease Predictor</h2>
           </div>

        <div className="mb-3">
  <label className="form-label">Age:</label>
  <input type="number" className="form-control" min="1" max="120" placeholder=' [Range: 15-120]'  value={age} onChange={(e) => setAge(e.target.value)} required/>
</div>

<div className="mb-3">
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Sex:</legend>
    <div className="col-sm d-flex">
      <div className="form-check mx-3">
        <input className="form-check-input" type="radio" name="sex" id="1" value="1" checked={sex==="1"} onChange={(e) => setSex(e.target.value)} />
        <label className="form-check-label" htmlFor="1">
          Male
        </label>
      </div>
      <div className="form-check mx-3">
        <input className="form-check-input" type="radio" name="sex" id="0" value="0" checked={sex==="0"} onChange={(e) => setSex(e.target.value)}/>
        <label className="form-check-label" htmlFor="0">
          Female
        </label>
      </div>
    </div>
  </fieldset>
</div>

<div className="input-group mb-3">
  <label className="input-group-text custom-input" htmlFor="inputGroupSelect01">Chest Pain Type :</label>
  <select className="form-select custom-input" id="inputGroupSelect01" value={cp} onChange={(e) => setCP(e.target.value)} required >

    <option value="0">Typical Angina</option>
    <option value="1">Atypical Angina</option>
    <option value="2">Non-Anginal Pain</option>
    <option value="3">Asymptomatic</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Resting Blood Pressure (in mmHg):</label>
  <div className="row">
    <div className="col">
      <input
        type="number"
        className="form-control"
        placeholder="Systolic (Normal Range [110-130] )"
        min="1"
        max="300"
        value={trtbps} onChange={(e) => setTRTBPS(e.target.value)} required
      />
    </div>
  </div>
</div>

<div className="mb-3">
  <label className="form-label">Cholesterol:</label>
  <input type="number" className="form-control"  min="70" max="600"  placeholder=' [Normal Range: =<220 mg/dL]' value={chol} onChange={(e) => setChol(e.target.value)} required/>
</div>

<div className="mb-3">
  <label className="form-label">Fasting Blood Sugar:</label>
  <select className="form-control" value={fbs} onChange={(e) => setFBS(e.target.value)} required>
    <option value="1">&ge;120mg/dL</option>
    <option value="0">&le;120mg/dL</option>
</select>
</div>


<div className="mb-3">
  <label className="form-label">Resting ECG:</label>
  <select className="form-control" value={restecg} onChange={(e) => setRestECG(e.target.value)} required>
    <option value="0">Normal</option>
    <option value="1">ST</option>
    <option value="2">LVH</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Max Heart Rate:</label>
  <input type="number" className="form-control" min="30" max="300" placeholder=' [Normal Range: 60-120]' value={thalachh} onChange={(e) => setMaxHR(e.target.value)} required/>
</div>

<div className="mb-3">
  <label className="form-label">Exercise Angina:</label>
  <select className="form-control" value={exng} onChange={(e) => setEXNG(e.target.value)} required>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Old Peak:</label>
  <input type="number" step="0.1"  className="form-control"  min="0" max="6" placeholder=' [Range: 0-6]' value={oldPeak} onChange={(e) => setOldPeak(e.target.value)} required/>
</div>


<div className="mb-3">
  <label className="form-label">ST Slope:</label>
  <select className="form-control" value={slp} onChange={(e) => setSTSlope(e.target.value)} required>
    <option value="0">Flat</option>
    <option value="1">Up</option>
    <option value="2">Down</option>
  </select>
</div>



<div className="mb-3">
  <label className="form-label">No. of Major Vessels :</label>
  <select className="form-control" value={ca} onChange={(e) => setCa(e.target.value)} required>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Thalium Stress :</label>
  <input type="number" step="0.1"  className="form-control"  min="0" max="3" placeholder=' [Range: 0-3]' value={thall} onChange={(e) => setThall(e.target.value)} required/>
</div>

<div className="d-flex justify-content-center"> 
          <button type="submit" className="btn btn-danger ">Submit</button>
           </div>
</form>
    </div>
    
 </> )
}

export default Home