import styles from "./styles/CoverImage.module.css"

export default function CoverImage({children}) {
  return (
    <div className={`w-[150px] h-[200px] bg-slate-400 overflow-hidden rounded-xl border border-slate-300 ${styles.image} duration-100 cursor-pointer`}>{children}</div>
  )
}
