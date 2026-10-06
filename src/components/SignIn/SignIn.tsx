import styles from "./signin.module.css";
import { Input } from "../Input/Input";
import { Button, Flex, Modal } from "@gravity-ui/uikit";
import { useState } from "react";
import { authUser } from "../../api/authApi";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";
import { useInputChange } from "../../hooks/useInputChange";

export const SignIn = () => {
  const { setIsAuth, setIdInstance, setApiTokenInstance } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const idInstance = useInputChange({ initialValue: "" });
  const apiTokenInstance = useInputChange({ initialValue: "" });

  const sendCredentials = async () => {
    setIdInstance(idInstance.value);
    setApiTokenInstance(apiTokenInstance.value);

    try {
      const res = await authUser({
        idInstance: idInstance.value,
        apiTokenInstance: apiTokenInstance.value,
      });
      setIsAuth(res.isLogout);
      navigate(paths.HOME);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <Modal className={styles.modal} open={true}>
      <h2 className={styles.modalTitle}>Введите учетные данные</h2>
      <div className={styles.modalContainer}>
        <Flex gap={8} direction={"column"} className={styles.inputBox}>
          <Flex direction={"column"}>
            <Input
              onChange={(e) => {
                idInstance.setValue(e.target.value);
              }}
              onBlur={idInstance.onBlur}
              error={idInstance.isDirty}
              type="text"
              placeholder="idInstance"
            />
            {idInstance.error && (
              <span className={styles.error}>{idInstance.error}</span>
            )}
          </Flex>
          <Flex direction={"column"}>
            <Input
              onChange={(e) => {
                apiTokenInstance.setValue(e.target.value);
              }}
              onBlur={apiTokenInstance.onBlur}
              error={apiTokenInstance.isDirty}
              type="text"
              placeholder="apiTokenInstance"
            />
            {apiTokenInstance.error && (
              <span className={styles.error}>{apiTokenInstance.error}</span>
            )}
          </Flex>
          <Button
            onClick={sendCredentials}
            className={styles.modalBtn}
            disabled={
              !idInstance.value.trim() ||
              (!apiTokenInstance.value.trim() && true)
            }
            view="action"
            size="xl"
          >
            Отправить
          </Button>
          {error && <span className={styles.error}>{error}</span>}
        </Flex>
      </div>
    </Modal>
  );
};
