export default function Navbar() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Expense Tracker</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, User</span>
        <button className="px-3 py-1 text-sm rounded bg-red-500 text-white">Logout</button>
      </div>
    </header>
  );
}
