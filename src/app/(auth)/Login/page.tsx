
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="w-full h-screen md:h-[120vh]  flex justify-center items-center flex-col">
            <div className='flex flex-col gap-12 justify-center items-center'>
                <div className='flex gap-5 justify-center flex-col items-center'>

                    <div className='text-center md:text-[30px] text-[25px] font-bold'>
                        <h1>View or Manage Your Order</h1>
                    </div>

                    <div>
                   <h3 className='text-center text-[16px]'>To check the status of your order, or to start <br /> a return, please enter your order number and <br /> email address.</h3>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-5'>
                    <input type="text"  placeholder='Order Number*' className='outline-none border-2 border-slate-400 h-[40px] md:h-[60px] px-2 md:w-[390px] w-[300px] rounded-[8px]' />
                    <input type="text" placeholder='Email Address*' className='outline-none border-2 border-slate-400 h-[40px] md:h-[60px] px-2 md:w-[390px] w-[300px] rounded-[8px]'/>
                </div >
    
               
                <div>
                    <p className='flex text-[#8D8D8D] md:text-[16px] text-[13px]'>Already a member? 
                        <Link
                        href="/Sign"
                        >
                        <span className='text-black hover:underline'>Sign in.</span>
                        </Link>
                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page