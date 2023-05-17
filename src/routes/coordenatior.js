export const goToHome = (navigate) => {
  navigate("/");
};

export const goToDetail = (navigate, namePokemon) => {
  navigate("/details/" + namePokemon);
};

export const goToList = (navigate) => {
  navigate("/list");
};
