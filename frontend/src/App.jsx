import { useEffect, useState } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component';

const App = () => {

  const [names, setNames] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNames(data);
      })
  }, []);

  return (
    <div className="app">
      <CardList>
        {
          names && names.map((item) => (
            <h1 key={item.id}>{item.name}</h1>
          ))
        }
      </CardList>
    </div>
  )
}

export default App
