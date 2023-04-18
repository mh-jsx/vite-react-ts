import { Link, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "components/layouts/layout";

import ErrorBoundary from "routes/error-boundary";
import ProtectedRoutes from "routes/protected-routes";

import AHome from "pages/Home";
import NotFound from "pages/NotFound";

import WithSuspense from "./with-suspense";

function Router() {
  const authRoutes = ProtectedRoutes();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route
          path="/"
          element={<AHome />}
          handle={{
            crumb: () => <Link to="/">Home</Link>,
          }}
        />

        <Route path="/not-found" element={<NotFound />} />

        {/* private / authenticated routes */}
        <Route>{authRoutes}</Route>

        {/* Unknown path redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default Router;
