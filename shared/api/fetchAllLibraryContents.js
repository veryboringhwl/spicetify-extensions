async function fetchLibraryContents() {
  const response = await Spicetify.Platform.LibraryAPI.getContents({
    offset: 0,
    limit: 10000000,
    flattenTree: true,
  });

  return response.items;
}

export default fetchLibraryContents;
