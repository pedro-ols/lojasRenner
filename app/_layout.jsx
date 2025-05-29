import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Image} from "react-native-web";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: () => (
          <View
            style={{
              width: 400,
              height: 60,
              flexDirection: "row",
              gap: 80,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Ionicons name="search" color={"#000000"} size={30} />
            </View>

            <Image
              source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logotipo_das_Lojas_Renner.svg/2560px-Logotipo_das_Lojas_Renner.svg.png",
                }}
              style={{
                  width: 100,
                  height: 60,
                }}
              resizeMode="contain"
            />
            <View
              style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                justifyContent: "center",
            }}
            >
              <Ionicons name="heart" color={"#000000"} size={30} />
              <Ionicons name="bag" color={"#000000"} size={30} />
            </View>
          </View>
        ),
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "darkgrey",
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://www.agenciaeplus.com.br/wp-content/uploads/2019/09/blogrenner1.jpg",
              }}
              style={{ width: 24, height: 24, borderRadius: 12 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: "Blog",
          tabBarIcon: () => (
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 100,
                borderWidth: 1,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: () => (
            <View style={{ flexDirection: "row", gap: 2, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                <View style={{width: 10, height: 10, borderWidth: 1}}></View>
                <View style={{width: 10, height: 10, borderWidth: 1}}></View>
                <View style={{width: 10, height: 10, borderWidth: 1}}></View>
                <View style={{width: 10, height: 10, borderWidth: 1}}></View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cartões",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
