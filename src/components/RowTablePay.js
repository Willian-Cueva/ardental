import React from 'react'
import TextArea from './TextArea'

export default function RowTablePay({pay}) {
  return (
    <tr>
          <td className='w-[150px]'><input type="date" name="" id="" value={pay[0]}/></td>
          <td>$<input type="number" inputMode='numeric' value={pay[1]} className="w-[50px]"/></td>
          <td>$<input type="number" inputMode='numeric' name="" id="" value={pay[2]} className="w-[50px]"/></td>
          <td><TextArea value={pay[3]}/></td>
    </tr>
  )
}
