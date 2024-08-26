import Header from "../components/(dashboard)/layout/header";
import Sidebar from "../components/(site)/layout/sidebar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="flex flex-row">
        <Sidebar/>
        <div className="w-full">
        <Header/>
        {children}
       </div>
        </div>
       </body>
    </html>
  );
}
