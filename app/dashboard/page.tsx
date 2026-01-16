'use client';

import AddExpenseDrawer from '@/components/AddExpenseDrawer/AddExpenseDrawer';
import { SummaryCard } from '@/components/SummaryCard/SummaryCard';
import { useState } from 'react';

/* ---------------- Mock Data ---------------- */

const expenses = [
  { id: 1, title: 'Groceries', category: 'Food', amount: 1200, date: 'Today' },
  { id: 2, title: 'Uber Ride', category: 'Transport', amount: 350, date: 'Yesterday' },
  { id: 3, title: 'Electricity Bill', category: 'Utilities', amount: 2400, date: '2 days ago' },
  { id: 4, title: 'Coffee', category: 'Food', amount: 180, date: '3 days ago' },
];

const categories = [
  { name: 'Food', amount: 6200, percent: 40, color: 'bg-green-500' },
  { name: 'Transport', amount: 2800, percent: 18, color: 'bg-blue-500' },
  { name: 'Utilities', amount: 4100, percent: 26, color: 'bg-purple-500' },
  { name: 'Entertainment', amount: 2350, percent: 16, color: 'bg-orange-500' },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>
            + Add Expense
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            title="Total Spent"
            value="₹18,450"
            subText="This month"
            gradient="from-red-50 to-orange-50"
            valueColor="text-red-600"
          />
          <SummaryCard
            title="Average / Day"
            value="₹615"
            subText="Last 30 days"
            gradient="from-blue-50 to-indigo-50"
            valueColor="text-blue-600"
          />
          <SummaryCard
            title="Top Category"
            value="Food"
            subText="₹6,200"
            gradient="from-green-50 to-emerald-50"
            valueColor="text-green-600"
          />
          <SummaryCard
            title="Transactions"
            value="42"
            subText="This month"
            gradient="from-purple-50 to-fuchsia-50"
            valueColor="text-purple-600"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Expenses */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow border-t-4 border-blue-600">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Recent Expenses</h3>
            </div>

            <div className="divide-y">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex justify-between items-center p-4 hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-800">{expense.title}</p>
                    <p className="text-sm text-gray-500">
                      {expense.category} • {expense.date}
                    </p>
                  </div>
                  <p className="font-semibold text-red-600">-₹{expense.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-lg shadow p-4 border-t-4 border-indigo-600">
            <h3 className="font-semibold text-gray-800 mb-4">Category Breakdown</h3>

            <div className="space-y-4">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{cat.name}</span>
                    <span className="font-medium">₹{cat.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div className={`h-2 rounded ${cat.color}`} style={{ width: `${cat.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AddExpenseDrawer isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
