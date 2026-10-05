import { createContext, useContext, useState, type ReactNode } from "react";

type NumberPhoneContextType = {
  userNumberPhone: string;
  setUserNumberPhone: React.Dispatch<React.SetStateAction<string>>;
};

const NumberPhoneContext = createContext<NumberPhoneContextType | null>(null);

export const UserNumberPhoneProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userNumberPhone, setUserNumberPhone] = useState("");

  return (
    <NumberPhoneContext.Provider
      value={{ userNumberPhone, setUserNumberPhone }}
    >
      {children}
    </NumberPhoneContext.Provider>
  );
};

export const useUserNumberPhoneContext = () => {
  const context = useContext(NumberPhoneContext);

  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }

  return context;
};
