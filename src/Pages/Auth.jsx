import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPIs';


function Auth({ register }) {

    const location = useNavigate()
    const isRegisterForm = register ? true : false

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const registerData=async()=>{
        const {username,email,password} =userData

    if (!username || !email ||!password) {
        alert("please fill the form")
        
    } else {

        const result =await registerAPI(userData)
        console.log(result);
        if(result.status==200){
            alert(result.data)
            location('/login')
        }
        else{
            alert(result.response.data)
        }
    }
  console.log(userData);
    }


    const loginData=async()=>{
        const{email,password} =userData
        if(!email||!password){
            alert("please fill the form")
        }
        else{
            const result=await loginAPI(userData)
            console.log(result);
            if (result.status==200) {
                alert("login sucessfull") //login successfull
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.user))
                sessionStorage.setItem("token",result.data.token)
                location('/dashboard')
            } else {
                alert(result.response.data)
            }
            

        }
    }
  

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '500px' }}>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-6">
                        <img src="https://feedback-portal-djsce.netlify.app/static/media/MobileLogin1.0dee7afc70ec111fc66b.gif" height={'400px'} width={'100%'} alt="" />
                    </div>
                    <div className="col-6 shadow mt-4">

                        <h2 className='text-center text-secondary m-4 fs-2'>
                            {
                                isRegisterForm ? 'Register ' : 'Login'
                            }</h2>

                        <form >
                            {
                                isRegisterForm &&
                                <input type="text" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} placeholder='username' className='form-control mb-4' />

                            }
                            <input value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" placeholder='email' className='form-control mb-4' />
                            <input  value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" placeholder='password' className='form-control mb-4' />
                        </form>
                        {
                            isRegisterForm ?
                                <div className='text-center m-3'>
                                    <button onClick={registerData} className='btn btn-secondary rounded-pill'>Register</button>
                                    <Link to={'/login'}>
                                        <p style={{ textDecoration: 'none' }} className='mt-3'>Already Register? Please login from here....</p>
                                    </Link>
                                </div>
                                :
                                <div className='text-center m-3'>
                                    <button onClick={loginData} className='btn btn-secondary rounded-pill'>Login</button>
                                    <Link to={'/register'}>
                                        <p style={{ textDecoration: 'none' }} className='mt-3'>New to here? Please Register....</p>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth