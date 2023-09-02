import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes"
import OnBoarding from "../screens/OnBoarding";
import Busca from "../screens/Busca";
import Letra from "../screens/Letra";
const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: "Detalhes",
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Busca"
        component={Busca}
        options={{
          title: "Resultado da Pesquisa",
          headerShown: true,
        }}
      />
        <Stack.Screen
        name="Letra"
        component={Letra}
        options={{
          title: "",
          headerShown: true,
        }}
      />
     
    </Stack.Navigator>
  );
}
