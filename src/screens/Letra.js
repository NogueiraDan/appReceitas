import React from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function Letra({ route }) {
  const { letter } = route.params;
  const [recipesByLetter, setRecipesByLetter] = React.useState();
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-receitas-lnp4.onrender.com/api/v1/receitas/letter/${letter}`
        );

        const limitedResults = response.data.slice(0, 50);
        setRecipesByLetter(limitedResults);
        console.log(recipesByLetter);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSendItem = (item) => {
    navigation.navigate('Detalhes', {data: item})
    
  };

  const RenderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={()=>handleSendItem(item)}>
        <Text>{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Você clicou na letra: {letter}</Text>
      <View>
        <FlatList
          data={recipesByLetter}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item._id.$oid}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
