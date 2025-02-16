import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { useHistory } from "react-router-dom";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const contractAddress = "";
  const contractAbi = [""]; 

  const connectWallet = async (): Promise<void> => {
    if (!window.ethereum) {
      alert("MetaMask not found!");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signerInstance = await provider.getSigner();
      const address = await signerInstance.getAddress();

      setUserAddress(address);
      setSigner(signerInstance);
      console.log("Wallet connected:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const getStakingDetails = async (): Promise<void> => {
    if (!signer || !userAddress) {
      console.error("Signer or userAddress not found");
      return;
    }
    try {
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const details = await contract.getStakingDetails(userAddress);
      console.log("Raw Details:", details);
    } catch (error: any) {
      console.error("Error fetching staking details:", error.reason || error.message);
    }
  };

  const createStake = async (): Promise<void> => {
    if (!signer) {
      console.error("Signer not found");
      return;
    }
    try {
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const tx = await contract.stake(100000000000, 4263546872354);
      console.log("Transaction Sent:", tx);
      await tx.wait();
      console.log("Transaction Mined:", tx);
    } catch (error: any) {
      console.error("Error creating stake:", error.reason || error.message);
    }
  };

  const raiseStaking = async (): Promise<void> => {
    if (!signer) {
      console.error("Signer not found");
      return;
    }
    try {
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const tx = await contract.raiseStaking(100000005555, 3453467234234);
      console.log("Transaction Sent:", tx);
      await tx.wait();
      console.log("Transaction Mined:", tx);
    } catch (error: any) {
      console.error("Error raising staking:", error.reason || error.message);
    }
  };

  const history = useHistory();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const goToPage = (path: string) => {
      history.push(path);
      setVisibility(false);
    };

    
    return (
      <>
        <CustomNavLinkSmall onClick={() => goToPage("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => goToPage("tokens")}>
          <Span>{t("Tokens")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => goToPage("creators")}>
          <Span>{t("For Creators")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => connectWallet()}
        >
          <Span>
            <Button>{t("MetaMask Connect")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <span style={{fontSize: "35px", fontWeight: "bolder"}}>Rug Shield</span>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
