import './App.css';
import { Grommet, Main } from 'grommet';
import Cards from "./components/Cards";
import Title from "./components/Title";
import FooterBar from "./components/Footer";

function App() {
  return (
    <Grommet className="App">  
        <Title />
        <Main>
        <Cards />
        </Main>
        <FooterBar />
    </Grommet>
  );
}

export default App;
