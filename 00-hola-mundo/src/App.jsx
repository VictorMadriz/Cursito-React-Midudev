import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="kikobeats" isFollowing={false}>
        <h4>Kiko Beats</h4>
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev" isFollowing={true}>
        <h4>Miguel Ángel Durán</h4>
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk" isFollowing={true}>
        <h4>Elon Musk</h4>
      </TwitterFollowCard>

      <TwitterFollowCard  isFollowing={false}>
        <h4>React</h4>
      </TwitterFollowCard>
    </section>
  )
}

export default App
