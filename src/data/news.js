export const categories = ['World', 'India', 'Technology', 'Business', 'Sports', 'Culture']

export const stories = [
  {
    id: 'quiet-revolution',
    category: 'Technology',
    title: 'The quiet revolution changing how we see the world',
    description: 'From machine intelligence to the tools in our pockets, a new era is arriving in smaller, stranger ways than we expected.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85',
    date: '25 September 2026', time: '09:42 PM', readTime: '5 min read', author: 'Daily View Editorial',
  },
  { id: 'city-after-rain', category: 'World', title: 'A city after the rain, and the question of what comes next', description: 'A visual dispatch from a changing coastline.', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80', date: '25 September 2026', time: '08:58 PM', readTime: '4 min read', author: 'Maya Sen' },
  { id: 'new-india', category: 'India', title: 'The new India is being built between the lines', description: 'The infrastructure story is also a story about ambition.', image: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1000&q=80', date: '25 September 2026', time: '08:31 PM', readTime: '6 min read', author: 'Arjun Rao' },
  { id: 'markets-reset', category: 'Business', title: 'Markets find a new rhythm after a restless summer', description: 'What investors are watching now.', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80', date: '25 September 2026', time: '07:46 PM', readTime: '3 min read', author: 'Nisha Kapoor' },
  { id: 'last-over', category: 'Sports', title: 'The last over that changed the mood of a nation', description: 'A match remembered in gestures, not just numbers.', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80', date: '25 September 2026', time: '06:22 PM', readTime: '4 min read', author: 'Kabir Malik' },
  { id: 'new-cinema', category: 'Culture', title: 'Cinema is finding its way back to the collective', description: 'Inside a new wave of ambitious, intimate films.', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80', date: '25 September 2026', time: '05:10 PM', readTime: '7 min read', author: 'Leena George' },
  { id: 'moon-archive', category: 'World', title: 'What the moon keeps in its archive', description: 'A new space race is also a race to remember.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=80', date: '24 September 2026', time: '10:15 PM', readTime: '8 min read', author: 'Ira Bose' },
]

export const liveUpdates = [
  ['10:42 PM', 'Major technology announcement reshapes the industry'],
  ['10:38 PM', 'Officials release new information on the coastal project'],
  ['10:31 PM', 'Latest updates emerge from the championship final'],
  ['10:18 PM', 'Markets close higher after a volatile session'],
]

export const getStory = (id) => stories.find((story) => story.id === id) || stories[0]
export const getStoriesByCategory = (category) => stories.filter((story) => story.category.toLowerCase() === category.toLowerCase())
