export const links = [
  {
    title: "Browse",
    name: "browse",
    to: "/browse",
    requiresLogin: false,
    alwaysShow: true,
  },
  {
    title: "Host",
    name: "host",
    to: "/stores",
    requiresLogin: false,
    alwaysShow: true,
  },
  {
    title: "Saved items",
    name: "saved",
    to: "/saved",
    requiresLogin: true,
    alwaysShow: true,
  },
  {
    title: "Login/Sign up",
    name: "login",
    to: "/login",
    requiresLogin: false,
    alwaysShow: false,
  },
  {
    title: "Account",
    name: "account",
    to: "/account",
    requiresLogin: true,
    alwaysShow: false,
  },
  {
    title: "Log out",
    name: "logout",
    to: "/",
    requiresLogin: true,
    alwaysShow: false,
  },
];
