import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./main/Footer/Footer";
import MenuSidebar from "./main/menu-sidebar/MenuSidebar";
import Header from "./main/header/Header";
import { PfImage } from "@profabric/react-components";
import logo from "../assets/img/AdminLTELogo.png";
import { getAuthStatus } from "../utils/auth-providers";
import PageProvider from "../store/providers/PageProvider";

const Main = () => {
  const body = document.getElementsByTagName("body");
  const [menuCollapsed, setMenuCollapsed] = useState();
  const authentication = getAuthStatus();
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setIsAppLoaded(authentication);
  }, [authentication]);

  function addWindowClass(className) {
    body[0].classList.add(className);
  }
  function rmWindowClass(className) {
    body[0].classList.remove(className);
  }

  useEffect(() => {
    if (body[0]) {
      if (menuCollapsed) {
        addWindowClass("sidebar-collapse");
      } else {
        rmWindowClass("sidebar-collapse");
      }

      addWindowClass("layout-fixed");
      addWindowClass("layout-navbar-fixed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body, menuCollapsed]);

  const getAppTemplate = useCallback(() => {
    if (!isAppLoaded) {
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
    }

    return (
      <>
        <Header setMenuCollapsed={setMenuCollapsed} />
        <MenuSidebar />
        <div className="content-wrapper">
          <div className="pt-3">
            <section className="content">
              <PageProvider />
              <Outlet />
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }, [isAppLoaded]);
  return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
