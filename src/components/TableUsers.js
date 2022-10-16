import React, { useState } from "react";
import { useEffect } from "react";
import swal from "sweetalert";
import { allUsers, togglePermitionUser } from "../services/Users.service";
import Loader from "./Loader";
import Modal from "./Modal";

export default function TableUsers() {
  const [ready, setReady] = useState(false);
  const [users, setUsers] = useState([]);

const downUsers = () =>{
    allUsers().then((res) => {
        console.log("res",res);
        setUsers(res.data)
    }).catch(err=>console.log(err));
}

  useEffect(() => {
    downUsers()
    setReady(true);
  }, []);

  const permit = (dni) =>{
    const request = {dni};
    togglePermitionUser(request).then(res=>{
        if (res.status === "ok") {
            downUsers();
            swal({
                title: "Usuario Actualizado",
                text: "Se han actualizado los permisos del cliente satisfactoriamente",
                icon: "success",
                timer: "6000"
            })
        } else {
            swal({
                title: "No se pudo actualizar",
                text: res.status,
                icon: "error",
                timer: "6000"
            })
        }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="rounded-xl overflow-hidden textArea font-semibold">
      <table>
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Rol</th>
            <th>Permitir</th>
          </tr>
        </thead>
        {ready ? (
          users.map((user, index) => (
            <tr>
              <td>{index}</td>
              <td>{`${user.name} ${user.lastname}`}</td>
              <td>{user.dni}</td>
              <td>
                {user.rol === "not-authorized"
                  ? "Sin Permisos"
                  : "Administrador"}
              </td>
              <td>
                <input
                className="w-6 h-6 rounded-lg"
                  type="checkbox"
                  name=""
                  id=""
                  checked={user.rol==="admin"}
                  onClick={()=>{
                    permit(user.dni)
                  }}
                />
              </td>
            </tr>
          ))
        ) : (
          <Modal show={!ready}>
            {" "}
            <Loader logo={false} />
          </Modal>
        )}
      </table>
      {users.length === 0 && (
        <div className="h-[50px] w-full flex justify-center items-center bg-[#b39ddb] font-semibold text-[#212121]">
          <div>No hay elementos</div>
        </div>
      )}
    </div>
  );
}
