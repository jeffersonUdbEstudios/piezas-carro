import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PartsContext } from './PartsContext';

const PartItem = ({ part }) => {
  const { deletePart, setSelectedPart, setModalVisible } = useContext(PartsContext);

  const handlePress = () => {
    setSelectedPart(part);
    setModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.partType}>{part.partType}</Text>
          <Text style={styles.date}>{new Date(part.changeDate).toLocaleDateString()}</Text>
        </View>
        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={() => deletePart(part.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  info: {
    flex: 1,
  },
  partType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
  },
});

export default PartItem;