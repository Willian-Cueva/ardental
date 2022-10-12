import { useContext } from "react";

import { useState } from "react";
import OdontogramContext from "../contexts/OdontogramContext";

export const useOdontogramModel = () => {
  const [odontogramData, setOdontogramData] = useState({
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
  });
  const [optionSelect, setOptionSelect] = useState(-1);
  const decodButtonSelect = (num) => {
    switch (num) {
      case 0:
        return 1;
      case 6:
        return 2;
      default:
        return 0;
    }
  };

  const decodButton = (num) => {
    switch (num) {
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 3;
      case 5:
        return 4;
      case 8:
        return 5;
      case 9:
        return 6;
      default:
        return 0;
    }
  };

  const handleOptionSelect = (num) => {
    setOptionSelect(num);
  };

  const clickOnColorSelect = (num, possition) => {
    const getState = JSON.parse(JSON.stringify(odontogramData));
    if (optionSelect === 0 || optionSelect === 6) {
      getState[num][possition] = decodButtonSelect(optionSelect);
    } else if (optionSelect === 1 || optionSelect === 7) {
      for (let index = 0; index < getState[num].length - 1; index++) {
        getState[num][index] = optionSelect === 1 ? 1 : 2;
      }
    } else if (optionSelect === 10) {
      for (let index = 0; index < getState[num].length; index++) {
        getState[num][index] = 0;
      }
    } else if (optionSelect === 11) {
      if (getState[num][5]!==0) {
        getState[num][5]=0;
      }else{
        getState[num][possition]=0;
      }
    }else{
      getState[num][5] = decodButton(optionSelect);
    }
    setOdontogramData(getState);
  };

  return {
    odontogramData,
    optionSelect,
    setOdontogramData,
    setOptionSelect,
    handleOptionSelect,
    clickOnColorSelect,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(OdontogramContext);
