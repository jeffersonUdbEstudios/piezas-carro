import React, { createContext, useState } from 'react';

export const PartsContext = createContext();

export const PartsProvider = ({ children }) => {
  const [parts, setParts] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addPart = (part) => {
    setParts([...parts, { ...part, id: Date.now().toString() }]);
  };

  const deletePart = (id) => {
    setParts(parts.filter(part => part.id !== id));
  };

  return (
    <PartsContext.Provider 
      value={{ 
        parts, 
        addPart, 
        deletePart, 
        selectedPart, 
        setSelectedPart, 
        modalVisible, 
        setModalVisible 
      }}
    >
      {children}
    </PartsContext.Provider>
  );
};