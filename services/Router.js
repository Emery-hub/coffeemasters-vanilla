const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = a.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // check the initial URL
    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
  },
};

export default Router;
