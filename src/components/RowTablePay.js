import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { INPUT_TABLE } from '../helpers/styles'
import TextArea from './TextArea'

export default function RowTablePay({pay,index,edit,deleted}) {
  const {date,pass,balance,observations} = pay;
  return (
    <tr>
          <td className='w-[150px]'><input type="date" name="" id="" value={date} className={INPUT_TABLE}/></td>
          <td>$<input type="number" inputMode='numeric' value={pass} className={INPUT_TABLE}/></td>
          <td>$<input type="number" inputMode='numeric' name="" id="" value={balance} className={INPUT_TABLE}/></td>
          <td><TextArea value={observations}/></td>
          <td>
        <div onClick={()=>{
          edit(index)
        }} className="bg-[#5E35B1] cursor-pointer p-2 rounded-xl w-12 flex justify-center">
          <FaEdit color="white" />
        </div>
      </td>

      <td>
        <div onClick={()=>{
          deleted(index);
        }} className="bg-[#F44336] cursor-pointer p-2 rounded-xl w-12 flex justify-center">
          <FaTrash color="white" />
        </div>
      </td>
    </tr>
  )
}
