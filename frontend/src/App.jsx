import { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setMonsters(data));
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value)
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search Monster'
        handleChange={handleChange}
      />
      {
        monsters && <CardList monsters={filteredMonsters} />
      }
    </div>
  );
}

export default App;
