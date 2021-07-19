import "./auth.css"
import {Link} from "react-router-dom"
const Auth=()=>{
    return(
        <div className="auth">
            <h2 className="auth2">Welcome !!!!</h2>
            <div className="d-flex justify-content-center">
            <Link to="/signup"><button className="btn btn-primary">Sign up</button></Link>
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            </div>
           
        </div>

    )
}

export default Auth