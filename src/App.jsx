import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

// Creates a routes array
const routes = [];

// Create array of all restricted routes
// eg: ['/dashboard', '/dashboard/:id']
const restricted = ["/dashboard"];

// Loop through all pages and add them to the routes array
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

// Create a router with the routes array
const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: restricted.includes(rest.path) ? (
      <ProtectedRoute>
        <Element />
      </ProtectedRoute>
    ) : (
      <Element />
    ),
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

// Add all routes within RouterProvider
function App() {
  return (
    <AuthProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>
  );
}

export default App;
