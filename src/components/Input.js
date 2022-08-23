import React from 'react'

export default function Input({label="label",type="text",placeholder="placeholder",className="",values=[]}) {
  const styles =`border border-[#9E9E9E] focus:border-[#1E88E5] focus:border-2 bg-[#F5F5F5] rounded-xl p-2.5`
  return (
    <div className={className}>
      <div className='flex flex-col gap-1'>
        <label htmlFor={`${label}`}>{label}</label>
        {type==="select" ? 
        <select name="select" className={styles}>
            {values.map((el,index)=><option key={index}>{el}</option>)}
        </select>
        :
         <input type={type} className={styles} placeholder={placeholder}/>
        }        
      </div>
    </div>
  )
}
