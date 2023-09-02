import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryList({ data }) {
  const navigation = useNavigation();
  
  const handleLetterSearch = (letter)=>{
    // alert(letter)
    navigation.navigate('Letra', { letter: letter })
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginStart: 10 }}
    >
      <TouchableOpacity 
        style={styles.category}
        onPress={()=>handleLetterSearch(data)}
      >
        <Text style={styles.categoryTitle}>{data}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#C12323",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 8,
    color: "#fff",
    fontWeight: 500,
    fontSize: 100,
  },
  categoryTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 500,
  },
});
