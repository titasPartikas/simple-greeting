import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container.js";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./pages/HomePage/HomePage.js";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.js";
import CatalogePage from "./pages/CatalogePage/CatalogePage.js";
import { routes } from "./constants/routes.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.js";
import CatalogeItemPage from "./pages/CatalogeItemPage/CatalogeItemPage.js";

function App() {
  const headerLinks = useMemo(() => {
    return [
      {
        to: routes.homePage,
        label: "Home",
      },
      {
        to: routes.catalogePage,
        label: "Cataloge",
      },
      {
        to: routes.contactUsPage,
        label: "Contact Us!",
      },
    ];
  }, []);

  return (
    <Container>
      <Header pages={headerLinks} />
      <Routes>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route path={routes.contactUsPage} element={<ContactUsPage />} />
        <Route path={routes.catalogePage} element={<CatalogePage />} />
        <Route path={routes.catalogeItemPage} element={<CatalogeItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
