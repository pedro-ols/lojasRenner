import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Link } from "expo-router";

export default function FeaturedSection() {
  return (
    <ScrollView horizontal style={styles.featured}>
      <View style={styles.featuredItem}>
        <Image
          style={{ width: "100%", height: 450 }}
          source={{
            uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-FEM-BLUSAS.jpg",
          }}
        />
        <Link href="/path" asChild>
        <TouchableOpacity style={styles.featuredButton}>
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.featuredItem}>
        <Image
          style={{ width: "100%", height: 450 }}
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
          style={{ width: "100%", height: 450 }}
          source={{
            uri: "https://img.lojasrenner.com.br/banner/01-home/250522_HOME_APOSTAS_NAMORADOS-FEM-VESTIDOS.jpg",
          }}
        />
        <TouchableOpacity style={styles.featuredButton}>
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  featured: {
    width: "100%",
    height: 450,
    flexDirection: "row",
  },
  featuredItem: {
    width: 430,
    height: 450,
    backgroundColor: "blue",
    flexDirection: "column",
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
});
