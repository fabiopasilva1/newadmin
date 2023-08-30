import P from "prop-types";
/**
 * @param {string} className - String Adiciona classes ao componete
 * @param {object} style - Object Adiciona um style no compoente passando um objeto
 *
 */
export const CardHeader = (props) => {
  /**
   * @param {string} className - String Adiciona classes ao componente
   * @param {object} style - Object Adiciona um style no componente passando um objeto
   * @param {string} title - String adiciona um titulo
   */
  const { children, style, className, title, tools } = props;

  return (
    <div
      className={`card-header${(className && ` ${className}`) || ""}`}
      style={style || {}}
    >
      {title && <h3 className="card-title">{title}</h3>}
      {tools && (
        <div className="card-tools">
          {tools.minus && (
            <button
              type="button"
              className="btn btn-tool "
              data-card-widget="collapse"
              title="Recolher"
            >
              <i className="fas fa-minus"></i>
            </button>
          )}
          {tools.remove && (
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
              title="Fechar"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      )}

      {children}
    </div>
  );
};
CardHeader.propTypes = {
  children: P.node,
  className: P.string,
  style: P.object,
  title: P.string,
  tools: P.object,
  minus: P.bool,
};
