import { Box, Button, Center, FormControl, Heading, Input, VStack } from "native-base";
import { useRouter } from 'expo-router';
import React from 'react';

const Register = () => {
  const router = useRouter();

  const handleRegister = () => {
    // 회원가입 로직 추가 (예: 회원가입 완료 후)
    router.push('/login'); // 회원가입 완료 후 로그인 페이지로 이동
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleRegister}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
