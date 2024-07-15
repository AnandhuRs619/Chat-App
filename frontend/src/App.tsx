import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { useAuthContext } from "./context/AuthContext"



function App() {
const{authUser ,setAuthUser, isLoading} = useAuthContext();
console.log(authUser, "auth user is here ")
  return (
    <div className="p-4 h-screen flex items-center justify-center" >
      <Routes>
        <Route path="/" element={authUser ?<Home/> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={ !authUser ?<SignUp/> : <Navigate to={"/"}/>  } />
        <Route path="/login" element={!authUser ?<Login/>: <Navigate to={"/"}/>} />
      </Routes>
     
    </div>
  )
}

export default App
