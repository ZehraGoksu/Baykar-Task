import Layout from "./Layout";
import Collectible from "./components/Collectible";
import Comments from "./components/Comments";
import GrowYourCollection from "./components/GrowYourCollection";
import Maps from "./components/Maps";
import TheBestBox from "./components/TheBestBox";
import WhyJoin from "./components/WhyJoin";

function App() {
  return (
    <Layout>
      <Collectible/>
      <TheBestBox/>
      <WhyJoin/>
      <Comments/>
      <GrowYourCollection/>
      <Maps/>
    </Layout>
  );
}

export default App;
