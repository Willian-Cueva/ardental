import React from 'react'
import TextArea from './TextArea'

export default function RowTableTreatment({treatment}) {
  return (
    <tr>
          <td><input type="date" name="" id="" value={treatment[0]}/></td>
          <td><input type="text" value={treatment[1]}/></td>
          <td><TextArea value={treatment[2]}/></td>
          <td><TextArea value={treatment[3]}/></td>
    </tr>
  )
}
