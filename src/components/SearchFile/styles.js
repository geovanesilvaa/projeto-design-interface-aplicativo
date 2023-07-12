import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 60px;
  display: flex;
  padding: 0 15px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  background-color: #74b495;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
