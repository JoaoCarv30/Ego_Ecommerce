// src/pages/LayoutMainPage/index.tsx
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const LayoutMainPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutMainPage;
