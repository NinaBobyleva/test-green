import { createContext, useContext, useState, type ReactNode } from "react";

type UserDataContextType = {
  userNumberPhone: string;
  chatId: string;
  setUserNumberPhone: React.Dispatch<React.SetStateAction<string>>;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
};

const UserDataContext = createContext<UserDataContextType | null>(null);

export const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const [userNumberPhone, setUserNumberPhone] = useState("");
  const [chatId, setChatId] = useState("");

  return (
    <UserDataContext.Provider
      value={{ userNumberPhone, chatId, setUserNumberPhone, setChatId }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }

  return context;
};
