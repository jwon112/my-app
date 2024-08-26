import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FormControl, Input, Stack, Text, Divider, Box, WarningOutlineIcon, ScrollView, Center, NativeBaseProvider, HStack, View, TextArea, Icon, IconButton } from "native-base";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Platform } from "react-native";

const FormScreen = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<string | undefined>(undefined);
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (mode === 'date') {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      if (Platform.OS !== 'android') {
        showTimepicker();
      }
    } else if (mode === 'time') {
      const selectedTime = selectedDate ? `${selectedDate.getHours()}:${selectedDate.getMinutes()}` : undefined;
      setShow(false);
      setTime(selectedTime);
    }
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setMode(currentMode);
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    } else {
      setShow(true);
    }
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  return (
    <ScrollView w="100%">
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{ base: "100%", md: "25%" }}>
        <Box>
          <Text bold fontSize="xl" mb="4">
            제목
          </Text>
          <FormControl mb="5">
            <Input />
              {/* <FormControl.HelperText>제목을 자유롭게 입력하세요.</FormControl.HelperText>  */}
          </FormControl>
          <Divider />
        </Box>

        <Box>
          <HStack space={2}>
            <Text bold fontSize="xl" mb="3">
              관측위치
            </Text>
            <IconButton icon={<Icon as={Entypo} name="location" />} borderRadius="full" _icon={{
                color: "black.500",
                size: "md"
              }} _hover={{
                bg: "gray.600:alpha.20"
              }} _pressed={{
                bg: "gray.600:alpha.20",
                _icon: {
                  name: "location",
                  color: "gray.500"
                },
                _ios: {
                  _icon: {
                    size: "2xl"
                  }
                }
              }} _ios={{
                _icon: {
                  size: "2xl"
                }
              }} mb="3"
              onPress={showDatepicker} // 아이콘 클릭 시 날짜 선택기 열기
              />
          </HStack>
          
          <FormControl mb="5">
            <HStack space={2}>
              <FormControl.Label flex={1}>
                위도
              </FormControl.Label>
              <FormControl.Label flex={1}>
                경도
              </FormControl.Label>
            </HStack>
            <HStack space={2}>
              <Input placeholder="위도" flex={1} />
              <Input placeholder="경도" flex={1} />
            </HStack>
            {/*<FormControl.HelperText>아이콘을 터치해서 위치를 지정하세요.</FormControl.HelperText>*/}
          </FormControl>
          <Divider />
        </Box>

        <Box>
          <HStack space={3}>
            <Text bold fontSize="xl" mb="3">
              관측일자
            </Text>
            <IconButton icon={<Icon as={Entypo} name="calendar" />} borderRadius="full" _icon={{
                color: "black.500",
                size: "md",
              }} _hover={{
                bg: "gray.600:alpha.20"
              }} _pressed={{
                bg: "gray.600:alpha.20",
                _icon: {
                  name: "calendar",
                  color: "gray.500"
                },
                _ios: {
                  _icon: {
                    size: "2xl"
                  }
                }
              }} _ios={{
                _icon: {
                  size: "2xl"
                }
              }} mb="3"
              onPress={showDatepicker} // 아이콘 클릭 시 날짜 선택기 열기
              />
            <IconButton icon={<Icon as={Entypo} name="clock" />} borderRadius="full" _icon={{
                color: "black.500",
                size: "md",
              }} _hover={{
                bg: "gray.600:alpha.20"
              }} _pressed={{
                bg: "gray.600:alpha.20",
                _icon: {
                  name: "clock",
                  color: "gray.500"
                },
                _ios: {
                  _icon: {
                    size: "2xl"
                  }
                }
              }} _ios={{
                _icon: {
                  size: "2xl"
                }
              }} mb="3"
              onPress={showTimepicker} // 아이콘 클릭 시 시간 선택기 열기
              />
          </HStack>
          <HStack space={2}>
            <FormControl mb="5" flex={1}>
              <Input placeholder="날짜가 들어갑니다." value={formattedDate} isReadOnly/>
            </FormControl>
            <FormControl mb="5" flex={1}>
              <Input placeholder="시간이 들어갑니다." value={time} isReadOnly/>
            </FormControl>
          </HStack>
          <Divider />

            {/* iOS, Windows에서 날짜 선택기 표시 */}
          {show && (Platform.OS !== 'android') && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode as 'date' | 'time'}  // 이 부분에서 명확하게 타입을 지정해줍니다.
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </Box>

        <Box>
          <Text bold fontSize="xl" mb="4">
            토지 분류
          </Text>
          <FormControl isInvalid>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>

        <Box>
          <HStack space={3}>
            <View flex={1}>
              <Text bold fontSize="xl" mb="4">
                까치
              </Text>
              <FormControl mb="5">
                <Input placeholder="까치 머릿수" />
              </FormControl>
            </View>

            <View flex={1}>
              <Text bold fontSize="xl" mb="4">
                참새
              </Text>
              <FormControl mb="5">
                <Input placeholder="참새 머릿수" />
              </FormControl>
            </View>

            <View flex={1}>
              <Text bold fontSize="xl" mb="4">
                비둘기
              </Text>
              <FormControl mb="5">
                <Input placeholder="비둘기 머릿수" />
              </FormControl>
            </View>
          </HStack>
        </Box>
        <Box>
          <Text mb="4" bold fontSize="lg">
            관측 내용
          </Text>
          <TextArea h={150} placeholder="Text Area Placeholder" w="100%" autoCompleteType={undefined} mb="5" />
        </Box>
      </Stack>
    </ScrollView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <FormScreen />
      </Center>
    </NativeBaseProvider>
  );
};
