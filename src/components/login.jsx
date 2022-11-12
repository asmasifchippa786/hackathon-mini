import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    

    const loginHandler = (e) => {
e.preventDefault()


const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        console.log(user);
     const navigate = useNavigate()
     navigate("/body")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)

      });   

}

      return(<div className="main-login">
                    <div className="box-log">
                        <div className="img"><img src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" alt="" /></div>
                        <div className="box-sub-log">
                        <form action="" onSubmit={loginHandler}>
                        <div className="email"><TextField id="outlined-basic" label="Email" type='email' variant="outlined" onChange={((e)=>{setEmail(e.target.value)})}/></div>
                        <div className="password"><TextField id="outlined-basic" label="password" type='password' variant="outlined" onChange={((e) => {setPassword(e.target.value)})} /></div>
                        <Button variant="contained" type='submit' className="btn-9">Submit</Button>
                        </form>
                        </div>
                    </div>
        </div>)
}


export default Login;