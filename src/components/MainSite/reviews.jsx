import { Carousel } from 'react-responsive-carousel';
import React, { useEffect } from 'react'
import AOS from "aos";

const Reviews = () => {
  useEffect(() => {
    AOS.init(
      {
        duration : 1000
      }    
    );
   }
, [])
  return (
    <>
    <div style={{'display':'flex',justifyContent:'center','paddingBottom':'20px','backgroundColor':'white','marginTop':'-20px',paddingTop:'20px'}}>
    <div className='box-t' data-aos="zoom-in-up">
      
      <div className='left'>
           <img alt='alt' src='https://i.pinimg.com/474x/f9/8f/c1/f98fc169a3586c835615b36287277f2c--indian-man-jumanji.jpg'/></div>
         <div className='Testominals'>
         <Carousel autoPlay autoFocus useKeyboardArrows transitionTime={0}  showThumbs={false} showStatus={false} swipeable={true} dynamicHeight infiniteLoop  >
           <div className='review-card'>
               <div className='description-reviewer'>My Flood light was broken. I called the customer service and was connected to a real person within seconds. The lady Ruth on the phone was super nice and resolved the issue immediately. I received a replacement handle within 3 days! I couldn’t speak highly enough of my experience.</div><div className='name-reviewer'>-NEIL PATEL</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>I cannot be more impressed than I have been in this Bhoomi concealed light I’ve received by Bhoomi in the last month. I had a problem with a bhoomi flood light as well as my wall light. Both coincidentally Bhoomi products. I received replacement parts on both occasions with a few days - really fantastic service. Bhoomi has become my first choice in electrical products from now on . Thankyou </div><div className='name-reviewer'>-MANOJ</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>Bought Concealed light. Working like a charm</div><div className='name-reviewer'>-JOTI KUMAR</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>I cannot be more impressed than I have been in the customer service I’ve received by Bhoomi in the last month. I would recommend to go with PNL 3 (PC) </div><div className='name-reviewer'>-SAURHAV YADAV</div>
           </div>
           </Carousel>
           </div>
    </div>
    </div>
    </>
  )
}

export default Reviews
