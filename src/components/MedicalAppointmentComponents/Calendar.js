import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import cx from "clsx";
import useGlobalState from "../../hooks/useGlobalState";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function Calendar() {
  const {
    listDaysMonth,
    monthSelected,
    yearSelected,
    daySelected,
    firstDayMonth,
    setMonthSelected,
    setYearSelected,
    setDaySelected,
  } = useGlobalState();

  const clickDay = (day) => {
    setDaySelected(day.day);
  };

  const nextMonth = () => {
    if (monthSelected === 11) {
      setMonthSelected(0);
      setYearSelected(yearSelected + 1);
    } else {
      setMonthSelected(monthSelected + 1);
    }
  };
  const prevMonth = () => {
    if (monthSelected === 0) {
      setMonthSelected(11);
      setYearSelected(yearSelected - 1);
    } else {
      setMonthSelected(monthSelected - 1);
    }
  };

  const [messageText, setMessageText] = useState({
    message: "Pasa el cursor o selecciona un día del calendario",
    color: "text-slate-600",
  });

  const eventMouseEnter = (day) => {
    if (day.appointments > 0) {
      setMessageText({
        message: `Tienes ${day.appointments} citas en este día`,
        color: "text-yellow-500",
      });
    } else {
      setMessageText({
        message: `No tienes citas registradas para este día`,
        color: "text-slate-400",
      });
    }
  };

  const eventMouseLeave = () => {
    setMessageText({
      message: "Pasa el cursor o selecciona un día del calendario",
      color: "text-slate-600",
    });
  };
  return (
    <div className="grid grid-cols-7 min-w-[264px] h-[306px]">
      <div className="col-span-7 flex justify-between items-center">
        <button onClick={prevMonth}>
          <FaArrowLeft size={20} />
        </button>
        <span>
          {months[monthSelected]}, {yearSelected}
        </span>
        <button onClick={nextMonth}>
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className="col-span-7 grid grid-cols-7 gap-1 mt-2">
        <span className="col-span-1 text-center P-1">Lun</span>
        <span className="col-span-1 text-center P-1">Mar</span>
        <span className="col-span-1 text-center P-1">Mie</span>
        <span className="col-span-1 text-center P-1">Jue</span>
        <span className="col-span-1 text-center P-1">Vie</span>
        <span className="col-span-1 text-center P-1">Sab</span>
        <span className="col-span-1 text-center P-1">Dom</span>
      </div>

      <div className="col-span-7 grid grid-cols-7 gap-1">
        {listDaysMonth.map((day, i) => (
          <button
            key={i}
            className={cx(
              "col-span-1 text-center p-1 rounded-xl border border-white hover:border-slate-400 transition-all duration-200 ease-in-out",
              {
                "col-start-1": i === 0 && firstDayMonth === 1,
                "col-start-2": i === 0 && firstDayMonth === 2,
                "col-start-3": i === 0 && firstDayMonth === 3,
                "col-start-4": i === 0 && firstDayMonth === 4,
                "col-start-5": i === 0 && firstDayMonth === 5,
                "col-start-6": i === 0 && firstDayMonth === 6,
                "col-start-7": i === 0 && firstDayMonth === 0,
                "hover:bg-yellow-400": day.appointments > 0,
                "bg-blue-500 text-white": day.day === daySelected,
              }
            )}
            onMouseEnter={() => {
              eventMouseEnter(day);
            }}
            onMouseLeave={eventMouseLeave}
            onClick={() => {
              clickDay(day);
            }}
          >
            {day.day}
          </button>
        ))}
      </div>
      <div
        className={`col-span-7 flex justify-center mt-4 ${messageText.color} transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-[200px] h-[100px] text-center">{messageText.message}</div>
      </div>
    </div>
  );
}
