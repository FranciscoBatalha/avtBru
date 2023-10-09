import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export function TelaRegistro() {
  const navigation = useNavigation();

  const [formValues, setFormValues] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    usuario: '',
    senha: '',
    email: '',
    confirmarEmail: '',
    cpf: '',
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleSubmit = () => {
    console.log(formValues); 
  };

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.header}>Cadastre-se</Text> {/* Cabeçalho "Cadastre-se" */}
      <Input
        label="Nome"
        leftIcon={<Icon name="user" type="font-awesome" />}
        value={formValues.nome}
        onChangeText={(value) => handleChange('nome', value)}
      />
      <Input
        label="Gênero"
        leftIcon={<Icon name="venus-mars" type="font-awesome" />}
        value={formValues.genero}
        onChangeText={(value) => handleChange('genero', value)}
      />
      <Input
        label="Data de Nascimento"
        leftIcon={<Icon name="calendar" type="font-awesome" />}
        value={formValues.dataNascimento}
        onChangeText={(value) => handleChange('dataNascimento', value)}
      />
      <Input
        label="Usuário"
        leftIcon={<Icon name="user" type="font-awesome" />}
        value={formValues.usuario}
        onChangeText={(value) => handleChange('usuario', value)}
      />
      <Input
        label="Senha"
        leftIcon={<Icon name="lock" type="font-awesome" />}
        secureTextEntry
        value={formValues.senha}
        onChangeText={(value) => handleChange('senha', value)}
      />
      <Input
        label="E-mail"
        leftIcon={<Icon name="envelope" type="font-awesome" />}
        value={formValues.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <Input
        label="Confirme seu E-mail"
        leftIcon={<Icon name="envelope" type="font-awesome" />}
        value={formValues.confirmarEmail}
        onChangeText={(value) => handleChange('confirmarEmail', value)}
      />
      <Input
        label="CPF"
        leftIcon={<Icon name="id-card" type="font-awesome" />}
        value={formValues.cpf}
        onChangeText={(value) => handleChange('cpf', value)}
      />
  

      <Button title="CADASTRAR" onPress={handleSubmit} />

      {/* 3.2 Em tela, logo abaixo de todos os campos */}
      <Text style={styles.dataHeader}>Lista</Text>
      
      {Object.entries(formValues).map(([field, value]) => (
        <Text key={field}>{`${field}: ${value}`}</Text>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#99e599',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataHeader: {
    fontSize: 24,
  },
});


