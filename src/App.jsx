import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import randomString from "./randomString";
import URL from "./api";

function App() {
  const [newLink, setNewLink] = useState("");
  const [links, setLinks] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL.BASE_URL + URL.SITES);
    setLinks(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${URL.BASE_URL}${URL.SITES}`, {
      id: Date.now(),
      original_link: newLink,
      short_link: randomString(6),
    });
    setLinks([...links, response.data]);
  };
  
  return (
    <Stack align="center" minH="100vh" h="full" justify={"center"}>
      <Container maxW="md">
        <Box textAlign="center">
          <Heading>Pangkas</Heading>
          <Text color="gray.500">Url Shortener tanpa batas limit</Text>
        </Box>
        <Stack as="form" onSubmit={handleSubmit} spacing={4}>
          <FormControl isRequired>
            <FormLabel>Link</FormLabel>
            <Input
              type="url"
              name="url"
              placeholder="https://example.com"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
            />
          </FormControl>
          <Button type="submit">Shorten</Button>
        </Stack>
        {links.map((link, index) => (
          <HStack key={index}>
            <Text>
              {link.original_link} - {link.short_link}
            </Text>
          </HStack>
        ))}
      </Container>
    </Stack>
  );
}

export default App;
