import P from "prop-types";

/**
 * @param {string} cols - String - Adicione uma string com até quatro valores de 1 a 12 separados por vírgula
 * @example - Exemplo de uso
 * <Col cols='12,6, 6, 4' >Conteúdo</Col>
 * @return col-sm-12 col-md-6 col-lg-6 col-xl-4
 * @param {string} className - String Adiciona classes ao componete
 * @param {object} style - Object Adiciona um style no compoente passando um objeto
 * @example
 * <Col style={{backgroundColor:"green"}}></Col>
 */
export const Col = (props) => {
  const { children, className, style, cols } = props;
  const number = cols ? cols.split(",") : [12, 12, 12, 12];
  let classes = "";
  if (number[0]) classes += `col-sm-${number[0]} `;
  if (number[1]) classes += `col-md-${number[1]} `;
  if (number[2]) classes += `col-lg-${number[2]} `;
  if (number[3]) classes += `col-xl-${number[3]}`;

  return (
    <div
      className={`${classes} ${(className && `${className}`) || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
  cols: P.string,
};
