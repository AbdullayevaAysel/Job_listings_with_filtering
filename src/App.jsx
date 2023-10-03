import "./App.css"
import { bgHeaderDesktop, bgHeaderMobile } from "./assets"
import CardList from "./components/CardList"

function App() {
  return (
    <div className="min-h-screen bg-[var(--Light-Grayish-Cyan-Background)]">
      <header className="w-full bg-[var(--Desaturated-Dark-Cyan)]">
        <img className="w-full h-[150px] hidden md:block object-cover relative z-[1]" src={bgHeaderDesktop} alt="" />
        <img className="w-full block md:hidden object-cover relative z-[1]" src={bgHeaderMobile} alt="" />
      </header>
      <main className="py-12 w-full px-5  md:w-[80%] md:mx-auto">
        <CardList />
      </main>
    </div>
  )
}

export default App
