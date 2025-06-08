export const transactions = [
  { date: "2025-06-01", description: "Grocery", category: "Food", amount: -1500 },
  { date: "2025-06-03", description: "Salary", category: "Income", amount: 80000 },
  { date: "2025-06-05", description: "Electricity Bill", category: "Utilities", amount: -2500 },
];

export const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Income",
      data: [5000, 7000, 6000, 8000],
      backgroundColor: "rgba(34,197,94,0.5)",
    },
    {
      label: "Expense",
      data: [3000, 2000, 4000, 1000],
      backgroundColor: "rgba(239,68,68,0.5)",
    },
  ],
};
