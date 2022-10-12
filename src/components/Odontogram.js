import Absent from "../assets/svg/Absent";
import ButtonColor from "../assets/svg/ButtonColor";
import Crown from "../assets/svg/Crown";
import FilteredOut from "../assets/svg/FilteredOut";
import Fractured from "../assets/svg/Fractured";
import OdontogramComplete from "../assets/svg/OdontogramComplete";
import useOdontogram from "../hooks/useOdontogram";
import ButtonOdontogram from "./ButtonOdontogram";
import { FaEraser } from "react-icons/fa";
import Tooth from "./Tooth";
import img from "../assets/imgs/logo.png";

export default function Odontogram() {
  const { odontogramData, optionSelect } = useOdontogram();
  
  const estilos = {
    cursor: `url(${img}),auto`,
  };
  return (
    <div
      className={`flex flex-col items-center`}
      style={estilos}
      id="panel-odontogram"
    >
      <div id="id-div-odontogram-data" className="hidden">{JSON.stringify(odontogramData)}</div>
      <div className="flex gap-6">
        <div>
          <span className="w-[69px]">Por Hacer</span>
          <div className="flex flex-wrap gap-2 mb-2">
            <ButtonOdontogram num={0} title="Caries">
              <ButtonColor />
            </ButtonOdontogram>
            <ButtonOdontogram num={1} title="Todo con Caries">
              <OdontogramComplete />
            </ButtonOdontogram>
            <ButtonOdontogram num={2} title="Ausente">
              <Absent />
            </ButtonOdontogram>
            <ButtonOdontogram num={3} title="Corona">
              <Crown />
            </ButtonOdontogram>
            <ButtonOdontogram num={4} title="Filtrado">
              <FilteredOut />
            </ButtonOdontogram>
            <ButtonOdontogram num={5} title="Fractura">
              <Fractured />
            </ButtonOdontogram>
          </div>
        </div>
        <div>
          <span className="w-[69px]">Hecho</span>
          <div className="flex flex-wrap gap-2 mb-2">
            <ButtonOdontogram num={6} title="Caries">
              <ButtonColor color="red" />
            </ButtonOdontogram>
            <ButtonOdontogram num={7} title="Todo con Caries">
              <OdontogramComplete color="red" />
            </ButtonOdontogram>
            <ButtonOdontogram num={8} title="Ausente">
              <Absent color="red" />
            </ButtonOdontogram>
            <ButtonOdontogram num={9} title="Corona">
              <Crown color="red" />
            </ButtonOdontogram>
          </div>
        </div>
        <div>
          <span className="w-[69px]">Limpiar</span>
          <div className="flex flex-wrap gap-2 mb-2">
            <ButtonOdontogram num={11} title="Limpia un Elemento">
              <FaEraser color={optionSelect === 11 && "white"} size={"25px"} />
            </ButtonOdontogram>
          </div>
        </div>
        <div>
          <span className="w-[69px]">Limpiar Todo</span>
          <div className="flex flex-wrap gap-2 mb-2">
            <ButtonOdontogram num={10} title="Deja todo en Blanco">
              <OdontogramComplete color="white" />
            </ButtonOdontogram>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[366px]">
          <div className="flex gap-3">
            <Tooth number={18} data={odontogramData[18]} />
            <Tooth number={17} data={odontogramData[17]} />
            <Tooth number={16} data={odontogramData[16]} />
            <Tooth number={15} data={odontogramData[15]} />
            <Tooth number={14} data={odontogramData[14]} />
            <Tooth number={13} data={odontogramData[13]} />
            <Tooth number={12} data={odontogramData[12]} />
            <Tooth number={11} data={odontogramData[11]} />
          </div>
          <div className="flex gap-3 justify-end">
            <Tooth number={55} data={odontogramData[55]} />
            <Tooth number={54} data={odontogramData[54]} />
            <Tooth number={53} data={odontogramData[53]} />
            <Tooth number={52} data={odontogramData[52]} />
            <Tooth number={51} data={odontogramData[51]} />
          </div>
          <div className="flex gap-3 justify-end">
            <Tooth number={85} data={odontogramData[85]} />
            <Tooth number={84} data={odontogramData[84]} />
            <Tooth number={83} data={odontogramData[83]} />
            <Tooth number={82} data={odontogramData[82]} />
            <Tooth number={81} data={odontogramData[81]} />
          </div>
          <div className="flex gap-3">
            <Tooth number={48} data={odontogramData[48]} />
            <Tooth number={47} data={odontogramData[47]} />
            <Tooth number={46} data={odontogramData[46]} />
            <Tooth number={45} data={odontogramData[45]} />
            <Tooth number={44} data={odontogramData[44]} />
            <Tooth number={43} data={odontogramData[43]} />
            <Tooth number={42} data={odontogramData[42]} />
            <Tooth number={41} data={odontogramData[41]} />
          </div>
        </div>
        <div className="w-[366px]">
          <div className="flex gap-3">
            <Tooth number={21} data={odontogramData[21]} />
            <Tooth number={22} data={odontogramData[22]} />
            <Tooth number={23} data={odontogramData[23]} />
            <Tooth number={24} data={odontogramData[24]} />
            <Tooth number={25} data={odontogramData[25]} />
            <Tooth number={26} data={odontogramData[26]} />
            <Tooth number={27} data={odontogramData[27]} />
            <Tooth number={28} data={odontogramData[28]} />
          </div>
          <div className="flex gap-3 justify-start">
            <Tooth number={61} data={odontogramData[61]} />
            <Tooth number={62} data={odontogramData[62]} />
            <Tooth number={63} data={odontogramData[63]} />
            <Tooth number={64} data={odontogramData[64]} />
            <Tooth number={65} data={odontogramData[65]} />
          </div>
          <div className="flex gap-3 justify-start">
            <Tooth number={71} data={odontogramData[71]} />
            <Tooth number={72} data={odontogramData[72]} />
            <Tooth number={73} data={odontogramData[73]} />
            <Tooth number={74} data={odontogramData[74]} />
            <Tooth number={75} data={odontogramData[75]} />
          </div>
          <div className="flex gap-3">
            <Tooth number={31} data={odontogramData[31]} />
            <Tooth number={32} data={odontogramData[32]} />
            <Tooth number={33} data={odontogramData[33]} />
            <Tooth number={34} data={odontogramData[34]} />
            <Tooth number={35} data={odontogramData[35]} />
            <Tooth number={36} data={odontogramData[36]} />
            <Tooth number={37} data={odontogramData[37]} />
            <Tooth number={38} data={odontogramData[38]} />
          </div>
        </div>
      </div>
    </div>
  );
}
