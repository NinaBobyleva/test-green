import { Flex } from "@gravity-ui/uikit";
import { PhoneNumberEntry } from "../PhoneNumberEntry/PhoneNumberEntry";
import { SideBar } from "../SideBar/SideBar";
import { MessagesField } from "../MessageField/MessageField";

export const Home = () => {
  return (
    <div>
      <PhoneNumberEntry />
      <Flex>
        <SideBar />
        <MessagesField />
      </Flex>
    </div>
  );
};
