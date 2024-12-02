import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <main>
      <Header />

      <Search />
      <SpeedInsights />
      <Analytics />
    </main>
  )
}