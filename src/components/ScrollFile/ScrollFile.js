import { ContainerScroll, ViewScroll, Title, Btn } from "./styles";
import { Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ScrollFile = () => {
  return (
    <ContainerScroll>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img1.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 1</Title>
          </Btn>
        </ViewScroll>

        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img2.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 2</Title>
          </Btn>
        </ViewScroll>

        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img3.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 3</Title>
          </Btn>
        </ViewScroll>

        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img4.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 4</Title>
          </Btn>
        </ViewScroll>

        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img5.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 5</Title>
          </Btn>
        </ViewScroll>

        <ViewScroll>
          <Image
            style={{ width: 150, height: 150, borderRadius: 5 }}
            source={require("../../img/img6.png")}
          />

          <Btn>
            <AntDesign name="plus" size={20} color="black" />
            <Title>Detalhes 6</Title>
          </Btn>
        </ViewScroll>
      </ScrollView>
    </ContainerScroll>
  );
};

export default ScrollFile;
