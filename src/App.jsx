import "./App.css"
import { bgHeaderDesktop } from "./assets"
import CardList from "./components/CardList"

function App() {
  return (
    <div className="min-h-screen bg-[var(--Light-Grayish-Cyan-Background)]">
      <header className="w-full bg-[var(--Desaturated-Dark-Cyan)]">
        <img className="w-full object-cover relative z-[1]" src={bgHeaderDesktop} alt="" />
      </header>
      <main className="py-12 w-[80%] mx-auto">
        <CardList />
      </main>
    </div>
  )
}

export default App
