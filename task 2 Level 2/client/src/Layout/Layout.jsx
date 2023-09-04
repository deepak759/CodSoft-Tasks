import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="py-4 px-4  flex flex-col min-h-screen max-w-7xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
