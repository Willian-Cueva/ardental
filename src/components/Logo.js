import logo from "../assets/imgs/logo.png";

export default function Logo({className}) {
  return (
    <div className={className}>
      <span className="flex items-center">
        <img src={logo} alt="logotipo" className="h-7 mr-2" />
        <label className="text-xl ">Ardental</label>
      </span>
    </div>
  );
}
