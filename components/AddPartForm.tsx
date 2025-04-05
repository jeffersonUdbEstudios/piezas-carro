import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { PartsContext } from './PartsContext';

const partTypes = [
  'Engine Oil',
  'Air Filter',
  'Oil Filter',
  'Fuel Filter',
  'Spark Plugs',
  'Battery',
  'Brake Pads',
  'Tires',
  'Windshield Wipers',
  'Timing Belt',
];

const AddPartForm = () => {
  const [partType, setPartType] = useState(partTypes[0]);
  const [brand, setBrand] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [price, setPrice] = useState('');
  const [changeDate, setChangeDate] = useState(new Date().toISOString().split('T')[0]);

  const { addPart } = useContext(PartsContext);

  const handleSubmit = () => {
    if (!brand || !serialNumber || !price) {
      alert('Please fill all fields');
      return;
    }

    addPart({
      partType,
      brand,
      serialNumber,
      price: parseFloat(price),
      changeDate,
    });

    // Reset form
    setBrand('');
    setSerialNumber('');
    setPrice('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add New Part</Text>
      
      <Text style={styles.label}>Part Type:</Text>
      <Picker
        selectedValue={partType}
        style={styles.picker}
        onValueChange={(itemValue) => setPartType(itemValue)}
      >
        {partTypes.map((type) => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>
      
      <Text style={styles.label}>Brand:</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Enter brand"
      />
      
      <Text style={styles.label}>Serial Number:</Text>
      <TextInput
        style={styles.input}
        value={serialNumber}
        onChangeText={setSerialNumber}
        placeholder="Enter serial number"
      />
      
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Change Date:</Text>
      <TextInput
        style={styles.input}
        value={changeDate}
        onChangeText={setChangeDate}
        placeholder="YYYY-MM-DD"
      />
      
      <Button title="Add Part" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default AddPartForm;