import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
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
        contentContainerStyle={{ alignItems: "center", paddingHorizontal: 10 }}
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
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    height: 110,
    padding: 2,
    gap: 5,
    paddingTop: 15,
    backgroundColor: "green",
  },
  categoryItem: {
    width: 95,
    height: 100,
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
    // Sombra Android
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
    height: 400,
    backgroundColor: "yellow",
  },
});
