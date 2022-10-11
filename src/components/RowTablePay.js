import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { INPUT_TABLE } from "../helpers/styles";
import TextArea from "./TextArea";

export default function RowTablePay({ pay, edit, deleted, index }) {
  console.log(pay);
  return (
    <tr>
      <td>
        <input
          type="date"
          name=""
          id=""
          value={pay.date}
          className={INPUT_TABLE}
          disabled
        />
      </td>
      <td>
        <input
          type="number"
          value={pay.pass}
          className={INPUT_TABLE}
          disabled
        />
      </td>
      <td>
        <input
          type="number"
          value={pay.balance}
          className={INPUT_TABLE}
          disabled
        />
      </td>
      <td>
        <TextArea value={pay.observations} />
      </td>
      <td>
        <div
          onClick={() => {
            edit(index);
          }}
          className="bg-[#5E35B1] cursor-pointer p-2 rounded-xl w-12 flex justify-center"
        >
          <FaEdit color="white" />
        </div>
      </td>

      <td>
        <div
          onClick={() => {
            deleted(index);
          }}
          className="bg-[#F44336] cursor-pointer p-2 rounded-xl w-12 flex justify-center"
        >
          <FaTrash color="white" />
        </div>
      </td>
    </tr>
  );
}
