import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function TabMapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780, // 서울 좌표
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.5665,
            longitude: 126.9780,
          }}
          title="서울"
          description="서울 중심부"
        />
        <Marker
          coordinate={{
            latitude: 36.5665,
            longitude: 126.9780,
          }}
          title="서울"
          description="서울 중심부"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
