
import { Button, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

export const Bmi = ()=>{
    let [height, setHeight] = useState("");
    let [weight, setWeight] = useState("");
    let [h,setH]=useState("");
    let [w,setW]=useState("");
    let [bmi,setBmi]=useState("-")
    let [result,setResult]=useState("");
    const handleBmi = () => {
      setBmi((+weight / (+height * +height)*10000).toFixed(2))
      setH(height);
      setW(weight)
      setHeight("");
      setWeight("");
      
    }
    
    useEffect(
      ()=>{
        console.log(bmi)
        if(bmi<18.5){
          setResult("UnderWeight🔵")
        }else if(bmi>=18.5&&bmi<=24.9){
          setResult("Normal Weight🟢")
        }else if(bmi>=25&&bmi<29.9){
          setResult("OverWeight🟡")
        }else if(bmi>=30&&bmi<=34.9){
          setResult("Obesity🟠")
        }else if(bmi>=35&&bmi<=39.9){
          setResult("Extreme Obesity🔴")
        }
      }
    )
    return <>
    <div>
        <h1 style={{fontSize:"50px"}}>🦾BMI🏋️‍♀️🏋️‍♂️
        </h1>
      </div>
      <div style={{display:"flex",backgroundColor:"#F8F8FF",width:"90%",margin:"auto",gap:"15px",padding:"20px",borderRadius:"10px"}}>
      <div style={{border:"0px dashed grey",width:"50%"}}>
        <img src="https://near-ethernet-088.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb8c1b34-da3c-4cf8-ba13-1f3046992e0e%2FbmiI.jpeg?id=7b3847a5-c914-4f2e-8b34-2fdbac01ced1&table=block&spaceId=159f4c28-9b94-4583-9b02-8afa7bede8e1&width=1360&userId=&cache=v2" width={"100%"}/>
      </div>
      <div style={{ border: "0px dashed skyblue", borderRadius:"10px", margin: "auto", width: "50%", padding:"15px" }}>
        <TextField id="outlined-basic" label="HEIGHT" variant="outlined" value={height} onChange={(e) => { setHeight(e.target.value) }} />
        <br />
        <br />
        <Divider />
        <br />
        <TextField id="outlined-basic" label="WEIGHT" variant="outlined" value={weight} onChange={(e) => { setWeight(e.target.value) }} />        <br />
        <br />
        <Button variant="contained" size='large' color="success" onClick={handleBmi} margin="5px">
          Get BMI
        </Button>
      </div>
      </div>
      <div>
        <table style={{border:"1px dashed grey"}}>
          <tr>
          <th>Weight</th>
          <th>Height</th>
          <th>BMI</th>
          <th>Result</th>
          </tr>
          <tr>
            <td>{w}</td>
            <td>{h}</td>
            <td>{bmi}</td>
            <td>{result}</td>
          </tr>

        </table>
      </div>
    </>
}