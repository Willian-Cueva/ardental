import { useEffect } from "react";
import { useState } from "react";
import Input from "../components/Input";
import Main from "../components/Main";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import useGlobalState from "../hooks/useGlobalState";
import { changePass, getUser, updateUser } from "../services/Users.service";
import { FaSave, FaUndo, FaWindowClose } from "react-icons/fa";
import swal from "sweetalert";
import InputPassLogin from "../components/InputPassLogin";

export default function MyProfile() {
  const { session } = useGlobalState();
  const [ready, setready] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const { getAhutorization } = useGlobalState();
  const updatePass = async () => {
    setready(false);
    const d = document;
    const email = session.email,
      howPass = d.getElementById("id-inp-howPassword-up").value,
      newPass = d.getElementById("id-inp-password-up").value,
      repPass = d.getElementById("id-inp-repeatPassword-up").value;
    const data = { email, howPass, newPass, repPass };
    await changePass(data, getAhutorization)
      .then((res) => {
        if (res.status === "ok") {
          swal({
            title: "Contraseña actualizada exitosamente",
            text: "Se ha actualizado su contraseña de forma satisfactoria",
            icon: "success",
            timer: "6000",
          });
          setready(true);
        } else {
          swal({
            text: res.status,
            icon: "info",
            timer: "6000",
          });
          setready(true);
        }
      })
      .catch((err) => console.log(err));
    setShowChangePass(false);
  };

  const editProfile = () => {
    setready(false);
    const d = document;
    const userSend = {
      name: d.getElementById("id-inp-name").value,
      lastname: d.getElementById("id-inp-lastname").value,
      dateBorn: d.getElementById("id-inp-dateBorn").value,
      dni: d.getElementById("id-inp-dni").value,
      sex: d.getElementById("id-inp-sex").value,
      phone: d.getElementById("id-inp-phone").value,
    };
    updateUser(userSend, getAhutorization)
      .then((res) => {
        if (res.status === "ok") {
          swal({
            title: "Datos Actualizados Satisfactóriamente",
            text: "Se han actualizado los datos del usuario de forma correcta.",
            icon: "success",
            timer: "6000",
          });
        } else {
          swal({
            text: res.status,
            icon: "info",
            timer: "6000",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
          text: "Ha ocurrido un problema",
          icon: "warning",
          timer: "6000",
        });
      });
    setready(true);
  };
  useEffect(() => {
    getUser(session.email, getAhutorization).then((res) => {
      const d = document;
      d.getElementById("id-inp-name").value = res.name;
      d.getElementById("id-inp-lastname").value = res.lastname;
      d.getElementById("id-inp-dateBorn").value = "" + res.dateBorn + "";
      d.getElementById("id-inp-dni").value = res.dni;
      d.getElementById("id-inp-sex").value = res.sex;
      d.getElementById("id-inp-dni").disabled = "on";
      d.getElementById("id-inp-phone").value = res.phone;
    });
    setready(true);
  }, []);

  const closeModalChangePassword = () => {
    setShowChangePass(false);
  };

  return (
    <Main title="Mi Perfil">
      <Modal show={!ready}>
        <Loader logo={false} />
      </Modal>
      <Modal show={showChangePass}>
        <Main
          title={
            <div className="flex justify-between w-full">
              <div className="font-bold">Cambiar Contraseña</div>
              <div
                className="text-red-600 cursor-pointer"
                onClick={() => {
                  // setShowModal(false);
                  closeModalChangePassword();
                }}
              >
                <FaWindowClose size={"35px"} />
              </div>
            </div>
          }
        >
          <section className="md:w-[500px]">
            <InputPassLogin
              text="Contraseña Actual"
              id={"id-inp-howPassword-up"}
            />
            <InputPassLogin
              text="Establesca la nueva contraseña"
              id={"id-inp-password-up"}
            />
            <InputPassLogin
              text="Repita la contraseña"
              id={"id-inp-repeatPassword-up"}
            />
          </section>
          <div className="w-full flex justify-between mt-4">
            <button
              onClick={() => {
                closeModalChangePassword();
              }}
              className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
            >
              <div className="font-semibold text-lg">Cancelar</div>
            </button>
            <button
              onClick={() => {
                updatePass();
              }}
              className={`bg-[#00C853] hover:bg-[#69F0AE] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
            >
              <div className="font-semibold text-lg">Guardar</div>
              <FaSave size={"22px"} />
            </button>
          </div>
        </Main>
      </Modal>
      <section className="grid grid-cols-10 gap-2">
        <Input
          id={"id-inp-name"}
          label="Nombre(s)"
          placeholder="Fernanda"
          className="col-span-5"
        />
        <Input
          id={"id-inp-lastname"}
          label="Apellido(s)"
          placeholder="Duarte"
          className="col-span-5"
        />
        <Input
          id={"id-inp-dateBorn"}
          type="date"
          label="Fecha de nacimiento"
          className="col-span-2"
        />
        <Input
          id={"id-inp-dni"}
          label="Cédula"
          className="col-span-2"
          placeholder="1150******"
        />
        <Input
          id={"id-inp-sex"}
          label="Sexo"
          type="select"
          className="col-span-2"
          values={["Masculino", "Femenino", "Otro"]}
        />
        <Input
          id={"id-inp-phone"}
          label="Celular"
          className="col-span-2"
          placeholder="099*******"
        />
      </section>

      <div className="w-full col-span-10 flex justify-end mb-2 mt-4">
        <button
          onClick={() => {
            setShowChangePass(true);
          }}
          className="w-[260px] text-center bg-[#2196F3] hover:bg-[#1E88E5] text-white py-1 px-2 flex items-center gap-3 min-h-[50px] rounded-xl font-bold"
        >
          <>
            Cambiar Contraseña
            <FaUndo size={"22px"} />
          </>
        </button>
      <div className="w-full col-span-10 flex justify-end">
        <button
          onClick={() => {
            editProfile();
          }}
          className="bg-[#00C853] hover:bg-[#69F0AE] text-white py-1 px-2 flex items-center gap-2 min-h-[50px] rounded-xl font-bold"
        >
          <>
            Guardar
            <FaSave size={"22px"} />
          </>
        </button>
      </div>
      </div>
    </Main>
  );
}
