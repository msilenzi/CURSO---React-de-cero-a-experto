async function getGifs(category) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NER01h608GFGg7bvFRTw4nHmyiPHLSfJ&limit=18&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  return data.map((img) => ({
    id: img.id,
    title: sanitizeGifTitle(img.title),
    image: {
      url: img.images.downsized_medium.url,
      height: img.images.downsized_medium.height,
      width: img.images.downsized_medium.width,
    },
    user:
      img.user != null
        ? {
            username: img.user.username,
            avatar_url: img.user.avatar_url,
            profile_url: img.user.profile_url,
          }
        : null,
  }))
}

function sanitizeGifTitle(title) {
  return title.substring(0, title.indexOf('GIF')).trim()
}

export { getGifs }
