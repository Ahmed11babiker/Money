import { useState } from "react";

export default function JournalEntryForm({ lines, setLines }) {
  const [input, setInput] = useState({ journalBook: '', account: '', description: '', costCenter: '', debit: '', credit: '' });
  const [editIndex, setEditIndex] = useState(null); // لتحديد السطر الذي يتم تعديله

  const handleChange = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleAdd = e => {
    e.preventDefault();
    if (!input.journalBook || !input.account) return;
    setLines([...lines, { ...input }]);
    setInput({ journalBook: '', account: '', description: '', costCenter: '', debit: '', credit: '' });
  };

  const handleDelete = index => {
    setLines(lines.filter((_, i) => i !== index));
  };

  const startEdit = index => {
    setEditIndex(index);
    setInput(lines[index]);  // تعبئة الحقول بالقيم الموجودة في السطر المحدد
  };

  const handleSave = () => {
    const updatedLines = [...lines];
    updatedLines[editIndex] = { ...input }; // تحديث السطر المعدل
    setLines(updatedLines);
    setEditIndex(null); // إلغاء وضع التعديل
    setInput({ journalBook: '', account: '', description: '', costCenter: '', debit: '', credit: '' }); // إعادة تعيين الحقول
  };

  const cancelEdit = () => {
    setEditIndex(null); // إلغاء وضع التعديل
    setInput({ journalBook: '', account: '', description: '', costCenter: '', debit: '', credit: '' }); // إعادة تعيين الحقول
  };

  return (
    <section className="bg-white p-4 shadow rounded space-y-4">
      <h3 className="font-semibold mb-2">إدخال قيود</h3>
      <form onSubmit={handleAdd} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <input
            name="journalBook"
            value={input.journalBook}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="دفتر اليومية"
            required
          />
          <input
            name="account"
            value={input.account}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="الحساب"
            required
          />
          <input
            name="description"
            value={input.description}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="الوصف"
          />
          <input
            name="costCenter"
            value={input.costCenter}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="مركز التكلفة"
          />
          <input
            type="number"
            name="debit"
            value={input.debit}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="مدين"
          />
          <input
            type="number"
            name="credit"
            value={input.credit}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="دائن"
          />
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            إضافة سطر
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-4"
            >
              حفظ التعديل
            </button>
          )}
          {editIndex !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ml-4"
            >
              إلغاء التعديل
            </button>
          )}
        </div>
      </form>

      {lines.length > 0 && (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">#</th>
                <th className="border p-2">دفتر</th>
                <th className="border p-2">حساب</th>
                <th className="border p-2">الوصف</th>
                <th className="border p-2">مركز التكلفة</th>
                <th className="border p-2">مدين</th>
                <th className="border p-2">دائن</th>
                <th className="border p-2">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="odd:bg-white even:bg-gray-50">
                  <td className="border p-2 text-center">{idx + 1}</td>
                  <td className="border p-2">{line.journalBook}</td>
                  <td className="border p-2">{line.account}</td>
                  <td className="border p-2">{line.description}</td>
                  <td className="border p-2">{line.costCenter}</td>
                  <td className="border p-2">{line.debit}</td>
                  <td className="border p-2">{line.credit}</td>
                  <td className="border p-2">
                    <button onClick={() => startEdit(idx)} className="text-blue-600 hover:underline">تعديل</button>
                    <button onClick={() => handleDelete(idx)} className="text-red-600 hover:underline">حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
