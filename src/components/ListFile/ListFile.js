import { Container, ViewContainer, Title } from "./styles";
import { AntDesign, Entypo } from "@expo/vector-icons";

const ListFile = () => {
  return (
    <Container>
      <ViewContainer>
        <Title>Planejamentos</Title>
        <AntDesign name="piechart" size={24} color="#F1BA8B" />
      </ViewContainer>

      <ViewContainer>
        <Title>Detalhes</Title>
        <Entypo name="forward" size={24} color="#F1BA8B" />
      </ViewContainer>

      <ViewContainer>
        <Title>Lançamentos</Title>
        <Entypo name="newsletter" size={24} color="#F1BA8B" />
      </ViewContainer>

      <ViewContainer>
        <Title>Informações</Title>
        <AntDesign name="infocirlce" size={24} color="#F1BA8B" />
      </ViewContainer>
    </Container>
  );
};

export default ListFile;

// <AntDesign name="infocirlce" size={24} color="black" />
