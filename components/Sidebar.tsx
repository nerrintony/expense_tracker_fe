import Link from 'next/link';

const menu = [
  { name: 'Dashboard', path: '/' },
  { name: 'Expenses', path: '/expense' },
  // { name: 'Reports', path: '/reports' },
  // { name: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <nav>
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
