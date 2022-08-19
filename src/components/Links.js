import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";

export default function Links() {
  return (
    <div className={`w-[260px] px-4 ${styles.navbar}`}>
      <SubTitleLink title="Dashboard" />
      <ButtonLink title="Registro"/>
      <div className="w-full h-[1px] bg-[#EEEEEE]" />
      <ButtonLink title="Pacientes"/>
      <div className="w-full h-[1px] bg-[#EEEEEE]" />
    </div>
  );
}
