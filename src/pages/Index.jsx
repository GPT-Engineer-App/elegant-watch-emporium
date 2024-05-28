import { Container, Box, Text, VStack, HStack, Button, Image, IconButton, Input, Textarea, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" display="flex" justifyContent="space-between" alignItems="center" py={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Delara
        </Text>
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Support</Button>
          <Button variant="ghost">Contact</Button>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" textAlign="center" py={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Custom and Modified Watches
        </Text>
        <Text fontSize="lg" color="gray.500">
          Elegant, Modern, and Visually Appealing
        </Text>
        <Image src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwwfHx8fDE3MTY5MDIyMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Luxury Watch" my={6} />
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Box>

      {/* Products Section */}
      <Box as="section" py={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Our Products
        </Text>
        <HStack spacing={6} wrap="wrap" justifyContent="center">
          {/* Example Product */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
            <Image src="https://images.unsplash.com/photo-1714218707589-16bd396a8ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHByb2R1Y3R8ZW58MHx8fHwxNzE2OTAyMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Watch Product" />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Product Name
              </Text>
              <Text color="gray.500">$199.99</Text>
              <Button colorScheme="teal" mt={2}>
                Add to Cart
              </Button>
            </Box>
          </Box>
          {/* Repeat for more products */}
        </HStack>
      </Box>

      {/* Support Section */}
      <Box as="section" py={10} bg="gray.50">
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Customer Support
        </Text>
        <VStack spacing={4} align="start">
          <Text fontSize="lg">Have questions? We're here to help!</Text>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="teal">Submit</Button>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Contact Us
        </Text>
        <VStack spacing={4} align="start">
          <Text fontSize="lg">Email: support@delara.com</Text>
          <Text fontSize="lg">Phone: +123 456 7890</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
            </Link>
          </HStack>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" textAlign="center" py={4} borderTopWidth="1px">
        <Text>&copy; {new Date().getFullYear()} Delara. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
