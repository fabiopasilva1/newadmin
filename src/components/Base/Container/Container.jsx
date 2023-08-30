import P from "prop-types";
/**
 * @param {string} className - String Adiciona classes ao componete
 * @param {object} style - Object Adiciona um style no compoente passando um objeto
 * @param {boolean} fluid - Valor Boolean true ou false
 */
export const Container = (props) => {
  const { className, style, fluid, children } = props;
  return (
    <div
      className={`container${fluid ? "-fluid" : ""}${
        (className && ` ${className}`) || ""
      }`}
      style={(style && style) || {}}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  className: P.string,
  style: P.object,
  fluid: P.bool,
  children: P.node,
};
