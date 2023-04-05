import React ,{useState} from 'react';

import { NavLink , useNavigate} from 'react-router-dom';










const Register = () =>{


  const Navigate = useNavigate();
//through use state we get data 
const [user ,setUser] = useState({
    name: "", email: "" , phone : "" , address: "", password: "", confPassword : ""
})

let name , value;

const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}


//now connect with backand 

const PostData = async(e) => {
  e.preventDefault();
  

  const {name, email, phone, address, password, confpassword } = user;

  const res = await fetch('/register', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"

    },
    body: JSON.stringify({
      name , email, phone, address , password, confpassword    
    })
  });

  const data = await res.json();
  
  if(data.status === 422 || !data) {
    window.alert("Invalid Registartion");
    console.log("Invalid registaraion ");
  }
else {
  window.alert("Registartion");
  console.log("Succesfully registaraion ");
  
  Navigate("/login");
}

}

    return(
        <div className="hero min-h-screen bg-base-500">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-6xl font-bold">Sign Up!</h1>
      <br></br>
      <p><NavLink to="/login" className='py-4'>I'm Already Sign_in</NavLink></p>
    </div>
    <div method= "POST" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name ="name" 
          
          value = {user.name}
          onChange= {handleInputs}
          
          placeholder='name' className="input input-bordered" />
         

        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name ="email" 
          
          value = {user.email}
          onChange= {handleInputs}
          
          
          placeholder="email"  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone No</span>
          </label>
          <input type="text" name = "phone"
          value = {user.phone}
          onChange= {handleInputs}
          
          
          placeholder="phone"  
          className="input input-bordered" 
         />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name ="address" 
          
          value = {user.address}
          onChange= {handleInputs}
          
          placeholder="address"   className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name ="password" 
          
          value = {user.password}
          onChange= {handleInputs}
          
          
          placeholder="password"    className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
          <div className="form-control">
          <label className="label">
            <span className="label-text">Cofirm Password</span>
          </label>
          <input type="text" name ="confpassword"  
          
          value = {user.confpassword}
          onChange= {handleInputs}
          
          placeholder="confirm password"  className="input input-bordered" />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"   onClick={PostData} >Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Register