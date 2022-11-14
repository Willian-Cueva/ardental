import React from "react";
import { FaArrowLeft, FaCamera, FaTrash } from "react-icons/fa";
import CoverImage from "./CoverImage";
import DragAndDropImages from "./DragAndDropImages";
import Main from "./Main";
import Modal from "./Modal";
import styles from "../pages/styles/GestionPatient.module.css";
import scrollStyles from "../pages/styles/GestionPatient.module.css";
import { FaWindowClose, FaSave } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { deleteImagePatient, getImages } from "../services/RegisterPatient.service";
import useGlobalState from "../hooks/useGlobalState";
import Loader from "./Loader";
import swal from "sweetalert";

export default function Galery({ dni }) {
  const [showDragAndDrop, setShowDragAndDrop] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imagesPatient, setImagesPatient] = useState([]);
  const [ready, setReady] = useState(false);
  const { getAhutorization } = useGlobalState();
  const [urlImageTMP, setUrlImageTMP] = useState("");

  const dowloadImages = () => {
    getImages(dni, getAhutorization).then((res) => {
      if (res.status === "ok") {
        setImagesPatient(res.data);
        setReady(true);
      }
    }).finally(()=>setReady(true));
  };

  const showScreenImage = (url) => {
    setUrlImageTMP(url);
    setShowImage(true);
  };
  useEffect(() => {
    dowloadImages();
  }, []);

  const deleteImage = ()=>{
    swal({
      title: "¿Estas segur@ que deseas eliminar este elemento?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        deleteImagePatient({url:urlImageTMP},getAhutorization).then(
           data=>{
            if (data.status === "ok") {
              //debes estar pendiente en esta linea para la version de producción
              swal({
                title: "Imagen eliminada exitosamente",
                text: "La imagen fue eliminada satisfactoriamente",
                icon: "success",
                timer: "6000",
              }).then(res=>{
                dowloadImages()
                setShowImage(false)
              })
            }else{
              swal({
                title: "No se pudo subir la imagen",
                icon: "error",
                timer: "6000",
              })
            }
          }
        )
      }
    });
  }

  return (
    <Main title="Galería de sonrisas">
      <Modal show={showDragAndDrop}>
        <Main
          className={`${styles.main}`}
          title={
            <div className="flex justify-between w-full">
              <div className="font-bold">Subir Imágenes</div>
              <div
                className="text-red-600 cursor-pointer"
                onClick={() => {
                  setShowDragAndDrop(false);
                  dowloadImages();
                }}
              >
                <FaWindowClose size={"35px"} />
              </div>
            </div>
          }
        >
          <div
            className={`${scrollStyles.scrollBar} ${styles.area} overflow-y-scroll`}
          >
            <DragAndDropImages dni={dni} />
          </div>
        </Main>
      </Modal>
      <Modal show={showImage}>
        <img
            src={urlImageTMP}
            alt="imagen"
            className="h-[calc(100vh-85px)] max-w-[calc(100vw-100px)] rounded-xl object-cover"
          />
        <div className={`w-full flex justify-between mt-2`}>
        <button
            onClick={() => {
              setShowImage(false);
            }}
            className={`bg-[#2196F3] hover:bg-[#90CAF9] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <FaArrowLeft size={"22px"} />
            <div className="font-semibold text-lg">Atras</div>
          </button>
          <button
            onClick={() => {
              deleteImage()
            }}
            className={`bg-[#F44336] hover:bg-[#C62828] min-h-[46px] rounded-xl text-white flex flex-wrap justify-center items-center gap-2 py-1 px-3`}
          >
            <div className="font-semibold text-lg">Borrar Imagen</div>
            <FaTrash size={"22px"} />
          </button>
         
          
        </div>
      </Modal>
      <div className="flex flex-wrap gap-2">
        <CoverImage>
          <div
            onClick={() => {
              setShowDragAndDrop(true);
            }}
            className="w-full h-full bg-[#90CAF9] flex flex-col justify-center items-center gap-4"
          >
            <span className="font-semibold text-xl text-[#212121]">
              Añadir Fotos
            </span>
            <div>
              <FaCamera size={"36px"} color={"#212121"} />
            </div>
          </div>
        </CoverImage>
        {ready ? (
          imagesPatient.map((image,index) => (
            <CoverImage key={`${index}-image`}>
              <img
                onClick={() => {
                  showScreenImage(image.url);
                }}
                src={image.url}
                alt={"paciente"}
                className="h-full object-cover duration-100 hover:scale-125"
              />
            </CoverImage>
          ))
        ) : (
          <div className="ml-4"><Loader width="100px" height="100px" /></div>
        )}
      </div>
    </Main>
  );
}
