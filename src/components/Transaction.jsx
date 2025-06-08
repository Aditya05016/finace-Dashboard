// src/components/TransactionsTable.jsx
const TransactionsTable = ({ transactions }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4 my-6">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="py-2 px-4">{txn.date}</td>
              <td className="py-2 px-4">{txn.description}</td>
              <td className="py-2 px-4">{txn.category}</td>
              <td className={`py-2 px-4 text-right ${txn.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                ₹{Math.abs(txn.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
