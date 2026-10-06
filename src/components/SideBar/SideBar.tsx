import styles from "./sidebar.module.css";
import { Flex, Icon } from "@gravity-ui/uikit";
import {
  Comments,
  EnvelopeOpen,
  Handset,
  Persons,
  SealCheck,
  CirclePlusFill
} from "@gravity-ui/icons";

export const SideBar = () => {
  return (
    <Flex direction={"row"}>
      <div className={styles.leftBlock}>
        <Flex direction={"column"}>
          <div>
            <Flex
              className={styles.iconsBlock}
              gap={8}
              direction={"column"}
              justifyContent={"flex-start"}
            >
              <Icon size={"37"} data={Comments} />
              <Icon size={"37"} data={Handset} />
              <Icon size={"37"} data={SealCheck} />
              <Icon size={"37"} data={EnvelopeOpen} />
              <Icon size={"37"} data={Persons} />
            </Flex>
          </div>
        </Flex>
      </div>
      <div className={styles.rightBlock}>
        <header>
          <Flex direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <h1 className={styles.sideBarTitle}>WhatsApp</h1>
            <Icon className={styles.iconColor} size={"50"} data={CirclePlusFill} />
        </Flex>
        </header>
      </div>
    </Flex>
  );
};
