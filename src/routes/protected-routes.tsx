import { Navigate, Outlet, Route } from "react-router-dom";

function ProtectedRoot() {
  const isAuth = false;
  if (!isAuth) {
    return <Navigate to={`/?fallback=${window.location.pathname}`} replace />;
  }
  return <Outlet />;
}

function ProtectedRoutes() {
  return (
    <Route path="/" element={<ProtectedRoot />}>
      <Route path="/protected-route" element={<span>home</span>} />
    </Route>
  );
}

export default ProtectedRoutes;
