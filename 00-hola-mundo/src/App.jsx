import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard userName="kikobeats">
        <h4>Kiko Beats</h4>
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        <h4>Miguel Ángel Durán</h4>
      </TwitterFollowCard>

      <TwitterFollowCard userName="elonmusk">
        <h4>Elon Musk</h4>
      </TwitterFollowCard>

      <TwitterFollowCard userName="react">
        <h4>React</h4>
      </TwitterFollowCard>
    </section>
  )
}

export default App
