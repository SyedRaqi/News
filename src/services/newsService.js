import { getStoriesByCategory, stories } from '../data/news'

const apiUrl = import.meta.env.VITE_NEWS_API_URL
const gnewsApiKey = import.meta.env.VITE_GNEWS_API_KEY
const gnewsUrl = gnewsApiKey ? `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&apikey=${gnewsApiKey}` : ''

const normalizeStory = (article, index) => ({
  id: article.id || `live-${index}-${Date.now()}`,
  category: article.category || 'World',
  title: article.title || article.name || 'Untitled story',
  description: article.description || article.content || 'Read the latest update from Daily View.',
  image: article.image || article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
  date: article.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  time: article.time || 'Just now',
  readTime: article.readTime || '4 min read',
  author: article.author || 'Daily View Editorial',
})

export const fetchLatestNews = async ({ category } = {}) => {
  const endpoint = gnewsUrl || apiUrl
  if (!endpoint) return category ? getStoriesByCategory(category) : stories

  try {
    const response = await fetch(`${endpoint}${gnewsUrl || !category ? '' : `?category=${encodeURIComponent(category)}`}`)
    if (!response.ok) throw new Error(`News request failed with ${response.status}`)
    const payload = await response.json()
    const articles = Array.isArray(payload) ? payload : payload.articles || payload.data || []
    return articles.map(normalizeStory)
  } catch (error) {
    console.warn('Live news unavailable; using local stories instead.', error)
    return category ? getStoriesByCategory(category) : stories
  }
}

export const fetchStories = async ({ category } = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 120))
  return fetchLatestNews({ category })
}

export const searchStories = async (query) => {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return []
  return stories.filter((story) => `${story.title} ${story.category} ${story.description}`.toLowerCase().includes(normalizedQuery))
}
