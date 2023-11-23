import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import DownloadsPage from "./pages/DownloadsPage";
import { Layout } from "./components/Layout/Layout";
import PrivacyPage from "./pages/PrivacyPage";
import AgreementConditionsPage from "./pages/AgreementConditionsPage";
import { useEffect } from "react";


function App() {

  const { pageToTop } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageToTop])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="privacy" element={<PrivacyPage />}/>
          <Route path="agreement" element={<AgreementConditionsPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
