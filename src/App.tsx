import GlobalStyled from "./config/GlobalStyled";
import UserProvider from "./contexts/UserContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <UserProvider>
        <AppRoutes />
        <GlobalStyled />
      </UserProvider>
  );
}

export default App;
