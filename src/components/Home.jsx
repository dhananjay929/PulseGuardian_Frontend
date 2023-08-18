import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Prediction from './Prediction';
import { useMyContext} from '../MyContext.js';

const Home = () => {
  const { updateData } = useMyContext();
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [chestPain, setChestPain] = useState("");
  const [restingBP, setRestingBP] = useState("");
  const [fastingBS, setFastingBS] = useState("");
  const [cholestrol, setCholestrol] = useState("");
  const [restingECG, setRestingECG] = useState("");
  const [maxHR, setMaxHR] = useState("");
  const [exerciseAngina, setExerciseAngina] = useState("");
  const [oldPeak, setOldPeak] = useState("");
  const [stSlope, setSTSlope] = useState("");
  const [heartDisease, setHeartDisease] = useState("");

  const handleSubmit = async(e)=>{
              try {
            e.preventDefault();
            console.log({age,gender,chestPain,restingBP,fastingBS,cholestrol,restingECG,maxHR,exerciseAngina,oldPeak,stSlope,heartDisease});
            updateData("1");
            navigate('/predict');
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
    <legend className="col-form-label col-sm-2 pt-0">Gender:</legend>
    <div className="col-sm d-flex">
      <div className="form-check mx-3">
        <input className="form-check-input" type="radio" name="gender" id="M" value="M" checked={gender==="M"} onChange={(e) => setGender(e.target.value)} />
        <label className="form-check-label" htmlFor="M">
          Male
        </label>
      </div>
      <div className="form-check mx-3">
        <input className="form-check-input" type="radio" name="gender" id="F" value="F" checked={gender==="F"} onChange={(e) => setGender(e.target.value)}/>
        <label className="form-check-label" htmlFor="F">
          Female
        </label>
      </div>
    </div>
  </fieldset>
</div>

<div className="input-group mb-3">
  <label className="input-group-text custom-input" htmlFor="inputGroupSelect01">Chest Pain Type :</label>
  <select className="form-select custom-input" id="inputGroupSelect01" value={chestPain} onChange={(e) => setChestPain(e.target.value)} required >

    <option value="ATA">Atypical Angina</option>
    <option value="TA">Typical Angina</option>
    <option value="NAP">Non-Anginal Pain</option>
    <option value="ASY">Asymptomatic</option>
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
        value={restingBP} onChange={(e) => setRestingBP(e.target.value)} required
      />
    </div>
  </div>
</div>


<div className="mb-3">
  <label className="form-label">Fasting Blood Sugar:</label>
  <select className="form-control" value={fastingBS} onChange={(e) => setFastingBS(e.target.value)} required>
    <option value="1">&ge;120mg/dL</option>
    <option value="0">&le;120mg/dL</option>
</select>
</div>

<div className="mb-3">
  <label className="form-label">Cholesterol:</label>
  <input type="number" className="form-control"  min="70" max="600"  placeholder=' [Normal Range: =<220 mg/dL]' value={cholestrol} onChange={(e) => setCholestrol(e.target.value)} required/>
</div>

<div className="mb-3">
  <label className="form-label">Resting ECG:</label>
  <select className="form-control" value={restingECG} onChange={(e) => setRestingECG(e.target.value)} required>
    <option value="normal">Normal</option>
    <option value="LVH">LVH</option>
    <option value="ST">ST</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Max Heart Rate:</label>
  <input type="number" className="form-control" min="30" max="300" placeholder=' [Normal Range: 60-120]' value={maxHR} onChange={(e) => setMaxHR(e.target.value)} required/>
</div>

<div className="mb-3">
  <label className="form-label">Exercise Angina:</label>
  <select className="form-control" value={exerciseAngina} onChange={(e) => setExerciseAngina(e.target.value)} required>
    <option value="Y">Yes</option>
    <option value="N">No</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label">Old Peak:</label>
  <input type="number" step="0.1"  className="form-control"  min="0" max="6" placeholder=' [Range: 0-6]' value={oldPeak} onChange={(e) => setOldPeak(e.target.value)} required/>
</div>

<div className="mb-3">
  <label className="form-label">ST Slope:</label>
  <select className="form-control" value={stSlope} onChange={(e) => setSTSlope(e.target.value)} required>
    <option value="Flat">Flat</option>
    <option value="Up">Up</option>
  </select>
</div>

<div className="mb-3">
  <label className="form-label"> Any Heart disease:</label>
  <select className="form-control" value={heartDisease} onChange={(e) => setHeartDisease(e.target.value)} required>
    <option value="0">No</option>
    <option value="1">Yes</option>
  </select>
</div>


<div className="d-flex justify-content-center"> 
          <button type="submit" className="btn btn-danger ">Submit</button>
           </div>
</form>
    </div>
    
 </> )
}

export default Home