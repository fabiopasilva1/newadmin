import api from "../../config/api";

/**
 *
 * @param {function} dispatch Função dispatch
 * @param {string} url Endereço url do endpoint
 * @param {object} options Objeto com as opções da conexão exemplo headers, params, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const LoadData = async (dispatch, url, options, types) => {
  const response = await api.get(url, options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};
/**
 *
 * @param {function} dispatch Função dispatch
 * @param {string} url Endereço url do endpoint
 * @param {object} body Objeto com os valores a serem inseridos na tabela
 * @param {object} options Objeto com as opções da conexão exemplo headers, params, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const CreateData = async (dispatch, url, body, options, types) => {
  const response = await api.post(url, body, options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};
/**
 *
 * @param {function} dispatch Função dispatch
 * @param {string} url Endereço url do endpoint
 * @param {object} body Objeto com os valores a serem atualizados
 * @param {object} options Objeto com as opções da conexão exemplo headers, params, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const UpdateData = async (dispatch, url, body, options, types) => {
  const response = await api.put(url, body, options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};

/**
 *
 * @param {function} dispatch Função dispatch
 * @param {string} url Endereço url do endpoint
 * @param {object} body Objeto com os valores a serem atualizados
 * @param {object} options Objeto com as opções da conexão exemplo headers, params, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const PatchData = async (dispatch, url, body, options, types) => {
  const response = await api.patch(url, body, options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};
/**
 *
 * @param {function} dispatch Função dispatch
 * @param {string} url Endereço url do endpoint
 * @param {object} options Objeto com as opções da conexão exemplo headers, params, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const DeleteData = async (dispatch, url, options, types) => {
  const response = await api.delete(url, options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};
/**
 *
 * @param {function} dispatch Função dispatch
 * @param {object} options Objeto com as opções do request como headers, method, params, data, filters
 * @param {string} types Tipo de consulta para retorno do payload
 * @returns
 */
export const RequestData = async (dispatch, options, types) => {
  const response = await api.request(options);
  const data = response.data;
  return () => dispatch({ type: types, payload: data });
};
