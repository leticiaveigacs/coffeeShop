const routes = [
  {
    path: "/",
    element: <PrivateRoutes />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <App />
          </Layout>
        ),
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

const router = createBrowserRouter(routes);
