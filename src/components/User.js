function getUserDetails() {
  if (localStorage.getItem("key")) {
    return {
      isAuthenticated: true,
      user: localStorage.getItem("key"),
    };
  }
  return {
    isAuthenticated: false,
    user: null,
  };
}

fetcher
  .get("https://django-cloudrun-lsmeeds47a-uc.a.run.app/location/")
  .then(function (response) {
    console.log(response);
  });
