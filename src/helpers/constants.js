export const SESSION_STORAGE="ardental-session"
// export let ODONTOGRAM_DATA = 
export const TEST_USER = {
    PersonaData:{
        name: "Willian Cueva",
        profession: "Ingeniero en Sistemas",
        dni: "1150579124",
        phone: "0995711578",
        direction: "Epoca, Alemania entre Suiza y Holanda",
        //en el caso del estado civil va del 1-5 soltero,casado,divorciado,viudo
        maritalStatus: 1,
        //en el caso del sexo va del 1-3 masculino,femenino,otro
        sex: 1,
        dateBorn: "2002-01-12"
    },
    PersonalHistory:{
        disorders: "ninguno",
        //en el caso de la presion arterial va del 1-3 alta, normal , baja
        bloodPressure: 2,
        heartDiseases: false,
        medication: "ninguna",
        otherDiseases: "ninguna"
    },
    OralSymp:{
        halitosis: false,
        BleedingGums: false,
        xerostomia: false,
        bruxismo: false,
        hypersensitivity:{
            cool: false,
            hot: false,
            sweet: false,
            acid: false,
            touch: false
        }
    },
    ReasonConsult: "Fue por que es guapisimo",
    Odontogram: {
        
    }
}
// export const 