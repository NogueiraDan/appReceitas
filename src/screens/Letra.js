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
        <Text style={styles.recipes} >{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas para a letra: {letter}</Text>
      <View style={styles.recipesList}>
        {
          recipesByLetter && (
            <FlatList
            data={recipesByLetter}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item._id.$oid}
          />
          )
        }
        {/* {
          !recipesByLetter && (
            <Text>Não foram encontradas receitas para letra {letter} ☹️​</Text>
          )
        } */}
       
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
  title:{
    fontSize: 20,
    fontWeight: "bold"
  },
  recipesList:{
    paddingBottom: 50
  },

  recipes:{
    backgroundColor:"#fff",
    margin: 10,
    padding: 10,
    fontSize: 18,
    fontWeight:"400",
    borderRadius: 10
  }

});
