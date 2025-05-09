import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BranchPage() {
  const { t } = useTranslation();
  const [branch, setBranch] = useState({
    name: '',
    code: '',
    address: '',
    phone: '',
  });
  const [branches, setBranches] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!branch.name || !branch.code) return;

    if (editIndex !== null) {
      const updated = [...branches];
      updated[editIndex] = branch;
      setBranches(updated);
      setEditIndex(null);
    } else {
      setBranches([...branches, branch]);
    }

    setBranch({ name: '', code: '', address: '', phone: '' });
  };

  const handleEdit = (index) => {
    setBranch(branches[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setBranches(branches.filter((_, i) => i !== index));
    if (editIndex === index) {
      setBranch({ name: '', code: '', address: '', phone: '' });
      setEditIndex(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-semibold mb-4">{t('Add Branch')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">{t('Branch Name')}</label>
              <input
                type="text"
                name="name"
                value={branch.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">{t('Branch Code')}</label>
              <input
                type="text"
                name="code"
                value={branch.code}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">{t('Address')}</label>
              <input
                type="text"
                name="address"
                value={branch.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">{t('Phone')}</label>
              <input
                type="text"
                name="phone"
                value={branch.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editIndex !== null ? t('Update') : t('Save')}
          </button>
        </form>
      </div>

      {/* ✅ جدول عرض الفروع */}
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-3">{t('Branch List')}</h2>
        <table className="w-full text-right border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">{t('Branch Name')}</th>
              <th className="p-2 border">{t('Branch Code')}</th>
              <th className="p-2 border">{t('Address')}</th>
              <th className="p-2 border">{t('Phone')}</th>
              <th className="p-2 border">{t('Actions')}</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((b, i) => (
              <tr key={i} className="border-t">
                <td className="p-2 border">{b.name}</td>
                <td className="p-2 border">{b.code}</td>
                <td className="p-2 border">{b.address}</td>
                <td className="p-2 border">{b.phone}</td>
                <td className="p-2 border space-x-2">
                  <button onClick={() => handleEdit(i)} className="text-blue-600 hover:underline">
                    {t('Edit')}
                  </button>
                  <button onClick={() => handleDelete(i)} className="text-red-600 hover:underline">
                    {t('Delete')}
                  </button>
                </td>
              </tr>
            ))}
            {branches.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  {t('No branches added yet')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
