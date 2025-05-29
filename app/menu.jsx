import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchInput}>
          <TextInput type="text" placeholder="Buscar em departamentos" />
          <TouchableOpacity onPress={() => alert("Buscar!")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
              }}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => alert("Favoritos!")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
              }}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Carrinho!")}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
              }}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_OFERTAS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Ofertas</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_NOVIDADES_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Novidades</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_FEMININO_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Ofertas</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_MASCULINO_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Masculino</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_INFANTIL_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Infantil</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_BELEZA_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Beleza</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_BASICOS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Básicos</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_JEANS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Jeans</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_ACESSORIOS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Acessórios</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_CALCADOS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Calçados</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_ESPORTIVO_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Esportivo</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_MODAPRAIA_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Moda Praia</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_MODAINTIMA_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Moda Intíma</Text>
          </View>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_LOJASPARCEIRAS_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Lojas Parceiras</Text>
          </View>
        </View>
        <View style={styles.lastSquareContainer}>
          <View style={styles.square}>
            <Image
              source={{
                uri: "https://img.lojasrenner.com.br/banner/01-home/250415_BANNER_MENU_ASHUA_MOB.png",
              }}
              style={styles.squareImage}
              resizeMode="cover"
            />
            <Text style={styles.squareText}>Ofertas</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  header: {
    height: 40,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 400,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    backgroundColor: "#e8e4e3",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    width: 20,
    height: 40,
    paddingLeft: 50,
    borderColor: "transparent",
    outlineWidth: 0, // Remove a borda amarela do TextInput
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  squareContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 45,
  },
  square: {
    width: 150,
    height: 165,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  squareImage: {
    width: 180,
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    backgroundColor: "#fff",
  },
  squareText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#fff",
    height: 40,
    width: 180,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  lastSquareContainer: {
    marginLeft: 27,
  },
};
