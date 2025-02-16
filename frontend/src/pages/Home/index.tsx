import { lazy } from "react";
import GuardianInfo from "../../components/FeatureBlock";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      
      <MiddleBlock
        title={"Welcome"}
        content={""}
      />
      <hr />
      <GuardianInfo/>
    </Container>
  );
};

export default Home;
