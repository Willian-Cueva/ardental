import { useState } from "react";
import styles from "./styles/DragAndDrop.module.css";
import Modal from "./Modal";
import Loader from "./Loader";
import { uploadImage } from "../services/Users.service";
import useGlobalState from "../hooks/useGlobalState";
import swal from "sweetalert";

export default function DragAndDropImages({ dni }) {
  const [onDragOverAwns, setonDragOverAwns] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getAhutorization } = useGlobalState();

  const uploadFile = async (file, index) => {
    const formData = new FormData();
    formData.append("dni", dni);
    formData.append("image", file);
    uploadImage(formData, dni, getAhutorization)
      .then((data) => {
        console.log("Lo que tiene el data",data);
        setLoading(false);
        if (data.status === "ok") {
          swal({
            title: "Imágenes subidas exitosamente",
            text: "Las imágenes fueron subidas satisfactoriamente",
            icon: "success",
            timer: "6000",
          })
        }else{
          swal({
            title: "No se pudo subir la imagen",
            text: data.status,
            icon: "error",
            timer: "6000",
          })
        }
        })
      .catch((err) => {
        console.log("Mensaje de error", err);
      });
  };

  const processFile = (file, index) => {
    const fileType = file.type;
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];
    if (validExtensions.includes(fileType)) {
      return uploadFile(file, index);
    } else {
      alert("El archivo subido no corresponde a una imagen");
      return 0;
    }
  };

  const showFiles = async (files) => {
    if (files.length !== undefined) {
      console.log("Files", files);
      let messages = 0;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        messages += await processFile(file, i);
      }
      console.log("El resultado de los contadores es", messages);
    }
  };

  const onChangeInput = () => {
    showFiles();
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setonDragOverAwns(true);
    const $text = document.getElementById("id-text");
    $text.textContent = "Suelta para subir la(s) imágenes";
  };

  const resetStyles = () => {
    setonDragOverAwns(false);
    const $text = document.getElementById("id-text");
    $text.textContent = "Arrastra y suelta imágenes";
  };

  const onDragLeave = (e) => {
    resetStyles();
  };

  const onDrop = (e) => {
    e.preventDefault();
    setLoading(true);
    showFiles(e.dataTransfer.files);
    resetStyles();
    // setLoading(false);
  };

  return (
    <div className="w-full flex items-start justify-center p-2 gap-2">
      <Modal show={loading}>
        <Loader />
      </Modal>
      <div
        onDrop={(e) => {
          onDrop(e);
        }}
        onDragLeave={(e) => {
          onDragLeave(e);
        }}
        onDragOver={(e) => {
          onDragOver(e);
        }}
        id="drag-area"
        className="bg-slate-500 text-white p-2 rounded-xl"
      >
        <div
          id="drag-area"
          className={`${onDragOverAwns ? styles.active : styles.drag_area}`}
        >
          <p id="id-text" className="font-bold  text-3xl pointer-events-none">
            Arrastra y suelta imágenes
          </p>
          <span className="font-bold  text-2xl pointer-events-none">ó</span>
          <button
            className={`rounded-xl border border-white py-2 px-3 mt-2 hover:bg-slate-400  ${
              onDragOverAwns && "pointer-events-none"
            } cursor-pointer`}
            onClick={() => {
              console.log("presiuonando click xdxd");
            }}
          >
            Selecciona tus archivos
          </button>
          <input
            onChange={() => {
              onChangeInput();
            }}
            type="file"
            id="id-images"
            hidden
            multiple
          />
        </div>
      </div>
    </div>
  );
}
