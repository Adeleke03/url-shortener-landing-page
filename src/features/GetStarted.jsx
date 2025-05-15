import React from 'react';
import illustration from "../assets/illustration-working.svg";

const GetStarted = () => {
  return (
    <div>
      <figure><img className="w-full max-w-md mx-auto" src={illustration} alt="working illustration" /></figure>
        {/* div for illustration text */}
        <div className='py-5 flex flex-col items-center container mx-auto'>
          <h1 className='font-bold text-4xl py-6'>More than just Shorter links</h1>
          <p className='pb-3 text-[#9C9BA2]'>Build your brands recognition and get detialed insights on how your link are performing </p>
          <button className=" text-white bg-[#73D7D8]  rounded-full px-6 py-2 font-bold mx-3">Get Started</button>
        </div>
    </div>
  )
}

export default GetStarted
