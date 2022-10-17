export const BG_DARK = "bg-[#192345]"
export const TEXT_DARK = "text-[#E2E8F0]"
// https://ardental-backend.herokuapp.com/
// export const SERVER = "localhost:3001",
export const SERVER = "ardental-backend.herokuapp.com",
  URL = `https://${SERVER}`,
  API = `${URL}/api`,
  PATIENTS = `${API}/patients`,
  USERS = `${API}/users`,
  ALL_PATIENTS = `${PATIENTS}/all-patients`,
  NEW_PATIENT = `${PATIENTS}/new-patient`,
  ONE_PATIENT = `${PATIENTS}/one-patient/`,
  UPDATE_PATIENT = `${PATIENTS}/update-personal-data-patient`,
  PERSONAL_HISTORY = `${PATIENTS}/personal-history-patient/`,
  UPDATE_PERSONAL_HISTORY = `${PATIENTS}/update-personal-history-patient`,
  ORAL_SYMP = `${PATIENTS}/oral-symp-patient/`,
  UPDATE_ORAL_SYMP = `${PATIENTS}/update-oral-symp-patient`,
  ODONTOGRAM = `${PATIENTS}/odontogram-patient/`,
  UPDATE_ODONTOGRAM = `${PATIENTS}/update-odontogram-patient`,
  CLINICAL_SIGNS = `${PATIENTS}/clinical-signs/`,
  UPDATE_CLINICAL_SIGNS = `${PATIENTS}/update-clinical-signs`,
  TREATMENTS = `${PATIENTS}/treatments/`,
  UPDATE_TREATMENTS = `${PATIENTS}/update-treatments`,
  WAY_PAY = `${PATIENTS}/way-pay/`,
  UPDATE_WAY_PAY = `${PATIENTS}/update-way-pay`,
  LOGIN_USER = `${USERS}/login`,
  REGISTER_USER = `${USERS}/register`,
  ALL_USERS = `${USERS}/all-users`,
  TOOGLE_PERMITION_USER = `${USERS}/toggle-permition`,
  RESQ_PASSWORD = `${USERS}/resque-password`,
  CHANGE_PASSWORD = `${USERS}/change-password`,
  CHANGE_PASS = `${USERS}/change-pass`,
  UPDATE_USER = `${USERS}/update-user`,
  USER = `${USERS}/get-user/`;

export function yearsPatient(date) {
  const birth = new Date(date),
    toDay = new Date();
  const years = toDay.getFullYear() - birth.getFullYear();
  return years;
}
export function emailValidate(email) {
  const rx =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  return rx.test(email);
}

export const METHOD_FETCH = ({ method, body = {} }) => {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    mode: "cors",
  };
};

export const SESSION_STORAGE = "ardental-session";
export const THEME_STORAGE = "ardental-theme";
export const PATIENT_MODEL = {
  PersonaData: {
    names: "",
    profession: "",
    dni: "",
    phone: "",
    direction: "",
    //en el caso del estado civil va del 1-5 soltero,casado,divorciado,viudo
    maritalStatus: 1,
    //en el caso del sexo va del 1-3 masculino,femenino,otro
    sex: 1,
    dateBorn: "",
    reason: "",
  },
  PersonalHistory: {
    disorders: "",
    //en el caso de la presion arterial va del 1-3 alta, normal , baja
    bloodPressure: 2,
    heartDiseases: false,
    medication: "",
    otherDiseases: "",
  },
  OralSymp: {
    halitosis: false,
    BleedingGums: false,
    xerostomia: false,
    bruxismo: false,
    hypersensitivity: {
      cool: false,
      hot: false,
      sweet: false,
      acid: false,
      touch: false,
    },
  },

  Odontogram: {
    data: {
      18: [0, 0, 0, 0, 0, 0],
      17: [0, 0, 0, 0, 0, 0],
      16: [0, 0, 0, 0, 0, 0],
      15: [0, 0, 0, 0, 0, 0],
      14: [0, 0, 0, 0, 0, 0],
      13: [0, 0, 0, 0, 0, 0],
      12: [0, 0, 0, 0, 0, 0],
      11: [0, 0, 0, 0, 0, 0],
      55: [0, 0, 0, 0, 0, 0],
      54: [0, 0, 0, 0, 0, 0],
      53: [0, 0, 0, 0, 0, 0],
      52: [0, 0, 0, 0, 0, 0],
      51: [0, 0, 0, 0, 0, 0],
      85: [0, 0, 0, 0, 0, 0],
      84: [0, 0, 0, 0, 0, 0],
      83: [0, 0, 0, 0, 0, 0],
      82: [0, 0, 0, 0, 0, 0],
      81: [0, 0, 0, 0, 0, 0],
      48: [0, 0, 0, 0, 0, 0],
      47: [0, 0, 0, 0, 0, 0],
      46: [0, 0, 0, 0, 0, 0],
      45: [0, 0, 0, 0, 0, 0],
      44: [0, 0, 0, 0, 0, 0],
      43: [0, 0, 0, 0, 0, 0],
      42: [0, 0, 0, 0, 0, 0],
      41: [0, 0, 0, 0, 0, 0],
      21: [0, 0, 0, 0, 0, 0],
      22: [0, 0, 0, 0, 0, 0],
      23: [0, 0, 0, 0, 0, 0],
      24: [0, 0, 0, 0, 0, 0],
      25: [0, 0, 0, 0, 0, 0],
      26: [0, 0, 0, 0, 0, 0],
      27: [0, 0, 0, 0, 0, 0],
      28: [0, 0, 0, 0, 0, 0],
      61: [0, 0, 0, 0, 0, 0],
      62: [0, 0, 0, 0, 0, 0],
      63: [0, 0, 0, 0, 0, 0],
      64: [0, 0, 0, 0, 0, 0],
      65: [0, 0, 0, 0, 0, 0],
      71: [0, 0, 0, 0, 0, 0],
      72: [0, 0, 0, 0, 0, 0],
      73: [0, 0, 0, 0, 0, 0],
      74: [0, 0, 0, 0, 0, 0],
      75: [0, 0, 0, 0, 0, 0],
      31: [0, 0, 0, 0, 0, 0],
      32: [0, 0, 0, 0, 0, 0],
      33: [0, 0, 0, 0, 0, 0],
      34: [0, 0, 0, 0, 0, 0],
      35: [0, 0, 0, 0, 0, 0],
      36: [0, 0, 0, 0, 0, 0],
      37: [0, 0, 0, 0, 0, 0],
      38: [0, 0, 0, 0, 0, 0],
    },
  },
  ClinicalSygns: {
    lips: {
      clinicalSigns: "",
      observations: "",
    },
    cheeks: {
      clinicalSigns: "",
      observations: "",
    },
    floorMouth: {
      clinicalSigns: "",
      observations: "",
    },
    tongue: {
      clinicalSigns: "",
      observations: "",
    },
    saliva: {
      clinicalSigns: "",
      observations: "",
    },
    gums: {
      clinicalSigns: "",
      observations: "",
    },
    tonsils: {
      clinicalSigns: "",
      observations: "",
    },
    ATM: {
      clinicalSigns: "",
      observations: "",
    },
    nodes: {
      clinicalSigns: "",
      observations: "",
    },
    salivaryGlands: {
      clinicalSigns: "",
      observations: "",
    },
  },
  Treatments: {
    data: [
      {
        date: "",
        part: "",
        diagnostic: "",
        treatment: "",
      },
    ],
  },
  WayPay: {
    data: [
      {
        date: "",
        pass: 0,
        balance: 0,
        observations: "",
      },
    ],
  },
};
