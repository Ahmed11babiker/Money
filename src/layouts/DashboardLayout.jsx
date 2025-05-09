import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom"; // ✅ استيراد Outlet

export default function DashboardLayout({ toggleLang, lang,username }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar toggleLang={toggleLang} lang={lang} />
      <div className="flex-1 flex flex-col">
        <Topbar toggleLang={toggleLang} username={username} lang={lang} />
        <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          <Outlet /> {/* ✅ هذا يعرض المحتوى المناسب للمسار الحالي */}
        </main>
      </div>
    </div>
  );
}
