import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { PartsContext } from './PartsContext';

const partTypes = [
  'Aceite de motor',
  'Filtro de aire',
  'Filtro de acite',
  'Filtro de combustible',
  'Bujias',
  'Baterias',
  'Pastilla de frenos',
  'Neumaticos',
  'Limpiaparabrisas',
  'Correa de distribucion',
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
      alert('Por favor, rellene todos los campos');
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
      <Text style={styles.formTitle}>Agregar nueva pieza</Text>
      
      <Text style={styles.label}>Tipo de pieza:</Text>
      <Picker
        selectedValue={partType}
        style={styles.picker}
        onValueChange={(itemValue) => setPartType(itemValue)}
      >
        {partTypes.map((type) => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>
      
      <Text style={styles.label}>Marca:</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Introducir marca"
      />
      
      <Text style={styles.label}>Número de serie:</Text>
      <TextInput
        style={styles.input}
        value={serialNumber}
        onChangeText={setSerialNumber}
        placeholder="Introducir Numero de Serie"
      />
      
      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Introducir precio"
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Fecha de cambio:</Text>
      <TextInput
        style={styles.input}
        value={changeDate}
        onChangeText={setChangeDate}
        placeholder="YYYY-MM-DD"
      />
      
      <Button title="Agregar parte" onPress={handleSubmit} />
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