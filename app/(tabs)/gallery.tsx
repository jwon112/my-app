import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Platform } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

export default function TabGalleryScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      uri: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      uri: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      uri: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    },
  ];

  const openImageViewer = (index: number) => {
    if (Platform.OS !== 'web') {
      setCurrentIndex(index);
      setIsVisible(true);
    } else {
      alert('Image viewing is not supported on web.');
    }
  };

  const renderItem = ({ item, index }: { item: any, index: number }) => (
    <TouchableOpacity onPress={() => openImageViewer(index)}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>갤러리</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      {Platform.OS !== 'web' && (
        <ImageViewing
          images={images}
          imageIndex={currentIndex}
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 100,
    margin: 5,
  },
});