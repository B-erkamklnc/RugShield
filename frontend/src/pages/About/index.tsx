import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const aboutdata = `<p>
        This project is an innovative security solution developed to protect your investors against the <b>rug pull</b> risk, 
        which is frequently encountered in the crypto world. A <b>rug pull</b> occurs when token owners suddenly withdraw liquidity, 
        causing losses for investors. This situation is especially common in new and small-scale projects, undermining investor confidence.
    </p>

    <p>
        To solve this problem, we have developed a system called <b>Rug Shield</b>. This system requires token owners to stake and lock 
        a certain amount of ETH to secure liquidity. If the token owner executes a rug pull, the locked ETH is proportionally 
        distributed to the investors. This way, instead of facing complete losses, investors can partially recover their losses.
    </p>

    <p>
        <b>Rug Shield</b> is not just a security measure but also a bridge that builds trust between investors and token owners. 
        While token owners demonstrate the seriousness of their projects, investors gain the opportunity to invest more securely.
    </p>

    <p>
        This project aims to enhance transparency and trust in the crypto ecosystem. With <b>Rug Shield</b>, you can secure your investments 
        and minimize the risk of rug pulls.
    </p>

    <h4>Why Rug Shield?</h4>
    <p><b>Secure Investment:</b> Investors are protected against rug pull risks.</p>
    <p><b>Reputation for Token Owners:</b> Token owners increase the credibility of their projects.</p>
    <p><b>Transparent Transactions:</b> All transactions are recorded on the blockchain, with no manipulation.</p>
    <p><b>Automatic Compensation:</b> In the event of a rug pull, investors receive automatic compensation.</p>

    <h4>Conclusion</h4>
    <p>
        <b>Rug Shield</b> provides a reliable investment environment in the crypto world. 
        It is a win-win solution for both token owners and investors. 🚀
    </p>`;
  return (
    <Container>
      <ScrollToTop />
      
      <p className="mt-2 text-gray-600 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: aboutdata }}></p>
    </Container>
  );
};

export default Home;
