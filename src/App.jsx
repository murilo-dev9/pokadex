import styles from './App.module.css';
import Card from './components/card/card';


function App() {
  return (
    <div>
      <header className={styles.header}> 
        <h1>Pokadex</h1>
      </header>
      <div>
        <Card id={3} direction='front_default' />
      </div>
    </div>
  );
}

export default App;
