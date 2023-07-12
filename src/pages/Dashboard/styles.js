import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #74b495;
`;

export const Title = styled.Text`
  margin: 15px 10px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ViewInput = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 45px;
  background-color: #5e8572;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 17px;
  color: #fff;
`;

export const Btn = styled.TouchableOpacity`
  width: 10%;
  height: 45px;
  display: flex;
  margin-left: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f1ba8b;
`;
