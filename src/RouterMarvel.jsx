import { Route, Routes, Navigate } from "react-router-dom";
import { HeaderMarvel } from "./components/HeaderMarvel";
import { FooterMarvel } from "./components/FooterMarvel";
import { HomeMarvel } from "./pages/HomeMarvel";
import { InformationMarvel } from "./pages/InformationMarvel";
import { SearchMarvel } from "./pages/SearchMarvel";

export const RouterMarvel = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <HeaderMarvel />
            <Routes>
              <Route index element={<HomeMarvel />} />
              <Route path="marvel/:id" element={<InformationMarvel />} />
              <Route path="search/:name" element={<SearchMarvel />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <FooterMarvel />
          </>
        }
      />
    </Routes>
  );
};
