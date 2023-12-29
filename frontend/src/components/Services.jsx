import { FaCrown } from "react-icons/fa"
import {AiFillCaretRight} from "react-icons/ai"
import SectionHead from "./SectionHead"
import { services } from "../data"
import Card from "../ui/Card"
import { Link } from "react-router-dom"
 function Services() {
   return (
     <section className="services">
       <div className="container services_container">
         <SectionHead icon={<FaCrown/>} title="Services"/>
         <div className="services_wrapper">
         {
           services.map(({ id, icon, title, info, path }) => {
             return (
               <Card className={"services_service"} key={id}>
                 <span>{icon}</span>
                 <h4>{title}</h4>
                 <small>{info}</small>
                 <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>                 
               </Card>
             )
           })
         }         
         </div>
      </div>
     </section>
   )
 }
 
 export default Services