import './App.css';
import Head from './Components/Head/Head';
import Nav from './Components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './Components/Featured/Featured';
import BlockChain from './Components/BlockChain/BlockChain';

function App() {
  return (
    <>
      <section className="top-nav">
        <Nav></Nav>
      </section>
      <section className="hero-sec">
        <Head></Head>
      </section>
      <section className="featu-sec">
        <Featured></Featured>
      </section>
      <section>
        <BlockChain></BlockChain>
        
      </section>
    </>
  );
}




export default App;
