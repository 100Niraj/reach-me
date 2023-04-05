
import React , {useState}from 'react';
import { useNavigate} from "react-router-dom";

const Login = () =>{

   const [email , setEmail] = useState('');
   const [password , setPassword] = useState('');
   const navigate=useNavigate();

   const loginUser = async (e) => {
    e.preventDefault();

    let res = await fetch('/signin' , { method :"POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
     res= await res.json();

     if(res.status===200)
     {
        // console.log(res.data,res.token);
        await localStorage.setItem('auth',res.token);
        window.alert("login succesfully");
        navigate('/');
     }
    
   }










    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">I'M MERN stack developer</p>
    </div>
    <div method = "POST" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" 
           value={email} 
           onChange={(e) => setEmail(e.target.value)}
          
          placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" 
           value = {password}
           onChange = {(e) => setPassword(e.target.value)}
          
          
          placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={loginUser}  className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Login