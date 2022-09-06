import Absent from "../assets/svg/Absent";
import ButtonColor from "../assets/svg/ButtonColor";
import Crown from "../assets/svg/Crown";
import FilteredOut from "../assets/svg/FilteredOut";
import Fractured from "../assets/svg/Fractured";
import OdontogramComplete from "../assets/svg/OdontogramComplete";
import ButtonOdontogram from "./ButtonOdontogram";
import Tooth from "./Tooth";

export default function Odontogram() {
  return (
    <>
      <div>
        <span className="w-[69px]">Por Hacer</span>
        <div className="flex flex-wrap gap-2 mb-2">
          <ButtonOdontogram>
            <ButtonColor />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <OdontogramComplete />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <Absent />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <Crown />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <FilteredOut />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <Fractured />
          </ButtonOdontogram>
        </div>
        <span className="w-[69px]">Hecho</span>
        <div className="flex flex-wrap gap-2 mb-2">
          <ButtonOdontogram>
            <ButtonColor color="red" />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <OdontogramComplete color="red" />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <Absent color="red" />
          </ButtonOdontogram>
          <ButtonOdontogram>
            <Crown color="red" />
          </ButtonOdontogram>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[366px]">
          <div className="flex gap-3">
            <Tooth number={18} />
            <Tooth number={17} />
            <Tooth number={16} />
            <Tooth number={15} />
            <Tooth number={14} />
            <Tooth number={13} />
            <Tooth number={12} />
            <Tooth number={11} />
          </div>
          <div className="flex gap-3 justify-end">
            <Tooth number={55} />
            <Tooth number={54} />
            <Tooth number={53} />
            <Tooth number={52} />
            <Tooth number={51} />
          </div>
          <div className="flex gap-3 justify-end">
            <Tooth number={85} />
            <Tooth number={84} />
            <Tooth number={83} />
            <Tooth number={82} />
            <Tooth number={81} />
          </div>
          <div className="flex gap-3">
            <Tooth number={48} />
            <Tooth number={47} />
            <Tooth number={46} />
            <Tooth number={45} />
            <Tooth number={44} />
            <Tooth number={43} />
            <Tooth number={42} />
            <Tooth number={41} />
          </div>
        </div>
        <div className="w-[366px]">
          <div className="flex gap-3">
            <Tooth number={21} />
            <Tooth number={22} />
            <Tooth number={23} />
            <Tooth number={24} />
            <Tooth number={25} />
            <Tooth number={26} />
            <Tooth number={27} />
            <Tooth number={28} />
          </div>
          <div className="flex gap-3 justify-start">
            <Tooth number={61} />
            <Tooth number={62} />
            <Tooth number={63} />
            <Tooth number={64} />
            <Tooth number={65} />
          </div>
          <div className="flex gap-3 justify-start">
            <Tooth number={71} />
            <Tooth number={72} />
            <Tooth number={73} />
            <Tooth number={74} />
            <Tooth number={75} />
          </div>
          <div className="flex gap-3">
            <Tooth number={31} />
            <Tooth number={32} />
            <Tooth number={33} />
            <Tooth number={34} />
            <Tooth number={35} />
            <Tooth number={36} />
            <Tooth number={37} />
            <Tooth number={38} />
          </div>
        </div>
      </div>
    </>
  );
}
