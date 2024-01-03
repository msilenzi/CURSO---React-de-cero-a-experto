async function getGifs(category) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NER01h608GFGg7bvFRTw4nHmyiPHLSfJ&limit=10&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
}

export { getGifs }
