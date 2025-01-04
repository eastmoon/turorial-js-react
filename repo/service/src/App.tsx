import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './service/hero';
import { HeroService } from './service/hero.service';

function App() {
  // Declare variable
  const [count, setCount] = useState(0)
  const [heroes, setHeroes] = useState([])
  const heroService: HeroService = new HeroService()

  // Execute effect after render
  useEffect(() => {
      heroService
        .getHeroes()
        .subscribe(lists => setHeroes(lists));
  })

  // Component render
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <ul className="heros">
        {heroes.map((data,i) => (
          <li key={i}>{data.id}, {data.name}</li>
        ))}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
