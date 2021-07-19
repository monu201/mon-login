import {NavLink} from "react-router-dom"
import "./nav.css"
const Nav=()=>{
    return(
      <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.freecodecamp.org/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i className="ri-menu-line burgur"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a className="nav-link active"  href="https://www.linkedin.com/in/monish-prasad-952a17206/">Linkedin</a>
            <NavLink className="nav-link" activeClassName="bg" to="/signup" exact>SignUp</NavLink>
            <NavLink className="nav-link"  activeClassName="bg" to="/login" exact>Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Nav