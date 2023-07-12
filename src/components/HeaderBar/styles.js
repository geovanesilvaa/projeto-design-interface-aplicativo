import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #599c7b;
  justify-content: space-between;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

export const Btn = styled.TouchableOpacity`
  margin: 30px;
`;
