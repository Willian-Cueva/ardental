import React from "react";
import { Link } from "react-router-dom";
import cx from "clsx";

export default function MenuMedicalAppointments() {
  return (
    <div className="flex justify-between items-center">
      <span className="font-semibold">Citas Médicas</span>
      <div className="flex gap-4 font-normal">
        <Link
          className={cx("p-2 rounded-xl border hover:bg-purple-500 hover:border-purple-500 hover:text-white", {
            "bg-purple-500 border-purple-500 text-white":
              window.location.href === "http://localhost:3000/ardental#/citas-medicas",
          })}
          to="/citas-medicas"
        >
          Agenda
        </Link>
        <Link
          className={cx("p-2 rounded-xl border hover:bg-slate-500 hover:border-slate-500 hover:text-white", {
            "bg-slate-500 border-slate-500 text-white": window.location.hash.includes(
              "/citas-medicas/pendings"
            ),
          })}
          to="/citas-medicas/pendings"
        >
          Ver citas pendientes
        </Link>
        <Link
          className={cx("p-2 rounded-xl border hover:bg-red-500 hover:border-red-500 hover:text-white", {
            "bg-red-500 border-red-500 text-white": window.location.hash.includes(
              "/citas-medicas/unpresented"
            ),
          })}
          to="/citas-medicas/unpresented"
        >
          Ver citas no asistidas
        </Link>
        <Link
          className={cx("p-2 rounded-xl border hover:bg-green-500 hover:border-green-500 hover:text-white", {
            "bg-green-500 border-green-500 text-white": window.location.hash.includes(
              "/citas-medicas/presented"
            ),
          })}
          to="/citas-medicas/presented"
        >
          Ver citas asistidas
        </Link>
      </div>
    </div>
  );
}
