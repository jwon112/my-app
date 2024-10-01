import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router'; // useRouter 추가
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
}) {
  return (
    <FontAwesome
      size={props.size || 23}
      style={{ marginBottom: 0 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter(); // useRouter 훅 사용

  const handleLogout = () => {
    // 로그아웃 로직 추가 (예: 토큰 삭제 등)
    router.replace('/login'); // 로그인 화면으로 이동하고 네비게이션 스택 재설정
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: true, // 개별 화면의 헤더는 보이도록 설정
        headerRight: () => (
          <Pressable onPress={handleLogout}>
            {({ pressed }) => (
              <FontAwesome
                name="sign-out"
                size={25}
                color={Colors[colorScheme ?? 'light'].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Detection',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="eye" color={color} size={23} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="image" color={color} size={23} />
          ),
        }}
      />
      <Tabs.Screen
        name="memo"
        options={{
          title: 'Memo',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pencil" color={color} size={23} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="map" color={color} size={23} />
          ),
        }}
      />
    </Tabs>
  );
}
