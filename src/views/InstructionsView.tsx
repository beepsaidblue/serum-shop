import styled from "styled-components";

const InstructionsView: React.FC = () => {
  return (
    <InstructionsDiv>
      <h3>How To Redeem Merch</h3>
      <p><b>Step 1 -</b> BUY your desired merch NFTs on the <a href="https://shop.surfersdao.com">Surfers Merch Store</a></p>
      <p><b>Step 2 -</b> To redeem your NFTs for physical merch, please fill out and submit the <a href="https://docs.google.com/forms/d/1W2s7ZnADTHhpjp8a9GWXei7hUBDC02_PtQsH-aj3C_s/edit" target="_blank" rel="noreferrer noopener">Surfer Merch Google Form</a>. You MUST submit the form prior to redeeming your NFTs and sending the required Shipping & Handling.</p>
      <p><b>Step 3 -</b> Send your Merch NFTs to the Surfer Wallet (posted below)</p>
      <p><b>Step 4 -</b> Send the appropriate Shipping & Handling costs in solUSDC to the Surfer Wallet to cover the number of items being redeemed. Please refer to the Shipping & Handling Points Table to calculate.</p>  
      <br />
      <p><b>Surfer Wallet:</b> G1kKCmB8zmxQYPQoyWBdLwA8x3243mXFfmGENvWdWruL</p>
      <br />
      <h3>Shipping & Handling Points Table</h3>
      <p>1 hat = 1 point</p>
      <p>1 shirt = 2 points</p>
      <p>1 tote = 2 points</p>
      <p>1 bottle = 5 points</p>
      <br />
      <p>5 total points  = $15 solUSDC for Shipping & Handling</p>
      <p>10 total points = $25 solUSDC for Shipping & Handling</p>
      <br />
      <p>Notes:<br />
        1) example: if redeeming 7 points, please send $25USDC<br />
        2) for orders above 10 total points please add accordingly (i.e. 11-15 pts = $40, 16-20 pts = $50)<br />
        3) for extremely large redemption orders please contact @KingSurfer on Serum Discord
      </p>
    </InstructionsDiv>
  )
}

const InstructionsDiv = styled.div`
  max-width: 1200px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 14px;
  
  h3 {
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

export default InstructionsView;