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
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
          justifyContent: "flex-start",
          flexDirection: "row",
          paddingHorizontal: 20 
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

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View>
          {data?.secao?.map((secao, index) => (
            <View key={index}>
              <Text
                style={{
                  backgroundColor: "#e5e5e5",
                  borderRadius: 10,
                  padding: 5,
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
                  backgroundColor: "#fff",
                  margin: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
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
    backgroundColor: "#f3f3f3",
    paddingTop: 40,
  },
});
