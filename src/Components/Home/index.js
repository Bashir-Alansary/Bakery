import Details from './../Details';
import Oven from './../Oven';
import Special from './../Special';
import Team from './../Team';
import Header from './../Header';

function Home() {

  return (
    <div className="App">
      <Header />
      <Details />
      <Oven />
      <Special />
      <Team />
    </div>
  );
}

export default Home;
