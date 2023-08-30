import { PfImage } from "@profabric/react-components";
import logo from "../../../assets/img/AdminLTELogo.png";
const Preloader = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <PfImage
        className="animation__shake"
        src={logo}
        alt="LogoCompany"
        height={60}
        width={60}
      />
    </div>
  );
};

export default Preloader;
