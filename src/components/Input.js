import styles from "./styles/Input.module.css"
export default function Input({label="label",type="text",placeholder="placeholder",className="",values=[]}) {
  const STYLES =`border border-[#9E9E9E] focus:border-2 focus:border-[#1E88E5] rounded-xl p-2.5`
  return (
    <div className={className}>
      <div className='flex flex-col gap-1'>
        <label htmlFor={`${label}`}>{label}</label>
        {type==="select" ? 
        <select name="select" className={`${STYLES} ${styles.select}`}>
            {values.map((el,index)=><option key={index}>{el}</option>)}
        </select>
        :
         <input type={type} className={STYLES} placeholder={placeholder}/>
        }        
      </div>
    </div>
  )
}
