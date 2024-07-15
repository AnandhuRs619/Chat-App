import { Route, Routes } from "react-router-dom"
import Home from "./_ui_design/pages/Home"
import SignUp from "./_ui_design/pages/SignUp"
import Login from "./_ui_design/pages/Login"



function App() {

  return (
    <div className="p-4 h-screen flex items-center justify-center" >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
     
    </div>
  )
}

export default App
