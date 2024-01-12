import { IconSearch, IconShoppingCart } from "@tabler/icons-react";

export default function MainLayout({ children }) {
  return (
    <div className="p-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex flex-row gap-4">
          <input
            className="p-2 focus:outline-none border-2 rounded-lg border-slate-100"
            type="text"
            placeholder="Search.."
          />
          <button
            //   onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            <IconSearch />
          </button>
          <button className="bg-orange-500 hover:bg-blue-700 text-white px-4 rounded-lg">
            <IconShoppingCart />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
