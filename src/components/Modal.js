import styles from "./styles/Modal.module.css";
export default function Modal({children,show=false}) {
  return (
    <div className={`${styles.father} ${!show && "hidden"}`}>
      <article className={`${styles.modal}`}>
      <div className={`${styles.modalContainer}`}>
        <div className={`${styles.modalContent}`}>
          {children}
        </div>
      </div>
    </article>
    </div>
  );
}
