import P from "prop-types";

/**
 *
 * @param {string} className - String Adiciona classes ao componente
 * @param {object} style - Object Adiciona um style no componente passando um objeto
 * @returns
 */
export const CardFooter = (props) => {
  const { children, className, style } = props;

  return (
    <div
      className={`card-footer ${(className && ` ${className}`) || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
};
