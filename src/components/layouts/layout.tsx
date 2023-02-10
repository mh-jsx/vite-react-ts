import { Outlet } from "react-router-dom";

import WithSuspense from "routes/with-suspense";

import Header from "./header";

function Layout() {
  return (
    <>
      <Header />

      <WithSuspense>
        <Outlet />
      </WithSuspense>
    </>
  );
}

export default Layout;
