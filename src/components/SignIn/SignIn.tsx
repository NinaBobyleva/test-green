import styles from "./signin.module.css";
import { Input } from "../Input/Input";
import { Button, Flex, Modal } from "@gravity-ui/uikit";

export const SignIn = () => {
  return (
    <Modal className={styles.modal} open={true}>
      <h2 className={styles.modalTitle}>Введите учетные данные</h2>
      <div className={styles.modalContainer}>
        <Flex gap={8} direction={"column"} className={styles.inputBox}>
          <Input type="text" placeholder="idInstance" />
          <Input type="text" placeholder="apiTokenInstance" />
          <Button className={styles.modalBtn} view="action" size="xl">Отправить</Button>
        </Flex>
      </div>
    </Modal>
  );
};
