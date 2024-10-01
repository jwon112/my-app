import { Box, Button, Center, FormControl, Heading, HStack, Input, VStack, Text } from "native-base";
import { Link, useRouter } from 'expo-router'; // expo-router의 Link와 useRouter 사용
import React from 'react';

const SettingsScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    // 로그아웃 로직 (예: 토큰 삭제 등)
    router.replace('/login'); // 네비게이션 스택 재설정 후 로그인 화면으로 이동
  };

  // ... 화면 내용 ...
};

export default SettingsScreen;
