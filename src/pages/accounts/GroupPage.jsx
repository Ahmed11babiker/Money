// 📄 src/pages/GroupsPage.jsx
import { useState } from "react";

export default function GroupsPage() {
  const [form, setForm] = useState({ code: "", name: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Group Submitted:", form);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إضافة مجموعة حساب</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow grid gap-4">
        <input name="code" value={form.code} onChange={handleChange} placeholder="الكود" className="border p-2 rounded" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="اسم المجموعة" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          حفظ المجموعة
        </button>
      </form>
    </div>
  );
}

