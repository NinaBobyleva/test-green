import { Button, Flex, Icon } from "@gravity-ui/uikit";
import styles from "./messageField.module.css";
import { PaperPlane, Person } from "@gravity-ui/icons";
import { useUserNumberPhoneContext } from "../../context/useUserNumberPhoneContext";

export const MessagesField = () => {
  const { userNumberPhone } = useUserNumberPhoneContext();

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
         <input className={styles.mainInput} type="text" />
         <Button className={styles.mainBtn} view="flat" size="xl"><Icon data={PaperPlane} /></Button>
       </div>
      </main>
    </div>
  );
};
