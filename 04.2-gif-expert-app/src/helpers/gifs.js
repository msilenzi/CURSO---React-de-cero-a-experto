const API_URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = 'NER01h608GFGg7bvFRTw4nHmyiPHLSfJ'
const LIMIT = 18

async function fetchGifs(category) {
  const url = `${API_URL}?api_key=${API_KEY}&limit=${LIMIT}&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  return data.map(transformData)
}

function transformData(img) {
  return {
    id: img.id,
    title: sanitizeGifTitle(img.title),
    image: extractImageData(img.images.downsized_medium),
    user: extractUserData(img.user),
  }
}

function sanitizeGifTitle(title) {
  return title.substring(0, title.indexOf('GIF')).trim()
}

function extractImageData({ url, height, width }) {
  return { url, height: parseInt(height, 10), width: parseInt(width, 10) }
}

function extractUserData(user) {
  if (!user) return null
  return {
    username: user.username,
    avatar_url: user.avatar_url,
    profile_url: user.profile_url,
  }
}

export { fetchGifs }
