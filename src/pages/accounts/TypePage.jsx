// 📄 src/pages/TypesPage.jsx
import { useState } from "react";

export default function TypesPage() {
  const [form, setForm] = useState({ code: "", name: "", category: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Type Submitted:", form);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إضافة نوع حساب</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow grid gap-4">
        <input name="code" value={form.code} onChange={handleChange} placeholder="الكود" className="border p-2 rounded" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="اسم النوع" className="border p-2 rounded" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="التصنيف" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          حفظ النوع
        </button>
      </form>
    </div>
  );
}
