import { Carousel } from 'react-responsive-carousel';
import React from 'react'

const Reviews = () => {
  return (
    <>
    <div className='box-t'>
      
      <div className='left'>
           <img alt='alt' src='https://i.pinimg.com/474x/f9/8f/c1/f98fc169a3586c835615b36287277f2c--indian-man-jumanji.jpg'/></div>
         <div className='Testominals'>
         <Carousel autoPlay autoFocus useKeyboardArrows transitionTime={0}  showThumbs={false} showStatus={false} swipeable={true} dynamicHeight infiniteLoop  >
           <div className='review-card'>
               <div className='description-reviewer'>My Flood light was broken. I called the customer service and was connected to a real person within seconds. The lady Ruth on the phone was super nice and resolved the issue immediately. I received a replacement handle within 3 days! I couldn’t speak highly enough of my experience. P.S. a few weeks ago we had some issues with newly bought Bhoomi Concealed light.</div><div className='name-reviewer'>-NEIL PATEL</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>I cannot be more impressed than I have been in the customer service I’ve received by Bhoomi in the last month. I had a problem with a facial hair trimmer as well as my electric toothbrush. Both coincidentally Bhoomi products. I received replacement parts on both occasions with a few days - really fantastic service. Bhoomi has become my first choice in electrical products from now on . Thankyou </div><div className='name-reviewer'>-RAHUL PARLANI</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>Bought Concealed light. The product is great, when I bought my son one it came in with a broken blade and customer service from Bhoomi were I purchased it gave me a hour of hoops, so I told them that I just buy a blade for it instead of this frustrating customer service. They asked for a review which was totally honest and basically said they don’t put up anything negative reviews on there site.</div><div className='name-reviewer'>-JOTI KUMAR</div>
           </div>
           <div className='review-card'>
               <div className='description-reviewer'>I cannot be more impressed than I have been in the customer service I’ve received by Bhoomi in the last month. I had a problem with a facial hair trimmer as well as my electric toothbrush. Both coincidentally Bhoomi products. I received replacement parts on both occasions with a few days - really fantastic service. Bhoomi has become my first choice in electrical products from now on . Thankyou </div><div className='name-reviewer'>-SAURHAV YADAV</div>
           </div>
           </Carousel>
           </div>
    </div>
    </>
  )
}

export default Reviews
