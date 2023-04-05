import React ,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Fucking2 from './Fucking2';

const Contact = () =>{
    const Navigate = useNavigate();

    const [ok,setOK]=useState(false)
    const callcontactpage = async () =>{
        try {
             const token=localStorage.getItem('auth');
             const res = await fetch('/about', {
                method: "POST",
                headers: {
                  "Content-Type" : "application/json"
            
                },
                body:JSON.stringify({token})
              });
            const data = await res.json();
            console.log(data);
            if(data.status === 200){
                setOK(true);
            }else{
                setOK(false);
            }
        }
        catch(err){
            console.log(err);
            Navigate('/login');
        }
    }
    
    useEffect (() => {
       callcontactpage();
    }, []  );









    return   ok?(
        <section className='contact'>
            <div className='content'>
                <h1>CONTACT US</h1>
            </div>
            <div className='container' >
                <div className='contactInfo'>
                    <div className='box'>
                        <div className='icon'></div>
                        <div className='text'>
                            <h2>Address</h2>
                            <p> Bard-20 patelnage warisalii </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                        <div className='text'>
                            <h2>email</h2>
                            <p> rishantparvesh@gmail.com </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'></div>
                        <div className='text'>
                            <h2>phone</h2>
                            <p>99999999999 </p>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form>
                        <h3>send messg</h3>
                        <div className='inputBox'>
                            <input type="text" name="" required="required"></input>
                            <span>Full Name</span>
                        </div>
                        <div className='inputBox'>
                            <input type="text" name="" required="required"></input>
                            <span>eamil</span>
                        </div>
                        <div className='inputBox'>
                            <textarea required="required"></textarea>
                            <span>type messg.....</span>
                        </div>
                        <button className="btn gap-2">
  SEND
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
                       
                    </form>
                </div>
            </div>

        </section>
        
    ):<Fucking2/>;
}

export default Contact