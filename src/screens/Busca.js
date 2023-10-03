import axios from "axios";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, SafeAreaView, FlatList, TouchableOpacity, View} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function Busca({ route }) {
  const { searchQuery } = route.params;
  const[searchedRecipes, setSearchedRecipes] = React.useState();
  const navigation = useNavigation();

  React.useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.get(`https://api-receitas-lnp4.onrender.com/api/v1/receitas/search?q=${searchQuery}`);
        console.log(response.data);
        setSearchedRecipes(response.data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  },[])

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
      <Text style={styles.title}>Você pesquisou por: {searchQuery}</Text>
      <View style={styles.recipesList}>
        <FlatList
          data={searchedRecipes}
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
    paddingHorizontal: 10
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20
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
