import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number; // size 속성 추가
}) {
  return <FontAwesome size={props.size || 23} style={{ marginBottom: 0 }} {...props} />; // 기본 크기 24로 설정
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Detection',
          tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} size={23} />, // 아이콘 크기 24로 설정
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Gallery',
          tabBarIcon: ({ color }) => <TabBarIcon name="image" color={color} size={23} />, // 아이콘 크기 24로 설정
        }}
      />
      <Tabs.Screen
        name="memo"
        options={{
          title: 'Memo',
          tabBarIcon: ({ color }) => <TabBarIcon name="pencil" color={color} size={23} />, // 아이콘 크기 24로 설정
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} size={23} />, // 아이콘 크기 24로 설정
        }}
      />
    </Tabs>
  );
}
