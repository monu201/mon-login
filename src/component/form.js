import "./form.css"
import {useState} from "react"
import axios from "axios"



const Form=()=>{

    const [fname,setfname]=useState("")
    const [Password,setpass]=useState("")
    const [email,setemail]=useState("")
    const [mes,setmes]=useState(false)
    const [p,setp]=useState(<h2>Registration done</h2>)


    const data=(e)=>{
        e.preventDefault()
        const deltails={
            fullname:fname,
            password:Password,
            email 
        }
        axios.post("https://mon-login-portal.herokuapp.com/login/app",deltails).then((res)=>{
            if(res.data.error==="err" )
            {
                setmes(true)
                setp(<h2>User exists<br></br>Check inputs</h2>)
                console.log(res.data)

            }
            else{
                setmes(true)
                setp(<h2>Registration done</h2>)
                console.log(res.data)

            }
           })

        setfname("")
        setpass("")
        setemail("")

       
    }

  

    return(
        <>

        <div className="message">{mes && p}
        </div> 

        <form className="details" onSubmit={data}>
          <h2>Sign Up</h2>
          <div className="d-flex mon"><i className="ri-account-circle-fill"></i>&nbsp;&nbsp;<input className="input" required="true" name="fullname" value={fname} type="text" onChange={(e)=>{setfname(e.target.value)}} placeholder="Enter Username"></input></div>
            <br></br>
            <div className="d-flex mon" ><i className="ri-mail-fill"></i>&nbsp;&nbsp;<input type="email" required="true" name="email" value={email} className="input" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email"></input></div>
            <br></br>
            <div className="d-flex mon"><i className="ri-lock-fill"></i>&nbsp;&nbsp;<input type="text" required="true" name="password"value={Password} className="input" onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter Password"></input></div>
            <br></br>
            <div ><button className="btn btn-primary" >Sign Up</button></div>
        </form>
     
        </>
    )
}

export default Form;