import { useEffect } from "react";
import { clinicalSygnsPatient } from "../services/RegisterPatient.service";
import Main from "./Main";
import TableClinicalSigns from "./TableClinicalSigns";

export default function ClinicalSigns({ editMode = false, search }) {
  useEffect(() => {
    if (editMode)
      clinicalSygnsPatient(search).then((ClinicalSygns) => {
        const d = document;
        d.getElementById("id-txta-lips-cli").value =
          ClinicalSygns.lips.clinicalSigns;
        d.getElementById("id-txta-lips-obs").value =
          ClinicalSygns.lips.observations;
        d.getElementById("id-txta-cheeks-cli").value =
          ClinicalSygns.cheeks.clinicalSigns;
        d.getElementById("id-txta-cheeks-obs").value =
          ClinicalSygns.cheeks.observations;
        d.getElementById("id-txta-floorMouth-cli").value =
          ClinicalSygns.floorMouth.clinicalSigns;
        d.getElementById("id-txta-floorMouth-obs").value =
          ClinicalSygns.floorMouth.observations;
        d.getElementById("id-txta-tongue-cli").value =
          ClinicalSygns.tongue.clinicalSigns;
        d.getElementById("id-txta-tongue-obs").value =
          ClinicalSygns.tongue.observations;
        d.getElementById("id-txta-saliva-cli").value =
          ClinicalSygns.saliva.clinicalSigns;
        d.getElementById("id-txta-saliva-obs").value =
          ClinicalSygns.saliva.observations;
        d.getElementById("id-txta-gums-cli").value =
          ClinicalSygns.gums.clinicalSigns;
        d.getElementById("id-txta-gums-obs").value =
          ClinicalSygns.gums.observations;
        d.getElementById("id-txta-tonsils-cli").value =
          ClinicalSygns.tonsils.clinicalSigns;
        d.getElementById("id-txta-tonsils-obs").value =
          ClinicalSygns.tonsils.observations;
        d.getElementById("id-txta-ATM-cli").value =
          ClinicalSygns.ATM.clinicalSigns;
        d.getElementById("id-txta-ATM-obs").value =
          ClinicalSygns.ATM.observations;
        d.getElementById("id-txta-nodes-cli").value =
          ClinicalSygns.nodes.clinicalSigns;
        d.getElementById("id-txta-nodes-obs").value =
          ClinicalSygns.nodes.observations;
        d.getElementById("id-txta-salivaryGlands-cli").value =
          ClinicalSygns.salivaryGlands.clinicalSigns;
        d.getElementById("id-txta-salivaryGlands-obs").value =
          ClinicalSygns.salivaryGlands.observations;
      });
  }, []);

  return (
    <Main title="Signos Clínicos" subtitle={true}>
      <TableClinicalSigns />
    </Main>
  );
}
