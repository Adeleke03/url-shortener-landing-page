import React from 'react'

const Footer = () => {
  return (
    <main className='bg-[hsl(255,11%,22%)] grid  wrapper  mx-auto w-full py-10'>
      <section className='text-white  grid md:flex justify-between gap-8 w-full max-w-6xl'>
        <h1 className='text-lg font-bold'>Shortly</h1>

        <div>
          <h2 className='text-lg font-bold'>Features</h2>
          <ul className='text-base font-light cursor-pointer'>
            <li className="hover:text-[#2acfcf]">Link Shortening</li>
            <li className="hover:text-[#2acfcf]">Branded Shortening</li>
            <li className="hover:text-[#2acfcf]">Analytics</li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-bold'>Resources</h2>
          <ul className='text-base font-light cursor-pointer'>
            <li className="hover:text-[#2acfcf]">Blog</li>
            <li className="hover:text-[#2acfcf]">Developers</li>
            <li className="hover:text-[#2acfcf]">Support</li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-bold'>Company</h2>
          <ul className='text-base font-light cursor-pointer'>
            <li className="hover:text-[#2acfcf]">About</li>
            <li className="hover:text-[#2acfcf]">Our Team</li>
            <li className="hover:text-[#2acfcf]">Careers</li>
            <li className="hover:text-[#2acfcf]">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <ion-icon className="hover:text-[#2acfcf]" name="logo-facebook"></ion-icon>
          <ion-icon className="hover:text-[#2acfcf]" name="logo-twitter"></ion-icon>
          <ion-icon className="hover:text-[#2acfcf]" name="logo-pinterest"></ion-icon>
          <ion-icon className="hover:text-[#2acfcf]" name="logo-instagram"></ion-icon>
        </div>
      </section>
    </main>
  )
}

export default Footer;
