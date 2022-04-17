export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "E-mail inválido";
  if (!re.test(email)) return "E-mail inválido";

  return "";
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return "A Senha não pode ser vazia.";

  return "";
};
