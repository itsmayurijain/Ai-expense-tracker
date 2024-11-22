import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


export const Hero = () => {
  return (
    <div><section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="text-6xl font-extrabold  text-purple-700">
            Manage Your Expense
          </h1>
          <strong className="font-extrabold text-5xl text-black pt-4 sm:block">Control your Money</strong>


          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating your budget and save ton of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={'/sign-in'}>
              <div className="block w-full rounded mt-2 bg-purple-700 px-12 py-3 text-lg font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"  >

                Get Started
              </div>
              </Link>
          </div>
          <Image src='/dashboard.png'
      alt='dashboard'
      width={1200}
      height={700}
      className='mt-5 rounded-xl border-2'
      />
        </div>
      </div>
      
    </section></div>
  )
}

