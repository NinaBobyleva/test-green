import { useState, createContext, type ReactNode, useContext } from "react";

type AuthContextType = {
  isAuth: boolean;
  idInstance: string;
  apiTokenInstance: string;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setIdInstance: React.Dispatch<React.SetStateAction<string>>;
  setApiTokenInstance: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        idInstance,
        apiTokenInstance,
        setIsAuth,
        setIdInstance,
        setApiTokenInstance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }

  return context;
};
