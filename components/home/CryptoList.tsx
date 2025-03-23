import axios from "axios";
import React, { useState } from "react";
import { View } from "react-native";

const API_KEY = "0316f2b8-0dd7-45dc-8f95-750e0b348cfc";
const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export default function CryptoList() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: { "X-CMC_PRO_API_KEY": API_KEY },
        params: {
          start: 1, // Start from the top-ranked crypto
          limit: 7, // Fetch top 5 cryptos
          convert: "USD",
        },
      });

      setCryptoData(response.data.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return <View></View>;
}
