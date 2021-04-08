import React from "react";
import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Characters = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((a) => {
        return (
          <div key={a.id}>
            <Image src={a.image} height={300} width={300} />
            <Heading as="h4" size="md" align="center">
              {a.name}
            </Heading>
            <Text align="center">Origin: {a.origin.name}</Text>
            <Text align="center">Location: {a.location.name}</Text>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Characters;
