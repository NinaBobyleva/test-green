import { Button, Flex, Icon } from "@gravity-ui/uikit";
import styles from "./messageField.module.css";
import { PaperPlane, Person } from "@gravity-ui/icons";
import { useUserDataContext } from "../../context/useUserDataContext";
import { useAuthContext } from "../../context/authContext";
import { postMessage } from "../../api/mesaggesApi";
import { useInputChange } from "../../hooks/useInputChange";

export const MessagesField = () => {
  const { userNumberPhone } = useUserDataContext();
  const { idInstance, apiTokenInstance } = useAuthContext();
  const sendMessageInput = useInputChange({ initialValue: "" });

  const sendMessage = async () => {
    const sendPayload = {
      chatId: `${userNumberPhone}@c.us`,
      message: sendMessageInput.value,
    };
    try {
      const res = await postMessage({
        idInstance: idInstance,
        apiTokenInstance: apiTokenInstance,
        sendMessagePayload: sendPayload,
      });
      console.log(res);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.messagesContainer}>
      <header className={styles.header}>
        <Flex className={styles.headerUserBlock} gap={3} alignItems={"center"}>
          <Icon size={"40px"} data={Person} />
          <span className={styles.headerNumber}>{userNumberPhone}</span>
        </Flex>
      </header>
      <main className={styles.main}>
        <div className={styles.mainInputBlock}>
          <input
            onChange={sendMessageInput.onChange}
            className={styles.mainInput}
            type="text"
          />
          <Button
            onClick={sendMessage}
            className={styles.mainBtn}
            view="flat"
            size="xl"
          >
            <Icon data={PaperPlane} />
          </Button>
        </div>
      </main>
    </div>
  );
};
