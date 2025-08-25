const LibraryAPI =
  Spicetify.Platform.LibraryAPI || Spicetify.Platform.Registry.resolve(Symbol.for("LibraryAPI"));

export async function fetchAllLibraryContents(): Promise<object[]> {
  const response: { items: object[] } = (await LibraryAPI.getContents({
    offset: 0,
    limit: 10000000,
    flattenTree: true,
  })) as { items: object[] };

  return response.items;
}
