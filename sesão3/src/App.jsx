import Hero from "./assets/hero.png"

function App() {

  return (
    <div className="App">
        <h1>Avançado em React</h1>
        
        <div>
            <img src="favicon.svg" alt="icone" />
        </div>
        <div>
            <img src={Hero} alt="" />
        </div>
    </div>
  )
}

export default App
