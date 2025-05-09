// 📁 src/pages/costCenters/CostCenters.jsx
import { useState } from 'react';

export default function CostCenters() {
  const [input, setInput] = useState({ name: '', code: '', description: '' });
  const [centers, setCenters] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // ← لتتبع السطر الجاري تعديله

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (!input.name || !input.code) return;

    if (editIndex !== null) {
      const updated = [...centers];
      updated[editIndex] = input;
      setCenters(updated);
      setEditIndex(null);
    } else {
      setCenters([...centers, input]);
    }

    setInput({ name: '', code: '', description: '' });
  };

  const handleEdit = (index) => {
    setInput(centers[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = centers.filter((_, i) => i !== index);
    setCenters(filtered);
    if (editIndex === index) {
      setInput({ name: '', code: '', description: '' });
      setEditIndex(null);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">مراكز التكلفة</h1>

      {/* ✅ نموذج الإدخال */}
      <form onSubmit={handleAddOrUpdate} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded shadow">
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="الاسم"
          className="border p-2 rounded"
        />
        <input
          name="code"
          value={input.code}
          onChange={handleChange}
          placeholder="الكود"
          className="border p-2 rounded"
        />
        <input
          name="description"
          value={input.description}
          onChange={handleChange}
          placeholder="الوصف"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-full md:col-span-1">
          {editIndex !== null ? 'تحديث' : 'إضافة'}
        </button>
      </form>

      {/* ✅ جدول عرض البيانات */}
      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="w-full text-right border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">الاسم</th>
              <th className="p-2 border">الكود</th>
              <th className="p-2 border">الوصف</th>
              <th className="p-2 border">التحكم</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, i) => (
              <tr key={i} className="border-t">
                <td className="p-2 border">{center.name}</td>
                <td className="p-2 border">{center.code}</td>
                <td className="p-2 border">{center.description}</td>
                <td className="p-2 border space-x-2">
                  <button onClick={() => handleEdit(i)} className="text-blue-600 hover:underline">تعديل</button>
                  <button onClick={() => handleDelete(i)} className="text-red-600 hover:underline">حذف</button>
                </td>
              </tr>
            ))}
            {centers.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  لا توجد مراكز مضافة بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
