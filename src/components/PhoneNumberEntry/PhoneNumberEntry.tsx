import { Button, Flex, Modal } from "@gravity-ui/uikit";
import styles from "./phoneNumberEntry.module.css";
import { Mask } from "../Mask/Mask";
import { useUserNumberPhoneContext } from "../../context/useUserNumberPhoneContext";
import { useInputChange } from "../../hooks/useInputChange";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";

export const PhoneNumberEntry = () => {
  const navigate = useNavigate();
  const numberPhone = useInputChange({ initialValue: "" });
  const { userNumberPhone, setUserNumberPhone } = useUserNumberPhoneContext();

  const openChat = () => {
    setUserNumberPhone(`+ 7 ${numberPhone.value}`);
    navigate(paths.HOME);
  };

  return (
    <Modal open={!userNumberPhone}>
      <h2 className={styles.modalTitle}>Введите номер телефона</h2>
      <Flex className={styles.modalContainer} gap={8} direction={"column"}>
        <Mask
          value={numberPhone.value}
          onChange={numberPhone.onChange}
          onBlur={numberPhone.onBlur}
          error={numberPhone.error}
          showMask={true}
          replacement={{ _: /\d/ }}
          labelTop={11.5}
        />
        <Button
          className={styles.modalBtn}
          onClick={openChat}
          view="action"
          size="xl"
        >
          Открыть чат
        </Button>
      </Flex>
    </Modal>
  );
};
