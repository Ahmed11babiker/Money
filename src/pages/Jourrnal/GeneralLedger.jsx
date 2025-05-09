// 📁 src/pages/journal/GeneralLedger.jsx
import { useState } from "react";
import GeneralLedgerFilters from "../../components/journal/GeneralLedgerFilters";
import GeneralLedgerSummary from "../../components/journal/GeneralLedgerSummary";
import GeneralLedgerTable from "../../components/journal/GeneralLedgerTable";

export default function GeneralLedger() {
  const [filter, setFilter] = useState({ account: "", startDate: "", endDate: "" });
  const [entries, setEntries] = useState([]); // fetched or dummy data

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
    // TODO: fetch entries based on newFilter
    // Example dummy:
    setEntries([
      { id: 1, date: "2025-01-01", ref: "JV001", desc: "رصيد افتتاحي", debit: 0, credit: 0 },
      { id: 2, date: "2025-01-05", ref: "JV002", desc: "مبيعات", debit: 0, credit: 5000 },
      { id: 3, date: "2025-01-10", ref: "JV003", desc: "مشتريات", debit: 3000, credit: 0 }
    ]);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📖 دفتر الأستاذ</h2>
      <GeneralLedgerFilters onApply={handleFilter} />
      <GeneralLedgerSummary entries={entries} />
      <GeneralLedgerTable entries={entries} />
    </div>
  );
}