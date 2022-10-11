import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { INPUT_TABLE } from "../helpers/styles";
import TextArea from "./TextArea";

export default function RowTableTreatment({ treatment ,edit,deleted,index}) {
   
  return (
    <tr>
      <td>
        <input
          type="date"
          name=""
          id=""
          value={treatment.date}
          className={INPUT_TABLE}
        />
      </td>
      <td>
        <input type="text" value={treatment.part} className={INPUT_TABLE} disabled/>
      </td>
      <td>
        <TextArea value={treatment.diagnostic} />
      </td>
      <td>
        <TextArea value={treatment.treatment} />
      </td>
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
  );
}
