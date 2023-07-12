import styled from "styled-components/native";

export const Container = styled.View`
  margin: 25px 10px;
  border-radius: 5px;
  background-color: #f8f8ff;
`;

export const ViewContainer = styled.View`
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
