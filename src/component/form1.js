import "./form1.css"
import ReactDOM from "react-dom"
import {useState} from "react"
import axios from "axios"
const Form1=()=>{
    const [user,setuser]=useState("")
    const [password,setpassword]=useState("")
    const [loginStatus,setloginStatus]=useState(false)
    const [login2,setlogin2]=useState(false)

    const bt=(e)=>{
        e.preventDefault()
        const uss={
            u:user,
            p:password,
        }

        axios.post("https://mon-login-portal.herokuapp.com/login/check",uss).then((res)=>{
            if(res.data.user==="wrong password" || res.data.user==="wrong username")
            {
                setlogin2(true)
            }
            
            else
            {
                setloginStatus(true)

            }
           
        })
        
        //console.log(loginStatus)

        setpassword("")
        setuser("")

    }

    const Back=()=>{
        return(
            <div className="port"></div>
        )
    }

    const Errormodal=()=>{
        return(
            <div className="ee d-flex justify-content-center">
                 <div className="port2 ">
                 <h2>hello there!!!</h2>
                 <button className="btn btn-primary" onClick={()=>{setloginStatus(false)}}>Log out</button>
            </div>
           
            </div>
           
        
        )
    }

    const Errormodal2=()=>{
        return(
            <div className="ee d-flex justify-content-center">

                <div className="port2 ">
                 <h2>Check input</h2>
                 <button className="btn btn-primary" onClick={()=>{setlogin2(false)}}>Type again</button>
            </div>
            </div>
           
           
        
        )
    }

    const Log=()=>{
        return(
            <div>
                 {ReactDOM.createPortal(<Back/>,document.getElementById("portal"))}
                 {ReactDOM.createPortal(<Errormodal/>,document.getElementById("portal-2"))}

            </div>
           )
    }

    const Log2=()=>{
        
        return(
            <div>
            {ReactDOM.createPortal(<Back/>,document.getElementById("portal"))}
            {ReactDOM.createPortal(<Errormodal2/>,document.getElementById("portal-2"))}

       </div>
      
        )

    }


    return(
        <>

         <div className="tt"><h2>{loginStatus}</h2></div>
        <form className="pp" onSubmit={bt}>
            <h2>Login</h2>
        <div className="d-flex mon"><i className="ri-account-circle-fill"></i>&nbsp;&nbsp;<input className="input" name="user" onChange={(e)=>{setuser(e.target.value)}} value={user} type="text" placeholder=" Enter Username"></input></div><br></br>
        <div className="d-flex mon"><i className="ri-lock-fill"></i>&nbsp;&nbsp; <input placeholder="Enter Password" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="input" type="password"></input></div><br></br>
            <button className="btn btn-primary" type="submit" >Lets's Go</button>
        </form>
        {loginStatus &&  <Log></Log>}
        {login2 && <Log2></Log2>}
        
        </>
    )
}

export default Form1