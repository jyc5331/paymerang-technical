import './App.css';
import { Grommet, Main } from 'grommet';
import Cards from "./components/Cards";
// import Title from "./components/Title";
// import FooterBar from "./components/Footer";
// import SearchBar from "./components/SearchBar";


function App() {
  return (
    <Grommet className="App">
        <Main>
        <Cards />
        </Main>
    </Grommet>
  );
}

export default App;
