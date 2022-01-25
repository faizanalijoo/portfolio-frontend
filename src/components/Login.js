import axios from "axios";
import { useState } from "react";
import styles from "./Login.module.css"
import { useHistory } from "react-router-dom";

function Login() {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    let [message, setMessage] = useState('')
    let history = useHistory();

    let submitHandler = async (e) => {
        e.preventDefault()
        let data = {
            phone: phone,
            password: password
        }
        // let res = await axios.post('https://temlin-portfolio.herokuapp.com/login',data)

        try{
            let res = await axios.post('http://localhost:3001/login',data)
            console.log(res.data);
            setMessage('')
            history.push(`/${res.data._id}/${res.data.name}`)
        } catch(err){
            if(err.response.status == 401){
                setMessage(err.response.data.error);
            }
        }
     }


    return <div className={styles.login}>
        <form>
        <h1 style={{marginBottom:'20px'}}>LOGIN</h1>
        <p>Please enter your phone and password to continue.</p>
        <input placeholder='Phone' className={styles.phone} onChange={(e)=>setPhone(e.target.value)} type='text' />
        <input placeholder='Password' className={styles.password} onChange={(e)=>setPassword(e.target.value)} type='password' />
        <button className={styles.button} onClick={submitHandler}>Login</button>
        {message && <p className={styles.errorMessage}>{message}</p>}
        </form>
    </div>
}

export default Login;