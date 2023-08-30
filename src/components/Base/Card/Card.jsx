import P from "prop-types";
/**
 * @param {string} className - String Adiciona classes ao componente
 * @param {object} style - Object Adiciona um style no componente passando um objeto
 * @param {boolean} outline - Valor boolean adiciona ou não a classe outline
 *
 */
export const Card = (props) => {
  const { children, className, style, outline, color } = props;

  return (
    <div
      className={`card${(className && ` ${className}`) || ""}${
        (outline && " card-outline") || ""
      }${(color && ` card-${color}`) || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};
Card.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
  outline: P.bool,
  color: P.string,
};
