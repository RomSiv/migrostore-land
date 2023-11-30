import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import DownloadsPage from "./pages/DownloadsPage";
import { Layout } from "./components/Layout/Layout";
import PrivacyPage from "./pages/PrivacyPage";
import AgreementConditionsPage from "./pages/AgreementConditionsPage";
import ScrollToTop from "./components/ScrolToTop";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="privacy" element={<PrivacyPage />}/>
          <Route path="agreement" element={<AgreementConditionsPage />}/>
          <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
