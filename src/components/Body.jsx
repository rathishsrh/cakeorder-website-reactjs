import React, { useEffect, useState } from 'react'
import homeimg from "../../public/assets/homeimg.png"
import homeimg2 from "../../public/assets/homeimg2.png"
import homeimg3 from "../../public/assets/homeimg3.png"
import homeimg4 from "../../public/assets/homeimg4.png"
import homeimg5 from "../../public/assets/homeimg5.png"
import homeimg6 from "../../public/assets/homeimg6.png"


export const Body = () => {

  const homeImages = [
  homeimg,
  homeimg2,
  homeimg3,
  homeimg4,
  homeimg5,
  homeimg6
];
const [index, setIndex] = useState(0);


  // /* Async auto-slide method */
  // const autoSlide = async () => {
  //   while (true) {
  //     await sleep(3000);               // wait 3s
  //     setIndex((prev) => (prev + 1) % homeImages.length);

  //     if(index==homeImages.length)
  //     {
  //       setIndex(0)
  //     }
  //   }
  // };
// Auto-slide using setInterval
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % homeImages.length);
    if(index==homeImages.length)
      {
        setIndex(0)
      }
  }, 3000); // every 3 seconds

  // Cleanup interval on component unmount
  return () => clearInterval(interval);
}, [homeImages.length]);


  return (
    <div className='body'>
        <div className="home">
          <div className="image">
           <img src={homeImages[index]} alt="" />
          </div>
        </div>
        <div className="cakes">

        </div>
        <div className="customcakes">

        </div>
        <div className="contact">

        </div>
    </div>
  )
}
