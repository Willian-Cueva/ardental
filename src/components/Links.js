import ButtonLink from "./ButtonLink";
import styles from "./styles/Links.module.css";
import SubTitleLink from "./SubTitleLink";

export default function Links() {
  return (
    <div className={`lg:w-[260px] px-4 ${styles.navbar} bg-black`}>
      <SubTitleLink title="Dashboard" />
      <ButtonLink />
      <div className="w-full h-[1px] bg-[#EEEEEE]" />
    </div>
  );
}
