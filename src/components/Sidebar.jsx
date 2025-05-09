// // 📁 src/components/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import { ChevronDown, ChevronRight, Home, ClipboardList, BarChart2, DollarSign, FileText, Calendar, Users, Globe } from "lucide-react";

// export default function Sidebar() {
//   const { t } = useTranslation();
//   const [isAccountsOpen, setIsAccountsOpen] = useState(false);

//   const links = [
//     { to: "/", label: "Dashboard", icon: <Home size={16} /> },
//     { to: "/journal", label: "Journal Entries", icon: <ClipboardList size={16} /> },
//     { to: "/reports", label: "Reports", icon: <BarChart2 size={16} /> },
//     { to: "/trial-balance", label: "Trial Balance", icon: <FileText size={16} /> },
//     { to: "/balance-sheet", label: "Balance Sheet", icon: <Calendar size={16} /> },
//     { to: "/fiscal-years", label: "Fiscal Years", icon: <Calendar size={16} /> },
//     { to: "/branch", label: "Branch", icon: <Users size={16} /> },
//     { to: "/currency", label: "Currencies", icon: <DollarSign size={16} /> }
//   ];

//   return (
//     <aside className="w-64 bg-gray-800 text-white h-screen p-6 space-y-6 shadow-lg">
//       <h2 className="text-2xl font-bold border-b pb-2">{t("Accounting System")}</h2>
//       <nav className="flex flex-col gap-2">
//         {links.map(({ to, label, icon }) => (
//           <NavLink
//             key={to}
//             to={to}
//             className={({ isActive }) =>
//               `flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 ${{
//                 true: "bg-blue-600 text-white font-semibold",
//                 false: "hover:bg-gray-200 hover:text-black"
//               }[isActive]}`
//             }
//           >
//             {icon}
//             <span>{t(label)}</span>
//           </NavLink>
//         ))}

//         <NavLink
//           to="/accounts"
//           onClick={() => setIsAccountsOpen(!isAccountsOpen)}
//           className={({ isActive }) =>
//             `flex items-center justify-between px-4 py-2 rounded transition-all duration-200 ${{
//               true: "bg-blue-600 text-white font-semibold",
//               false: "hover:bg-gray-200 hover:text-black"
//             }[isActive]}`
//           }
//         >
//           <div className="flex items-center gap-2">
//             <Globe size={16} />
//             <span>{t("Accounts Tree")}</span>
//           </div>
//           {isAccountsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//         </NavLink>

//         {isAccountsOpen && (
//           <div className="ml-6 flex flex-col gap-1">
//             <NavLink
//               to="/accounts/accounts"
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-3 py-1 rounded text-sm ${{
//                   true: "bg-blue-600 text-white font-semibold",
//                   false: "hover:bg-gray-200 hover:text-black"
//                 }[isActive]}`
//               }
//             >
//               <ClipboardList size={14} />
//               {t("Accounts")}
//             </NavLink>
//             <NavLink
//               to="/accounts/groups"
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-3 py-1 rounded text-sm ${{
//                   true: "bg-blue-600 text-white font-semibold",
//                   false: "hover:bg-gray-200 hover:text-black"
//                 }[isActive]}`
//               }
//             >
//               <Users size={14} />
//               {t("Account Groups")}
//             </NavLink>
//             <NavLink
//               to="/accounts/types"
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-3 py-1 rounded text-sm ${{
//                   true: "bg-blue-600 text-white font-semibold",
//                   false: "hover:bg-gray-200 hover:text-black"
//                 }[isActive]}`
//               }
//             >
//               <BarChart2 size={14} />
//               {t("Account Types")}
//             </NavLink>
            
//           </div>
//         )}
//       </nav>
//     </aside>
//   );
// }





// 📁 src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  ClipboardList,
  BarChart2,
  DollarSign,
  FileText,
  Calendar,
  Users,
  Globe
} from "lucide-react";

export default function Sidebar() {
  const { t } = useTranslation();
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  const links = [
    { to: "/", label: "Dashboard", icon: <Home size={16} /> },
    // Journal Entries handled separately for dropdown
    { to: "/reports", label: "Reports", icon: <BarChart2 size={16} /> },
    { to: "/branch", label: "Branch", icon: <Users size={16} /> },
    { to: "/currency", label: "Currencies", icon: <DollarSign size={16} /> },
    { to: "/costcenter", label: "Costcenter", icon: <DollarSign size={16} /> }
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6 space-y-6 shadow-lg">
      <h2 className="text-2xl font-bold border-b pb-2">{t("Accounting System")}</h2>
      <nav className="flex flex-col gap-2">
        
        {/* Other links */}
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 ${
                isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
              }`
            }
          >
            {icon}
            <span>{t(label)}</span>
          </NavLink>
        ))}

        {/* Journal Entries Dropdown */}
        <button
          onClick={() => setIsJournalOpen(!isJournalOpen)}
          className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <ClipboardList size={16} />
            <span>{t("Journal Entries")}</span>
          </div>
          {isJournalOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {isJournalOpen && (
          <div className="ml-6 flex flex-col gap-1">
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <span>{t("Entries")}</span>
            </NavLink>
            <NavLink
              to="/ledger"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <span>{t("General Ledger")}</span>
            </NavLink>
            <NavLink
              to="/trial-balance"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <FileText size={14} />
              {t("Trial Balance")}
            </NavLink>
            <NavLink
              to="/balance-sheet"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <Calendar size={14} />
              {t("Balance Sheet")}
            </NavLink>
          </div>
        )}


        {/* Accounts Tree Dropdown */}
        <button
          onClick={() => setIsAccountsOpen(!isAccountsOpen)}
          className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-200 hover:text-black transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>{t("Accounts Tree")}</span>
          </div>
          {isAccountsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {isAccountsOpen && (
          <div className="ml-6 flex flex-col gap-1">
            <NavLink
              to="/accounts/accounts"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <ClipboardList size={14} />
              {t("Accounts")}
            </NavLink>
            <NavLink
              to="/accounts/groups"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <Users size={14} />
              {t("Account Groups")}
            </NavLink>
            <NavLink
              to="/accounts/types"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1 rounded text-sm ${
                  isActive ? "bg-blue-600 text-white font-semibold" : "hover:bg-gray-200 hover:text-black"
                }`
              }
            >
              <BarChart2 size={14} />
              {t("Account Types")}
            </NavLink>
          </div>
        )}
      </nav>
    </aside>
  );
}
