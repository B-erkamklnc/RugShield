const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/tokens"],
    exact: true,
    component: "Tokens",
  },
  {
    path: ["/creators"],
    exact: true,
    component: "Creator",
  },
];

export default routes;
