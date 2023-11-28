'use client'

import React, { useState } from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090')





export default function Form(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signoutHandler = (e) => {
        localStorage.removeItem("tokytoky")
        localStorage.removeItem("user")
        props.setUserLogged("");
    }

    const submitHandler = async (e) => {
        console.log()
        const type = e.nativeEvent.submitter.value;
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

        if (type == "login") {
            try {
                const authData = await pb.collection('users').authWithPassword(
                    username,
                    password,
                );
                console.log(authData.token)
                localStorage.setItem("tokytoky", authData.token)
                localStorage.setItem("user", authData.record.name)
                props.setUserLogged(username);
            } catch (err) {
                alert("fail login")
            }
            
        } else {
            const data = {
                "username": username,
                "email": "test@example.com",
                "password": password,
                "passwordConfirm": password,
                "name": username,
            };
            // /api/collections/users/records
            try {
                const resp = await pb.collection('users').create(data);
                console.log(resp)
            } catch (error) {
                alert("alrdy something fail create")
            }
            
        }
        return
        
    }


    return (
        <div>
            <button onClick={signoutHandler}>Signout</button>
            <form onSubmit={submitHandler}>
                <label>Username</label><input type="username" onChange={handleUsernameChange}/>
                <label>Password</label><input type="password" onChange={handlePasswordChange}/>
                
                <button type="submit" name="action" value="login">Login</button>
                <button type="submit" name="action" value="signup">Signup</button>
            </form>
        </div>
    )
}