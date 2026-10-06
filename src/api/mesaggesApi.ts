import type { SendMessagePayload } from "../type";

const URL = "https://7201.api.green-api.com/";

export const receiveMessage = async ({
  idInstance,
  apiTokenInstance,
}: {
  idInstance: string;
  apiTokenInstance: string;
}) => {
  const response = await fetch(
    URL + `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    {
      method: "GET"
    }
  );

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

export const postMessage = async ({
  idInstance,
  apiTokenInstance,
  sendMessagePayload,
}: {
  idInstance: string;
  apiTokenInstance: string;
  sendMessagePayload: SendMessagePayload;
}) => {
  const response = await fetch(
    URL + `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendMessagePayload),
    },
  );

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
