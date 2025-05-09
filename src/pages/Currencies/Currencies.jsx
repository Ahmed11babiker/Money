// 📄 src/pages/Currencies.jsx
import { useState } from "react";

export default function Currencies() {
  const [currencies, setCurrencies] = useState([
    { name: "الدولار الأمريكي", code: "USD", symbol: "$", rate: 1.0 },
    { name: "اليورو", code: "EUR", symbol: "€", rate: 0.92 }
  ]);

  const [form, setForm] = useState({ name: "", code: "", symbol: "", rate: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddCurrency = (e) => {
    e.preventDefault();
    if (!form.name || !form.code || !form.symbol || !form.rate) return;
    setCurrencies([...currencies, { ...form, rate: parseFloat(form.rate) }]);
    setForm({ name: "", code: "", symbol: "", rate: "" });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">💱 العملات</h2>

      {/* نموذج إضافة */}
      <form onSubmit={handleAddCurrency} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="اسم العملة"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="code"
          placeholder="الكود"
          value={form.code}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="symbol"
          placeholder="رمز العملة"
          value={form.symbol}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="rate"
          placeholder="المعدل"
          step="0.01"
          value={form.rate}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-full md:col-span-1">
          إضافة
        </button>
      </form>

      {/* جدول العملات */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-right rtl text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">اسم العملة</th>
              <th className="p-2">الكود</th>
              <th className="p-2">الرمز</th>
              <th className="p-2">المعدل</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{currency.name}</td>
                <td className="p-2">{currency.code}</td>
                <td className="p-2">{currency.symbol}</td>
                <td className="p-2">{currency.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
