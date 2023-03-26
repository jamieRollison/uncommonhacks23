import "./home.css";
import HomeLoad from "../../components/HomeLoad";
import Nav from "../../components/Nav";
// import AnimatedEnvelope from './components/AnimatedEnvelope'

function Home() {
  return (
  <>
    <Nav />
    <div className="flex flex-col items-center">
      <HomeLoad />
    </div>
    </>
  );
}

export default Home;
