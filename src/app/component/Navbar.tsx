import Manu from "../Manu"
import About from "./About"
import Link from "next/link"
const Navbar = ()=>{
    return(
<nav>
    <div className="logo">
        <h1>RSK Food</h1>
        </div>
        <div className="anchors">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#manu-sec">Manu</a>
          <a href="#desert-sec">Desert</a>
          <a href="#contact">Contact</a>

        </div>
        <button>Log in</button>
        <button>sign up</button>

       
</nav>    )
    
}
<>
<About />
<Manu />
</>
export default Navbar
