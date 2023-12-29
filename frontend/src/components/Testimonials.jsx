import { useState } from "react";
import SectionHead from "./SectionHead"
import { testimonials } from "../data"
import { ImQuotesLeft } from "react-icons/im";
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from "react-icons/io"
import Card from "../ui/Card";

function Testimonials() {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = testimonials[index]
  const prevTestimonialHandler = () => {
    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
        setIndex(prev => prev - 1)

    
  }
  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1)
    if (index >= testimonials.length - 1)
      setIndex(0)
    
  }
  return (
    <section className="testimonials">
      <div className="container container_testimonials">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
        <Card className="testimonial">
          <div className="testimonial_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial_quote">
            {`"${quote}"`}
          </p>
          <h5>{name}</h5>
          <small className="testimonial_title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
          <button className="testimonials_btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
          <button className="testimonials_btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials