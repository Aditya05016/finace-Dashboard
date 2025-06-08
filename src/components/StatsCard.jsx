const Statscard=({ title, amount, icon, bgColor }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md text-white ${bgColor}`}>
      <div className="text-sm">{title}</div>
      <div className="text-2xl font-bold mt-2">{amount}</div>
      <div className="mt-3">{icon}</div>
    </div>
  );
};

export default Statscard;
