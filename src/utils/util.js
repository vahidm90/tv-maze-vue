export const UTIL = {
  sanitizeSearchTerm: (input) => {
    return input.replace(/[^\w\s]/g, "").trim();
  },
  groupShowsByGenre: (shows) => {
    if (!shows.length) return {};
    const listByGenre = { Miscellaneous: [] };
    shows.forEach((show) => {
      if (show.genres.length)
        show.genres.forEach(
          (genre) =>
            (listByGenre[genre] = [...(listByGenre[genre] ?? []), show])
        );
      else listByGenre.Miscellaneous.push(show);
    });
    return listByGenre;
  },
};
