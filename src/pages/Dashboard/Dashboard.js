import React, { useState } from "react";

import { Container, Input, Title, ViewInput, Btn } from "./styles";

import { FontAwesome } from "@expo/vector-icons";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ScrollFile from "../../components/ScrollFile/ScrollFile";
import SearchFile from "../../components/SearchFile/SearchFile";
import ListFile from "../../components/ListFile/ListFile";

// Navegação
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleMessage() {
    if (title === "" || description === "") {
      Alert.alert("Ops!", "Por favor, preencha os campos corretamente!");
    }

    try {
      const response = await api.post("/createMessage", {
        title: title,
        description: description,
      });

      Alert.alert("Parabéns!", "Mensagem criada com sucesso!");
    } catch (error) {
      // Pegando a mesagem de erro do backend.
      const code = error.response.status;

      // Recebendo e checando a mensagem de erro do backend
      if (code === 409) {
        Alert.alert(
          "ATENÇÃO!",
          "A mensagem já existe, por favor insira uma nova mensagem!"
        );
      }
    }

    setTitle("");
    setDescription("");
  }

  return (
    <Container>
      <HeaderBar />

      <Title>Pesquise por aqui...</Title>

      <ViewInput>
        <Input
          placeholder="Pesquisar..."
          autoCorrect={true}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <Btn>
          <FontAwesome name="search" size={20} color="black" />
        </Btn>
      </ViewInput>

      <SearchFile />

      <ScrollFile />

      <ListFile />
    </Container>
  );
};

export default Home;

/*
        <Button
        onPress={() => {
          navigation.navigate("Register");
        }}
        title="Ir Register"
      />
*/

/*
      <TextInput
        style={styles.inputTwo}
        placeholder="Digite uma Mensagem"
        keyboardType="name-phone-pad"
        autoCorrect={true}
        value={description}
        multiline={true}
        onChangeText={(text) => setDescription(text)}
      />

      <TouchableOpacity style={styles.Btn} onPress={handleMessage}>
        <Feather name="list" size={25} color="#F4F7F8" />

        <Text style={styles.textBtn}>Criar Mensagem</Text>
      </TouchableOpacity>
*/
