"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Box, TextField } from "@mui/material";
import { ethers } from "ethers";

// Veri Tipi Tanımı
interface TokenData {
  id: number;
  name: string;
  price: string;
  stake: string;
}

// Başlangıç Verileri
const initialData: TokenData[] = [
  { id: 1, name: "Token A", price: "$10", stake: "600 ETH" },
  { id: 2, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 3, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 4, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 5, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 6, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 7, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 8, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 9, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 10, name: "Token B", price: "$20", stake: "500 ETH" },
  { id: 11, name: "Token B", price: "$20", stake: "500 ETH" },
];


// Sütunlar


export default function Tokens() {
  const [data, setData] = useState<TokenData[]>(initialData);

  const [searchText, setSearchText] = useState<string>("");

  const filteredData = data.filter((token) =>
    token.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Token Name", width: 150 },
      { field: "price", headerName: "Price", width: 130 },
      { field: "stake", headerName: "Stake", width: 150 },
      {
        field: "actions",
        headerName: "Action",
        width: 150,
        renderCell: (params) => (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => connectWallet()}
          >
            Report RUG
          </Button>
        ),
      },
    ];
  return (
    <Box sx={{ height: 400, width: "750px", p: 2, marginBottom:"150px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>Token List</h2>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <TextField
          label="Search..."
          variant="outlined"
          size="small"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}
