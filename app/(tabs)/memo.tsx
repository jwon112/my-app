import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Heading, Icon, Input, VStack, NativeBaseProvider, Center, ScrollView, Box, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Rect, ClipPath, Defs } from 'react-native-svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRouter } from 'expo-router';

export default function MemoScreen() {
  const router = useRouter();

  return (
      <ScrollView w="100%">
        <Box style={styles.container} mb={4}>
          <VStack w="100%" space={2.5} alignSelf="center" px="4" safeArea>
            <Input backgroundColor="white" placeholder="검색" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="search" />} />} />
          </VStack>
        </Box>
        <Box style={styles.memolist}>
          <HStack>
          <TouchableOpacity onPress={() => router.push('/form?itemId=1')}>
            <Svg width={120} height={160} viewBox="0 0 120 160">
              <Defs>
                <ClipPath id="clip">
                  <Rect x="10" y="0" width="110" height="150" rx="10" ry="10" />
                </ClipPath>
              </Defs>
              <Rect
                x="0"
                y="0"
                width="120"
                height="160"
                fill="#FFFFFF"
                clipPath="url(#clip)"
              />
            </Svg>
          </TouchableOpacity>
            <Svg width={120} height={160} viewBox="0 0 120 160">
              <Defs>
                <ClipPath id="clip">
                  <Rect x="10" y="0" width="110" height="150" rx="10" ry="10" />
                </ClipPath>
              </Defs>
              <Rect
                x="0"
                y="0"
                width="120"
                height="160"
                fill="#FFFFFF"
                clipPath="url(#clip)"
              />
            </Svg>
            <Svg width={120} height={160} viewBox="0 0 120 160">
              <Defs>
                <ClipPath id="clip">
                  <Rect x="10" y="0" width="110" height="150" rx="10" ry="10" />
                </ClipPath>
              </Defs>
              <Rect
                x="0"
                y="0"
                width="120"
                height="160"
                fill="#FFFFFF"
                clipPath="url(#clip)"
              />
            </Svg>
          </HStack>
        </Box>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memolist: {
    left: 10,
    top: 10,
    elevation: 4, // Android에서 작동, iOS의 경우 shadow 설정 필요
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
