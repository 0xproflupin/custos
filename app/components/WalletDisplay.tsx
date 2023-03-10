import { Flex, Text } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

function WalletDisplay() {
  const { publicKey } = useWallet();
  return (
    <Flex w={"full"} align={"center"} justify="space-between">
      <Text color={"white"} fontWeight="black" fontSize={"14px"}>
        Cold Wallet Connected :
      </Text>
      <Text color={"white"} textAlign="center">
        {publicKey !== null
          ? `${publicKey?.toString().slice(0, 25)}...`
          : "Connect your Wallet "}
      </Text>
    </Flex>
  );
}

export default WalletDisplay;
