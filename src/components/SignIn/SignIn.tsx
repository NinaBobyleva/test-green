import styles from "./signin.module.css";
import { Input } from "../Input/Input";
import { Button, Flex, Modal } from "@gravity-ui/uikit";
import { useState } from "react";
import { authUser } from "../../api/authApi";

export const SignIn = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [error, setError] = useState("");
  console.log("error", error);
  console.log("idInstance", idInstance);
  console.log("apiTokenInstance", apiTokenInstance);

  const sendCredentials = async () => {
    try {
      const res = await authUser({idInstance, apiTokenInstance});
      console.log("res", res);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <Modal className={styles.modal} open={true}>
      <h2 className={styles.modalTitle}>Введите учетные данные</h2>
      <div className={styles.modalContainer}>
        <Flex gap={8} direction={"column"} className={styles.inputBox}>
          <Input onChange={(e) => {setIdInstance(e.target.value)}} type="text" placeholder="idInstance" />
          <Input onChange={(e) => {setApiTokenInstance(e.target.value)}} type="text" placeholder="apiTokenInstance" />
          <Button onClick={sendCredentials} className={styles.modalBtn} view="action" size="xl">Отправить</Button>
        </Flex>
      </div>
    </Modal>
  );
};
