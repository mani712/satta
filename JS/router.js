

// Export both functions
export function navigateTo(event, path) {
  if (event) event.preventDefault();
  window.history.pushState({}, "", path);
  router(); // call router after changing URL
}

export function router() {
  const routes = {
    "/admin": "./../html/admin.html",
    "/table": "./../html/table.html"
  };


  const path = window.location.pathname;
  
  if (path === "/") {
    return;
  }

  getHtml(routes[path]);

  const route = routes[path] || "index.html"; // default
  return route;
}

function getHtml(path) {
  console.log(path, "path");

}

