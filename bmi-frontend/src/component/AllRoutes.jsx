import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Bmi } from "./bmi"
import { Login } from "./login"

export const AllRoutes=()=>{
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
}