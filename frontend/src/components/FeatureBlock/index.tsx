import React from "react";

const infoCards = [
  {
    title: "What is Rug Shield?",
    description:
      "<p>Rug Shield is a security solution developed to protect crypto investors against the risk of <b>rug pulls</b>. It partially compensates investors for their losses if token owners withdraw liquidity and ensures a reliable investment environment.</p>",
  },
  {
    title: "What are its Features?",
    description:
      `<p><b>Secure Staking:</b> Token owners stake ETH to secure liquidity.</p>  
<p><b>Rug Pull Detection:</b> Sudden drops in the liquidity pool are automatically detected.</p>  
<p><b>Automatic Compensation:</b> In the event of a rug pull, the locked ETH is proportionally distributed to investors.</p>  
<p><b>Transparent Transactions:</b> All transactions are recorded on the blockchain, preventing manipulation.</p>`,
  },
  {
    title: "How Does It Work?",
    description:
      `<p><b>Token Owner:</b> Creates a token and stakes ETH in the liquidity pool.</p>  
<p><b>Investor:</b> Buys the token and trusts the project.</p>  
<p><b>Rug Pull Detection:</b> Sudden drops in the liquidity pool are detected.</p>  
<p><b>Compensation:</b> In the event of a rug pull, the locked ETH is distributed to investors.</p>`,
  },
  {
    title: "Use Cases",
    description:
      `<p><b>DeFi Projects:</b> New token projects can use Rug Shield to enhance their credibility.</p>  
<p><b>Exchanges:</b> Exchanges looking to protect their users from rug pull risks can integrate Rug Shield.</p>  
<p><b>Individual Investors:</b> Investors seeking a secure investment can prefer Rug Shield-backed tokens.</p>`,
  },
];

const GuardianInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 min-h-screen">
      {infoCards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h6 style={{fontSize: "30px"}} className="font-bold text-blue-700">{card.title}</h6>
          <p className="mt-2 text-gray-600 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: card.description }}></p>
        </div>
      ))}
    </div>
  );
};

export default GuardianInfo;
