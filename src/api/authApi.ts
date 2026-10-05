const URL = "https://7201.api.green-api.com/";

export const authUser = async ({ idInstance, apiTokenInstance }: { idInstance: string, apiTokenInstance: string }) => {
  const response = await fetch(URL + `waInstance${idInstance}/logout/${apiTokenInstance}`, {
    method: "GET"
  });

  if (response.status === 401) {
    throw new Error("Проверьте корректность данных");
  }

  if (response.status === 404) {
    throw new Error("Некорректный метод запроса");
  }

  if (response.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!response.ok) {
    throw new Error("Что-то пошло не так");
  }

  const res = await response.json();

  return res;
};