import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Stack align="center" minH="100vh" h="full" justify={"center"}>
      <Container maxW="md">
        <Box textAlign="center">
          <Heading>Pangkas</Heading>
          <Text color="gray.500">Url Shortener tanpa batas limit</Text>
        </Box>
        <Stack
          as="form"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl isRequired>
            <FormLabel>Link</FormLabel>
            <Input type="url" name="url" placeholder="https://example.com" />
          </FormControl>
          <Button type="submit">
            Shorten
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
