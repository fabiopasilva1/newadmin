import P from "prop-types";
/**
 * @param {string} className - String Adiciona classes ao componente
 * @param {object} style - Object Adiciona um style no componente passando um objeto
 */
export const CardBody = (props) => {
  const { children, className, style } = props;
  return (
    <div
      className={`card-body ${(className && ` ${className}`) || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};
CardBody.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
};
