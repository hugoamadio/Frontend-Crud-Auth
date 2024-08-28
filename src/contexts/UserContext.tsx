import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextType {
  data: {
    email: string;
    token: string;
  };
  setData: (data: { email: string; token: string }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = useState<{ email: string; token: string }>({
    email: "",
    token: "",
  });

  useEffect(() => {
    if (data.email) {
      localStorage.setItem("userLogged", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const userLogged = localStorage.getItem("userLogged");
    if (userLogged) {
      setData(JSON.parse(userLogged));
    }
  }, []);

  function logout() {
    setData({ email: "", token: "" });
    localStorage.removeItem("userLogged");
  }

  return (
    <UserContext.Provider value={{ data, setData, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
export default UserProvider;
