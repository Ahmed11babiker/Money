// 📄 src/pages/AccountsPage.jsx
import { useState } from "react";

export default function AccountsPage() {
  const [form, setForm] = useState({
    code: "",
    name: "",
    level: "",
    type: "",
    currency: "",
    branch: "",
    costCenter: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Submitted:", form);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إضافة حساب</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow"
      >
        <input name="code" value={form.code} onChange={handleChange} placeholder="الكود" className="border p-2 rounded" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="اسم الحساب" className="border p-2 rounded" />
        <input name="level" value={form.level} onChange={handleChange} placeholder="المستوى" className="border p-2 rounded" />
        <input name="type" value={form.type} onChange={handleChange} placeholder="نوع الحساب" className="border p-2 rounded" />
        <input name="currency" value={form.currency} onChange={handleChange} placeholder="العملة" className="border p-2 rounded" />
        <input name="branch" value={form.branch} onChange={handleChange} placeholder="الفرع" className="border p-2 rounded" />
        <input name="costCenter" value={form.costCenter} onChange={handleChange} placeholder="مركز التكلفة" className="border p-2 rounded" />
        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded">
          حفظ الحساب
        </button>
      </form>
    </div>
  );
}

