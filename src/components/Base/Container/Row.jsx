import P from "prop-types";

/**
 *
 * @param {string} className - String Adiciona classes ao componete
 * @param {object} style - Object Adiciona um style no compoente passando um objeto
 * @returns
 */
export const Row = (props) => {
  const { children, className, style } = props;
  return (
    <div
      className={`row${(className && ` ${className}`) || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
};
