import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Detalhes({ route, navigation: { navigate, goBack } }) {
  const { data } = route?.params;  

  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderColor: "c2c2c2",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              goBack();
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#111",
              fontSize: 20,
              marginLeft: 12,
              fontWeight: 500,
            }}
          >
            {data.nome}
          </Text>
        </View>


        <View>
          {data?.secao?.map((secao, index) => (
            <View key={index}>
              <Text
                style={{
                  color: "#111",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {secao.nome}
              </Text>
              <Text
                style={{
                  color: "#111",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                {secao.conteudo.join("\n")}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: 40,
  },
});
