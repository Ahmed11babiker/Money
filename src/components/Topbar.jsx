import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Topbar({ username}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const handleLogout = () => {
    navigate("/login"); // ✅ التوجيه إلى صفحة تسجيل الدخول
  };

  return (
    <header className=" bg-green-200 rounded-b-md shadow px-4 py-5 flex justify-between items-center ">
      <span className="text-2xl">
          {t("welcome")} : {username}
        </span>
      <span>{new Date().toLocaleDateString()}</span>
      <div className="flex gap-4 items-center ">
        
        <button onClick={toggleLanguage} className="text-blue-500">
          {i18n.language === "ar" ? "English" : "العربية"}
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-100 hover:bg-red-200 text-red-600 text-sm px-3 py-1 rounded transition flex items-center gap-2"
        >
          <LogOut size={16} />
          {t("logout")}
        </button>
      </div>
    </header>
  );
}
