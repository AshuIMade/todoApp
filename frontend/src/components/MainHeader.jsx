import { Link } from "react-router-dom"
//import Image from '../images/Plan-pic-two.png'
import Image from '../images/plan_pic.jpg'


function MainHeader() {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left ">
          <h4>#PlanYourLife</h4>
          <h1>Join Our Comunity</h1>
          <p>
            Sign In and start planning your life for better peformance 
            and time managment. Our goals can only be reached through a vehicle of a plan,
            in which we must fervently believe, and upon which we must vigorously act.
            There is no other route to success.
          </p>
          <Link to="/Signin" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image"/>
          </div>
        </div>
      </div>      
    </header>
  )
}

export default MainHeader