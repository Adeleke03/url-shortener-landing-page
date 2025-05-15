import React from 'react';

const Menu = () => {
  return (
    <ul className="flex justify-between text-[#9C9BA2] list-none gap-6">
      <li className='hover:opacity-55'><a href="">Features</a></li>
      <li className='hover:opacity-55'><a href="">Pricing</a></li>
      <li className='hover:opacity-55'><a href="">Resources</a></li>
    </ul>
  );
};

export default Menu;
