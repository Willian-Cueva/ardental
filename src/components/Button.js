import React from "react";

export default function Button({ className, children,onclick = ()=>{} }) {
  return <button className={className} onClick={()=>{
    onclick()
  }}>{children}</button>;
}
