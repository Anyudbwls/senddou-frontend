/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [

    { name: 'SHARE', to: '/resume', current: false },
    { name: 'RESUME', to: '/edit/design', current: false },
  { name: '마이페이지', to: '/my-page', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <div className='flex justify-around items-end max-w-full pt-8 bg-sky-500/100 font-medium'>
      <div className="text-white text-4xl text-center hover:bg-gray-700" ><a href="/">SENDDOU</a></div>
        <div className='border-t-4 bg-white w-auto'></div>
      <div>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className={classNames(
              item.current
                ? 'bg-gray-900'
                : 'hover:bg-gray-700',
              'px-3 py-2 rounded-md text-white text-2xl',
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
