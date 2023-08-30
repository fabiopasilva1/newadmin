/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "styled-components";
import Container, { Col, Row } from "../../components/Base/Container/";
import Card, { CardBody } from "../../components/Base/Card";
import { PfImage } from "@profabric/react-components";
import logo from "../../assets/img/AdminLTELogo.png";

const StyledLogoArea = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    justify-content: flex-start;
    padding-top: 30px;
    z-index: -10;
  }

  background: linear-gradient(-45deg, #000666, #004666, #84b014);
  background-size: 300% 300%;
  -webkit-animation: gradient 15s linear alternate infinite;
  animation 15s infinite alternate linear gradient;

  @keyframes gradient{
    from {
      background-position: 0% 50%;

    }
    to{
      background-position:100% 50%;
    }
  }
  
`;
const StyledLoginArea = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const StyledImgLogo = styled(PfImage)`
  animation: logo_animation 700ms;

  animation-timing-function: ease-out;

  @keyframes logo_animation {
    0% {
      margin-top: 800px;
      opacity: 0;
      scale: 0;
    }

    30% {
      opacity: 0.4;
      scale: 0;
    }
    60% {
      opacity: 0.4;
      scale: 1.2;
    }

    100% {
      margin-top: 0;
      scale: 1;
    }
  }
`;
const Login = () => {
  return (
    <div className="content">
      <Container
        fluid
        className={`vh-100 w-100 d-flex flex-wrap justify-content-center align-items-center p-0`}
      >
        <StyledLogoArea>
          <StyledImgLogo src={logo} />
        </StyledLogoArea>
        <StyledLoginArea>
          <div className="login-box">
            <div className="login-logo">
              <b>Admin</b> Dashboard
            </div>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <div className="login-box-msg">
                      Informe seu E-mail ou nome de usuário para entrar!
                    </div>
                    <form
                      onSubmit={() => {
                        window.sessionStorage.setItem("auth", true);
                      }}
                    >
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control form-control-border"
                          placeholder="E-Mail ou Login"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          className="form-control form-control-border"
                          placeholder="Senha"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <button className="btn btn-block btn-info">
                          Entrar
                        </button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </StyledLoginArea>
      </Container>
    </div>
  );
};

export default Login;
