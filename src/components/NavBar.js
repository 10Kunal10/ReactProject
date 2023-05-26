import React from 'react'
import{
  Link
} from "react-router-dom"


function NavBar() {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Daily News</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>

            <Link className="nav-link" to="/business">Business</Link>
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
            <Link className="nav-link" to="/general">General</Link>
            <Link className="nav-link" to="/health">Health</Link>
            <Link className="nav-link" to="/science">Science</Link>
            <Link className="nav-link" to="/sports">Sports</Link>
            <Link className="nav-link" to="/technology">Technology</Link>




          </ul>

        </div>

      </nav>
    </div>
  )

}

export default NavBar
