import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.buyPerfume}>
          <Text style={{ color: "white", fontSize: 14 }}>
            Perfumes Rabanne:{" "}
            <Text style={{ color: "red", fontSize: 14 }}>
              TUDO com no mínimo 15% OFF*
            </Text>{" "}
            | COMPRAR
          </Text>
        </View>
        <View style={{ height: 55 }} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.categories}
          contentContainerStyle={{
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Ofertas</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Acabou de chegar</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Feminino</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Infantil</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Beleza</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Masculino</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Ashua Plus Size</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryImage}>
              <Image
                style={{ height: 70, width: 70, borderRadius: 100 }}
                source={{
                  uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-MASC-CASACOSJAQUETAS.jpg",
                }}
              />
            </View>
            <Text style={styles.categoryTitle}>Grandes Marcas</Text>
          </View>
        </ScrollView>
        <ScrollView horizontal style={styles.featured}>
          <View style={styles.featuredItem}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-FEM-BLUSAS.jpg",
              }}
            />
            <TouchableOpacity style={styles.featuredButton}>
              <Text style={styles.buyButtonText}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.featuredItem}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-FEM-CASACOSJAQUETAS.jpg",
              }}
            />
            <TouchableOpacity style={styles.featuredButton}>
              <Text style={styles.buyButtonText}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.featuredItem}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-FEM-VESTIDOS.jpg",
              }}
            />
            <TouchableOpacity style={styles.featuredButton}>
              <Text style={styles.buyButtonText}>COMPRAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView horizontal style={styles.tickets}>
          <View style={styles.ticketItem}>
            <Ionicons name="ticket" color={"#000000"} size={30} />
            <Text style={{ fontSize: 16, color: "black" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Cupom VOUDEAPP
              </Text>{" "}
              15% OFF na sua primeira compra*
            </Text>
          </View>
          <View style={styles.ticketItem}>
            <Ionicons name="car" color={"#000000"} size={30} />
            <Text style={{ fontSize: 16, color: "black" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Cupom VOUDEAPP
              </Text>{" "}
              15% OFF na sua primeira compra*
            </Text>
          </View>
          <View style={styles.ticketItem}>
            <Ionicons name="ticket" color={"#000000"} size={30} />
            <Text style={{ fontSize: 16, color: "black" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Cupom VOUDEAPP
              </Text>{" "}
              15% OFF na sua primeira compra*
            </Text>
          </View>
        </ScrollView>
      </View>
      <View></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F5FCFF",
  },
  buyPerfume: {
    width: "100%",
    height: 55,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 0,
    zIndex: 1,
  },
  categories: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    padding: 2,
    gap: 5,
    paddingTop: 15,
  },
  categoryItem: {
    width: 95,
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 15,
    color: "dimgrey",
    marginTop: 5,
    fontWeight: "bold",
  },
  featured: {
    width: "100%",
    height: 550,
    flexDirection: "row",
  },
  featuredItem: {
    width: 430,
    height: 450,
    backgroundColor: "blue",
  },
  featuredButton: {
    zIndex: 1,
    position: "absolute",
    width: 180,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 370,
    marginLeft: 125,
  },
  buyButtonText: {
    color: "black",
    fontSize: 23,
    fontFamily: "arial",
    fontWeight: "semibold",
  },
  tickets: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    paddingVertical: 20,
  },
  ticketItem: {
    width: 350,
    height: 65,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    backgroundColor: "#DDDDDD",
    marginHorizontal: 10,
  },
});
