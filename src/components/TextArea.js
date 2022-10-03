import styles from "./styles/TextArea.module.css";
export default function TextArea({ placeholder = "placeholder" ,value}) {
 

//   useEffect(() => {
//     let textarea = document.querySelector("textarea");
//     textarea.addEventListener("keydown", autosize);
//     return () => {
//       textarea.removeEventListener("keydown", autosize);
//     };
//   }, []);

  return <textarea rows="1" value={value}></textarea>;
}
