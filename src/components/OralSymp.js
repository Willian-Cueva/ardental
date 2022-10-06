import Main from "./Main";
import RadioButtonsGroup from "./RadioButtonsGroup";
import Switch from "./Switch";


export default function OralSymp() {
  return (
    <Main title="Sintomatología Oral" subtitle={true}>
        <div className="grid grid-cols-10 gap-2">
          <Switch label="Halitosis" className="col-span-2" />
          <Switch label="Sangrado en las encias" className="col-span-2" />
          <Switch label="Xerostomia" className="col-span-2" />
          <Switch label="Bruxismo" className="col-span-2" />
          <RadioButtonsGroup
            className="col-span-4"
            label="Hipersensibilidad"
            values={["Frío", "Calor", "Dulce", "Ácido", "Tacto"]}
          />
        </div>
      </Main>
  )
}
