import { useEffect, useState } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component';

const App = () => {

  const [monsters, setMonsters] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setMonsters(data);
      })
  }, []);

  return (
    <div className="app">
      {
        monsters && <CardList monsters={monsters} />
      }
    </div>
  )
}

export default App
