import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Heading, Icon, Input, VStack, NativeBaseProvider, Center, ScrollView, Box } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Example = () => {
  return (
      <ScrollView w="100%">
        <Box style={styles.container}>
          <VStack w="100%" space={2.5} alignSelf="center" px="4" safeArea mt="4">
            <Input backgroundColor="white" placeholder="검색" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="search" />} />} />
          </VStack>
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


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};