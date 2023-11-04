const herokuBaseUrl = "https://fitlit-f2b12d8e6fd4.herokuapp.com";

function fetchUsers() {
  return fetch(`${herokuBaseUrl}/api/v1/users`).then((response) =>
    response.json()
  );
}

function fetchHydration() {
  return fetch(`${herokuBaseUrl}/api/v1/hydration`).then((response) =>
    response.json()
  );
}

function fetchSleep() {
  return fetch(`${herokuBaseUrl}/api/v1/sleep`).then((response) =>
    response.json()
  );
}

function fetchActivity() {
  return fetch(`${herokuBaseUrl}/api/v1/activity`).then((response) =>
    response.json()
  );
}

export { fetchUsers, fetchHydration, fetchSleep, fetchActivity };

// map fetch function

function fetchMap() {
  return fetch(`${herokuBaseUrl}/api/v1/users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

export { fetchMap };
