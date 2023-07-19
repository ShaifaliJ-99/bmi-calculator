import { Link } from "react-router-dom"

export const Home=()=>{
    return <>
    <div>
    <div style={{display:"flex",padding:"5px",justifyContent:"center",columnGap:"25px"}}>
        <Link to="/bmi">
            <h2>Calculate Bmi</h2>
        </Link>
        <Link to="/login">
            <h2>Login</h2>
        </Link>
        </div>
        <div>
            <img src="https://near-ethernet-088.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb8c1b34-da3c-4cf8-ba13-1f3046992e0e%2FbmiI.jpeg?id=7b3847a5-c914-4f2e-8b34-2fdbac01ced1&table=block&spaceId=159f4c28-9b94-4583-9b02-8afa7bede8e1&width=1360&userId=&cache=v2" alt="" width={'65%'}/>
        </div>
    </div>
        </>
}