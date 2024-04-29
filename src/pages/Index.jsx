// Advanced Cryptocurrency Converter Calculator
import { useState } from "react";
import { Box, Select, Input, Button, Text, VStack, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BTC");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const toast = useToast();

  const currencies = [
    { label: "Bitcoin (BTC)", value: "BTC" },
    { label: "Ethereum (ETH)", value: "ETH" },
    { label: "Ripple (XRP)", value: "XRP" },
    { label: "Litecoin (LTC)", value: "LTC" },
    { label: "Cardano (ADA)", value: "ADA" },
  ];

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid number",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate a conversion (this should ideally be an API call)
    const rate = Math.random() * 1000; // Mock conversion rate
    setConvertedAmount((amount * rate).toFixed(2));

    toast({
      title: "Conversion Successful",
      description: `Converted ${amount} ${currency} to ${convertedAmount} USD`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl" mb={4}>
          Cryptocurrency Converter
        </Text>
        <Select placeholder="Select currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Input placeholder="Amount in cryptocurrency" mt={4} value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Button rightIcon={<FaExchangeAlt />} colorScheme="blue" mt={4} onClick={handleConvert}>
          Convert
        </Button>
        {convertedAmount && <Text mt={4}>Converted Amount: {convertedAmount} USD</Text>}
      </Box>
    </VStack>
  );
};

export default Index;
