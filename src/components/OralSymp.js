import { useEffect } from "react";
import { oralSympPatient } from "../services/RegisterPatient.service";
import Main from "./Main";
import RadioButtonsGroup from "./RadioButtonsGroup";
import Switch from "./Switch";

export default function OralSymp({ editMode = false, search }) {
  useEffect(() => {
    if (editMode)
      oralSympPatient(search).then((data) => {
        const oralSymp = data.data,
          d = document;
        d.getElementById("id-swt-halitosis").checked = oralSymp.halitosis;
        d.getElementById("id-swt-BleedingGums").checked = oralSymp.BleedingGums;
        d.getElementById("id-swt-xerostomia").checked = oralSymp.xerostomia;
        d.getElementById("id-swt-bruxismo").checked = oralSymp.bruxismo;

        d.getElementById("id-swt-halitosis").value = oralSymp.halitosis;
        d.getElementById("id-swt-BleedingGums").value = oralSymp.BleedingGums;
        d.getElementById("id-swt-xerostomia").value = oralSymp.xerostomia;
        d.getElementById("id-swt-bruxismo").value = oralSymp.bruxismo;

        d.getElementById("id-rdb-hypersensitivity-1").checked = oralSymp.hypersensitivity.cool;

        d.getElementById("id-rdb-hypersensitivity-2").checked = oralSymp.hypersensitivity.hot;

        d.getElementById("id-rdb-hypersensitivity-3").checked = oralSymp.hypersensitivity.sweet;

        d.getElementById("id-rdb-hypersensitivity-4").checked = oralSymp.hypersensitivity.acid;

        d.getElementById("id-rdb-hypersensitivity-5").checked = oralSymp.hypersensitivity.touch;
        d.getElementById("id-rdb-hypersensitivity-1").value = oralSymp.hypersensitivity.cool;

        d.getElementById("id-rdb-hypersensitivity-2").value = oralSymp.hypersensitivity.hot;

        d.getElementById("id-rdb-hypersensitivity-3").value = oralSymp.hypersensitivity.sweet;

        d.getElementById("id-rdb-hypersensitivity-4").value = oralSymp.hypersensitivity.acid;

        d.getElementById("id-rdb-hypersensitivity-5").value = oralSymp.hypersensitivity.touch;
      });
  }, );

  return (
    <Main title="Sintomatología Oral" subtitle={true}>
      <div className="grid grid-cols-10 gap-2">
        <Switch
          id={"id-swt-halitosis"}
          label="Halitosis"
          className="col-span-2"
        />
        <Switch
          id={"id-swt-BleedingGums"}
          label="Sangrado en las encias"
          className="col-span-2"
        />
        <Switch
          id={"id-swt-xerostomia"}
          label="Xerostomia"
          className="col-span-2"
        />
        <Switch
          id={"id-swt-bruxismo"}
          label="Bruxismo"
          className="col-span-2"
        />
        <RadioButtonsGroup
          id="id-rdb-hypersensitivity"
          className="col-span-4"
          label="Hipersensibilidad"
          values={["Frío", "Calor", "Dulce", "Ácido", "Tacto"]}
        />
      </div>
    </Main>
  );
}
