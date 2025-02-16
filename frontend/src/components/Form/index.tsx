import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { ethers } from "ethers";

export default function StakeForm() {
  const [wallet, setWallet] = useState("");
  const [pair, setPair] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [ethStake, setEthStake] = useState("--");
  const [ourShare, setOurShare] = useState("");

  const handleCalculate = () => {
    if (ethStake) {
      let cals = (Math.random() * (500 - 250) + 250);
      let calsxx = (cals*1/100).toFixed(2);
      setOurShare(cals.toFixed(0) +` (+${calsxx} fee)` + " WETH");
      console.log(ourShare);
    }
  };
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [userAddress, setUserAddress] = useState("");
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
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white", marginBottom: "150px" }}>
        <Typography variant="h5" gutterBottom>
          Stake Form
        </Typography>
        <TextField
          fullWidth
          label="Token Address"
          variant="outlined"
          margin="normal"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <TextField
          fullWidth
          label="LP Address"
          variant="outlined"
          margin="normal"
          value={pair}
          onChange={(e) => setPair(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleCalculate} sx={{ mt: 2 }}>
          Calculate
        </Button>
        {ourShare && (
          <div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Need to Stake: {ourShare}
            </Typography>

            <Button variant="contained" color="primary" fullWidth onClick={connectWallet} sx={{ mt: 2 }}>
              Confirm
            </Button>
          </div>
        )}
      </Box>
    </Container>
  );
}
