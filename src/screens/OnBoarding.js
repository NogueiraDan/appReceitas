import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  const navigation = useNavigation();
  function handleNavigate() {
    navigation.navigate("Home");
  }

  return (
    <>
      <ImageBackground
        source={require("../../assets/onBoardingScreen.png")}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.buttonHome} onPress={handleNavigate}>
          <Text style={styles.title}>Iniciar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    resizeMode:"center",
    width:"100%"
  },
  textBoarding: {
    color: "#fff",
    width: 320,
    height:"100%",
    fontSize: 25,
    position: "absolute",
    top: 100,
    left: 10,
    textAlign:"center",
    fontWeight: 500,

  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonHome: {
    padding: 10,
    width: 200,
    backgroundColor: "#f28383",
    borderRadius: 10,
    position: "absolute",
    bottom: 50,
  },
});
