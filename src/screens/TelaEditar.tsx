import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function TelaEditar() {
    
    const navigation = useNavigation();

const dadosPacientes = [
  { id: 1, nome: 'Anderson', consulta: 'Asma', prioridade: 'Alta' },
  { id: 2, nome: 'Guanderson', consulta: 'Decapitação', prioridade: 'Alta' },
  { id: 3, nome: 'Macaquerson', consulta: 'Varíola', prioridade: 'Alta' },
];

  const ItemPaciente = ({ nome, consulta, prioridade }) => {
    return (
      <View style={styles.item}>
        <Text>Nome: {nome}</Text>
        <Text>Consulta: {consulta}</Text>
        <Text>Prioridade: {prioridade}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dadosPacientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemPaciente nome={item.nome} consulta={item.consulta} prioridade={item.prioridade}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#99e599',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
});



