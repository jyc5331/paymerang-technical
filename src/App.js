import './App.css';
import { Grommet, Main } from 'grommet';
import Cards from "./components/Cards";
import Title from "./components/Title";
import FooterBar from "./components/Footer";
import SearchBar from "./components/SearchBar";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Grommet className="App">  
        <Title />
        <SearchBar />
        <Main>
        <Cards />
        </Main>
        <FooterBar />
        <LogIn />
    </Grommet>
  );
}

export default App;
