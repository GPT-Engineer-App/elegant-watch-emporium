import { Container, Box, Text, VStack, HStack, Button, Image, IconButton, Input, Textarea, Link, useColorMode } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" display="flex" justifyContent="space-between" alignItems="center" py={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Delara
        </Text>
        <HStack spacing={4}>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark Mode" : "Light Mode"}</Button>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Support</Button>
          <Button variant="ghost">Contact</Button>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Box>

      {}
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

      {}
      <Box as="section" id="about" textAlign="center" py={10} bg="gray.100">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          About Delara
        </Text>
        <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto">
          At Delara, we are committed to redefining luxury through our meticulously crafted timepieces. Our mission is to offer watches that not only tell time but also tell a story of elegance and innovation. We prioritize quality and customer satisfaction above all, ensuring that each watch is a perfect blend of tradition and modernity. Join us in celebrating the art of watchmaking with a touch of contemporary flair.
        </Text>
      </Box>

      <Box as="section" id="our-story" textAlign="center" py={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Our Story
        </Text>
        <Text fontSize="lg" color="gray.700" maxW="2xl" mx="auto">
          Our journey began with a passion for horology and a desire to create unique timepieces that stand out. From humble beginnings, we have grown into a brand that values craftsmanship, innovation, and customer satisfaction. Each watch we create tells a story of dedication and artistry.
        </Text>
      </Box>

      {}
      <Box as="section" py={10}>
        <Text fontSize="3xl" fontWeight="bold" mb={6}>
          Our Products
        </Text>
        <HStack spacing={6} wrap="wrap" justifyContent="center">
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
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHByb2R1Y3R8ZW58MHx8fHwxNzE2OTAyMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Watch Product 2" />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Product Name 2
              </Text>
              <Text color="gray.500">$249.99</Text>
              <Button colorScheme="teal" mt={2}>
                Add to Cart
              </Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
            <Image src="https://images.unsplash.com/photo-1513708922410-7f6aefcae3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHByb2R1Y3R8ZW58MHx8fHwxNzE2OTAyMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Watch Product 3" />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Product Name 3
              </Text>
              <Text color="gray.500">$299.99</Text>
              <Button colorScheme="teal" mt={2}>
                Add to Cart
              </Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
            <Image src="https://images.unsplash.com/photo-1513708922410-7f6aefcae3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHByb2R1Y3R8ZW58MHx8fHwxNzE2OTAyMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Watch Product 4" />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Product Name 4
              </Text>
              <Text color="gray.500">$349.99</Text>
              <Button colorScheme="teal" mt={2}>
                Add to Cart
              </Button>
            </Box>
          </Box>
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
