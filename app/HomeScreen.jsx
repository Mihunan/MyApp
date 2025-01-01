import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';



const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const route = useRoute();
  const { username } = route.params;

  // Fetch items from a public API
  useEffect(() => {
    const fetchData = async () => {
      try {
             
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch items");
      }
    };

    fetchData();
  }, []);

  // Increment click counter
  const handleItemClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {username}!</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={handleItemClick}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.status}>ID: {item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>{clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4EBF8',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FAF6E3',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 7,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: '#333',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFBF61',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
