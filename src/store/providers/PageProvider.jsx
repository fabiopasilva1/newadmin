import P from "prop-types";
import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../components/Base/Preloader/Preloader";

const PageProvider = () => {
  const { slug } = useParams();
  const PageComponent = lazy(() =>
    import(`../../pages/${slug || "home"}/${slug || "home"}.jsx`)
      .then((module) => ({
        default: module.default,
      }))
      .catch((error) => {
        // Tratamento de erro - arquivo não encontrado
        console.error(`Erro ao carregar o componente: ${error}`);
        return import(`../../module/error-page`).then((module) => ({
          default: module.default,
        }));
      })
  );

  return (
    <Suspense fallback={<Preloader />}>
      <PageComponent />
    </Suspense>
  );
};
export default PageProvider;
PageProvider.propTypes = {
  children: P.node,
};
