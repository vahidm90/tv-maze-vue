const baseUrl = "https://api.tvmaze.com";
export const getShowDetails = (showId) =>
  fetch(`${baseUrl}/shows/${showId}`).then((response) => response.json());

export const getShowList = () =>
  fetch(`${baseUrl}/shows`).then((response) => response.json());

export const searchShows = (searchTerm) =>
  fetch(`${baseUrl}/search/shows?q=${searchTerm}`).then((response) =>
    response.json()
  );
