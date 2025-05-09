// 📁 src/components/FiscalYearForm.jsx
import { useState } from "react";

export default function FiscalYearForm({ onSave }) {
  const [yearName, setYearName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    if (!yearName || !startDate || !endDate) {
      alert("يرجى ملء جميع الحقول.");
      return;
    }
    onSave({ yearName, startDate, endDate });
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-bold mb-4">إضافة سنة مالية جديدة</h2>

      <div className="mb-4">
        <label htmlFor="yearName" className="block mb-2">اسم السنة المالية</label>
        <input
          type="text"
          id="yearName"
          value={yearName}
          onChange={(e) => setYearName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block mb-2">تاريخ البداية</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block mb-2">تاريخ النهاية</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded">
          حفظ
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded">
          إلغاء
        </button>
      </div>
    </div>
  );
}
