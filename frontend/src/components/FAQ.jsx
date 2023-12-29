import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

function FAQ({ question, answer }) {
  const [isAnswerShowing,setIsAnswerShowing]=useState(false)
  return (
    <article className="faq" onClick={()=>setIsAnswerShowing(prev=>!prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq_icon" >
          {
            isAnswerShowing ?<AiOutlineMinus/>:<AiOutlinePlus/>
          }          
        </button>
      </div>
      <p>
        {isAnswerShowing && answer}
      </p>
    </article>
  )
}

export default FAQ