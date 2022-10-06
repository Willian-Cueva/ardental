import globalStateContext from "../contexts/globalStateContext";

import { useContext } from "react";
import { useState } from "react";
import { ODONTOGRAM_DATA } from "../helpers/constants";

export const useOdontogramModel = () => {
  const [odontogramData, setOdontogramData] = useState(ODONTOGRAM_DATA)
  return {
    odontogramData,
    setOdontogramData
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(globalStateContext);
