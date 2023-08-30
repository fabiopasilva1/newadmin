export const getAuthStatus = () => {
  const sessionAuth = window.sessionStorage.getItem("auth");

  if (sessionAuth) {
    return true;
  } else {
    return false;
  }
};
