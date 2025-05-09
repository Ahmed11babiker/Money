// ✅ المرحلة الأولى: الهيكل الأساسي للمشروع

// import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import './index.css';

// // ✅ استيراد المكونات من المجلدات الجديدة
// import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';
// import Placeholder from './components/Placeholder';

// // ✅ استيراد الصفحات
// import Dashboard from './pages/Dashboard';
// import JournalEntries from './pages/JournalEntries';
// import AccountsTree from './pages/AccountsTree';
// import Reports from './pages/Reports';
// import FiscalYears from './pages/FiscalYears';
// import Login from './pages/Login';
// import ForgotPassword from './pages/ForgotPassword';
// import TrialBalance from './pages/TrialBalance';
// import BalanceSheet from './pages/BalanceSheet';

// export default function App() {
//   const [lang, setLang] = useState('ar');
//   const [username, setUsername] = useState('');
//   const toggleLang = () => {
//     setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
//   };
//   // const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');
//   // const [username, setUsername] = useState('');
//   return (
//     <Router>
//          <Routes>
//          <Route path="/login" element={<Login lang={lang} setUsername={setUsername} />} />
//           <Route path="/forgot-password" element={<ForgotPassword lang={lang} />} />

//         {username ? (
//           <>
//             <Route path="/" element={<Dashboard lang={lang} />} />
//             <Route path="/journal" element={<JournalEntries lang={lang} />} />
//             <Route path="/accounts" element={<AccountsTree lang={lang} />} />
//             <Route path="/reports" element={<Reports lang={lang} />} />
//             <Route path="/fiscal-years" element={<FiscalYears lang={lang} />} />
//             <Route path="/trial-balance" element={<TrialBalance lang={lang} />} />
//             <Route path="/balance-sheet" element={<BalanceSheet lang={lang} />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import JournalEntries from './pages/Jourrnal/JournalEntries';
import GeneralLedger from './pages/Jourrnal/GeneralLedger';
import CostCenters from './pages/costCenters/CostCenters';
import JournalHeader from './pages/Jourrnal/JournalHeader';
import AccountsTree from './pages/accounts/AccountsTree';
import Reports from './pages/reports/Reports';
import FiscalYears from './pages/fiscal-years/FiscalYears';
import TrialBalance from './pages/Jourrnal/TrialBalance';
import BalanceSheet from './pages/Jourrnal/BalanceSheet';
import AccountsPage from './pages/accounts/AccountsPage';
import GroupsPage from './pages/accounts/GroupPage';
import TypesPage from './pages/accounts/TypePage';
import BranchPage from './pages/barnchs/BranchPage';
import Currencies from './pages/Currencies/Currencies';
export default function App() {
  const [lang, setLang] = useState('ar');
  const [username, setUsername] = useState('');

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login lang={lang} setUsername={setUsername} />} />
        <Route path="/forgot-password" element={<ForgotPassword lang={lang} />} />

        {username ? (
          <Route path="/" element={<DashboardLayout lang={lang} toggleLang={toggleLang} username={username} />}
          >
            <Route path='/' element={<Dashboard lang={lang} />} />
            <Route path="/journal" element={<JournalEntries lang={lang} />} />
            <Route path="/accounts" element={<AccountsTree lang={lang} />} />
            <Route path="/accounts/accounts" element={<AccountsPage />} />
            <Route path="/accounts/groups" element={<GroupsPage />} />
            <Route path="/accounts/types" element={<TypesPage />} />
            <Route path="/branch" element={<BranchPage />} />
            <Route path="/ledger" element={< GeneralLedger/>} />
            <Route path="/Currency" element={<Currencies />} />
            <Route path="/costcenter" element={<CostCenters />} />
            <Route path="/reports" element={<Reports lang={lang} />} />
            <Route path="/fiscal-years" element={<FiscalYears lang={lang} />} />
            <Route path="/trial-balance" element={<TrialBalance lang={lang} />} />
            <Route path="/balance-sheet" element={<BalanceSheet lang={lang} />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}








// // ✅ المرحلة الأولى: الهيكل الأساسي للمشروع

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import './index.css';

// // ✅ استيراد المكونات من المجلدات الجديدة
// import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';
// import Placeholder from './components/Placeholder';

// // ✅ استيراد الصفحات (لاحقًا يمكن بناءها كاملة)
// import Dashboard from './pages/Dashboard';
// import JournalEntries from './pages/JournalEntries';
// import AccountsTree from './pages/AccountsTree';
// import Reports from './pages/Reports';
// import FiscalYears from './pages/FiscalYears';
// import Login from './pages/Login';
// import ForgotPassword from './pages/ForgotPassword';
// import TrialBalance from './pages/TrialBalance';
// import BalanceSheet from './pages/BalanceSheet';

// export default function App() {
//   const [lang, setLang] = useState('ar');
//   const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar toggleLang={toggleLang} lang={lang} />
//         <div className="flex-1">
//           <Topbar lang={lang} />
//           <Routes>
//             <Route path="/" element={<Dashboard lang={lang} />} />
//             <Route path="/journal" element={<JournalEntries lang={lang} />} />
//             <Route path="/accounts" element={<AccountsTree lang={lang} />} />
//             <Route path="/reports" element={<Reports lang={lang} />} />
//             <Route path="/fiscal-years" element={<FiscalYears lang={lang} />} />
//             <Route path="/login" element={<Login lang={lang} />} />
//             <Route path="/forgot-password" element={<ForgotPassword lang={lang} />} />
//             <Route path="/trial-balance" element={<TrialBalance lang={lang} />} />
//             <Route path="/balance-sheet" element={<BalanceSheet lang={lang} />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
