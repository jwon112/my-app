import { Box, Button, Center, FormControl, Heading, HStack, Input, VStack, Text } from "native-base";
import { Link, useRouter } from 'expo-router'; // expo-router의 Link와 useRouter 사용
import React, { useEffect } from 'react';

const Login = () => {
  const router = useRouter(); // expo-router에서 useRouter를 통해 네비게이션 처리

  const handleLogin = () => {
    // 로그인 로직 추가 (예: 인증 성공 시)
    router.replace('/(tabs)'); // replace로 변경하여 스택 재설정
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLogin}> {/* 로그인 버튼 */}
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I'm a new user.{" "}
            </Text>
            <Link href="/register"> {/* 회원가입 페이지로 이동 */}
              <Text color="indigo.500" fontWeight="medium" fontSize="sm">
                Sign Up
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
