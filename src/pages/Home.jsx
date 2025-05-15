import React from 'react';
import illustration from "../assets/illustration-working.svg";
import ShortenerField from '../features/ShortenerField';
import GetStarted from '../features/GetStarted';
import Statistics from '../features/Statistics';
import Boost from '../features/Boost';

const Home = () => {
  return (
    <main className=' font-poppins  '>
      {/* section for illustraction */}
      <section className='bg-white wrapper'>
        <div><GetStarted/> </div>
        
      </section>
      {/* shortner input div  */}
      <section className='bg-[#F0F1F6] wrapper'>
        <div className='mt-10'><ShortenerField/> </div>
        <div> <Statistics/> </div>
      </section>
      {/* section for boost */}
      <section><Boost/> </section>
      
    </main>
  )
}

export default Home
