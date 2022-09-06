import React from 'react'

export default function ButtonOdontogram({children}) {
  return (
    <div className='cursor-pointer hover:bg-[#EDE7F6] w-[46px] h-[46px] border-[2px] border-[#212121] rounded-[15.33px] flex justify-center items-center'>
        {children}
    </div>
  )
}
