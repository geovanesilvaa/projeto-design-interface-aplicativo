import { Container, Title, Btn } from "./styles";

import { Ionicons, AntDesign } from "@expo/vector-icons";

const HeaderBar = () => {
  return (
    <Container>
      <Btn>
        <Ionicons name="notifications" size={30} color="#F1BA8B" />
      </Btn>
      <Title>HeaderBar</Title>
      <Btn>
        <AntDesign name="bars" size={30} color="#F1BA8B" />
      </Btn>
    </Container>
  );
};

export default HeaderBar;
