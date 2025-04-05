import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { PartsContext } from '../components/PartsContext';
import PartItem from '../components/PartItem';
import PartModal from '../components/PartModal';
import AddPartForm from '../components/AddPartForm';

const HomeScreen = () => {
  const { parts, modalVisible, setModalVisible } = useContext(PartsContext);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Parts History</Text>
      
      <Button 
        title={showAddForm ? "Hide Form" : "Add New Part"} 
        onPress={() => setShowAddForm(!showAddForm)} 
      />
      
      {showAddForm && <AddPartForm />}
      
      <FlatList
        data={parts.sort((a, b) => new Date(b.changeDate) - new Date(a.changeDate))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PartItem part={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No parts added yet</Text>}
      />
      
      <PartModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;