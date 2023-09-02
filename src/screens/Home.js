import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import CategoryList from "../../components/CategoryList";

export default function Home() {
  const navigation = useNavigation([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("")
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-receitas-lnp4.onrender.com/api/v1/receitas/"
        );

        const limitedResults = response.data.slice(0, 10);
        console.log(limitedResults);
        setData(limitedResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <Text style={styles.loadingText}>Carregando dados... </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingView}>
        <Text style={styles.loadingText}>Parece que algo deu errado 🤕</Text>
      </View>
    );
  }

  const handleSearch = () => {
    if(search.trim("")===""){
      alert("Por favor digite algo!")
      return
    }
    navigation.navigate('Busca', { searchQuery: search });
    setSearch("");
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Encontre sua receita preferida</Text>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise sua receita"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}> 
            <FontAwesome name="search" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.mainScroll}>
        {/* Vitrine mais acessados */}
        <View style={styles.moreAccessed}>
          <Text style={{ fontSize: 20, marginTop: 8, marginLeft:8 }}>Algumas de nossas receitas</Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              textDecorationLine: "underline",
            }}
          >
            Ver mais
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          pagingEnabled
          snapToInterval={290}
          style={{ marginTop: 4, marginBottom: 20 }}
        >
          {data.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={styles.workouts}
              onPress={() => navigation.navigate("Detalhes", { data: data })}
            >
              <Image
                source={require("../../assets/icon_recipe.png")}
                style={{ width: "auto", height: 150 }}
              />
              <View style={{ padding: 10 }}>
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{data.nome}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 20, marginTop: 8, marginLeft: 10 }}>
          Receita por Letra
        </Text>
        <FlatList
          data={[
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "X",
            "Y",
            "Z",
          ]}
          renderItem={({ item }) => <CategoryList data={item} />}
          horizontal
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginStart: 20,
            marginEnd: "10%",
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 8 }}>Mais acessadas</Text>
        </View>

        {data.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#ffff",
              padding: 10,
              marginHorizontal: 10,
              marginBottom: 10,
              borderRadius: 10,
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("Detalhes", { data: data })}
          >
            <Image
              source={require("../../assets/icon_recipe.png")}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ marginHorizontal: 5, justifyContent: "space-between", width:"100%" }}>
              <Text style={{ fontSize: 18 , flexWrap:"wrap"}}>{data.nome}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="star" size={24} color="gold" />
                <Text style={{ color: "#111", fontSize: 14, fontWeight: 500 }}>
                  5
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
  },
  header: {
    paddingTop: 60,
    height: 140,
    width: "100%",
    paddingStart: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 50,
    // backgroundColor: "#C12323",
    // alignItems: "center",
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "85%",
  },
  searchIcon: {
    marginEnd: 10,
    // backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
  },
  headerTitle: {
    fontSize: 24,
    color: "#000",
    fontWeight: 500,
    marginBottom: 20,
  },
  mainScroll: {
    marginTop: 10,
  },
  moreAccessed: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginStart: 10,
    marginEnd: 10,
  },
  homeContent: {
    height: "100%",
    width: "100%",
  },
  workouts: {
    backgroundColor: "#ffff",
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    width: 280,
    marginStart: 10,
  },
  loadingView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingTop: 150,
  },
  loadingText: {
    fontSize: 40,
    width: "100%",
    paddingStart: 30,
    fontWeight: 500,
    color: "#C12323",
  },
});
