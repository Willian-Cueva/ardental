import React from 'react'
import { INPUT_TABLE } from '../helpers/styles'
import TextArea from './TextArea'

export default function RowTablePay({pay}) {
  return (
    <tr>
          <td className='w-[150px]'><input type="date" name="" id="" value={pay[0]} className={INPUT_TABLE}/></td>
          <td>$<input type="number" inputMode='numeric' value={pay[1]} className={INPUT_TABLE}/></td>
          <td>$<input type="number" inputMode='numeric' name="" id="" value={pay[2]} className={INPUT_TABLE}/></td>
          <td><TextArea value={pay[3]}/></td>
    </tr>
  )
}
