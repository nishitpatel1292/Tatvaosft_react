import React, { useState } from 'react'
import './components.css'
export default function LoginForm() {
    const [uname,setUname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${uname},Email: $${email}, Password: ${password}  `)
    }
    return (
        <>
            <div className='login-form'><h3> Login Form </h3>
                <form className='register'>
                    <label htmlFor="uname">Username
                        <input type="text" name="uname" id="uname" onChange={(e)=>setUname(e.target.value)}/>
                    </label>
                    <label htmlFor="email">Email id 
                        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">Password 
                        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                    </label>
                    <button type="Submit" className='btn-submit' onClick={handleSubmit} >Submit</button>
                </form>
            </div>
        </>
    )
}
