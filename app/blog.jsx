import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";


export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <View style={styles.hamburger}>
            <View style={styles.bar} />
            <View style={styles.bar} />
            <View style={styles.bar} />
          </View>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://blog.lojasrenner.com.br/wp-content/themes/blogrenner/img/logos/estilo-renner-vertical.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => alert("Buscar!")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
            }}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Moda</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Beleza</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Lifestyle</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Moda Responsável</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.newsContainer}></View>
          <View style={styles.news}>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/claudia-lima-destaque-home.jpg",
              }}
              style={styles.newsImage1}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Moda</Text>
            </View>
            <Text style={styles.newsDescription1}>
              Claudia Lima: cores e estampas para o outono 2025.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/joicy-eleiny-destaque-home.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Beleza</Text>
            </View>
            <Text style={styles.newsDescription1}>
              Joicy Eleiny: big chop pode transformar vidas.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/bracelete-destaque-home-416x292.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Moda</Text>
            </View>
            <Text style={styles.newsDescription1}>
              Como usar bracelete e transformar seu look.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/cuidados-pele-inverno-destaque-home-416x292.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Beleza</Text>
            </View>
            <Text style={styles.newsDescription1}>
              Pele no inverno: cuidados para acrescentar na rotina de beauté.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/capivaras-destaque-home-416x292.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Moda</Text>
            </View>
            <Text style={styles.newsDescription1}>
              Capivara core?! Tudo sobre a estampa divertida.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/burgundy-vitrine-home.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Moda</Text>
            </View>
            <Text style={styles.newsDescription1}>Burgundy.</Text>
            <Text style={styles.newsDescription2}>
              Tudo sobre a cor do momento.
            </Text>
            <Image
              source={{
                uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/cores-que-combinam-com-azul-vitrine-home.jpg",
              }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsHighlight}>
              <Text style={styles.newsHighlightText}>Moda</Text>
            </View>
            <Text style={styles.newsDescription1}>Azul.</Text>
            <Text style={styles.newsDescription2}>
              Guia para combinar com a cor.
            </Text>
          </View>

          <View style={styles.buyLook}>
            <View style={styles.divisor}></View>
            <Text style={styles.textLook}>Compre o Look</Text>
            <View style={styles.divisor}></View>
          </View>
          <View style={styles.lookContainer}>
            <View style={styles.looksImageContainer}>
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Vestido-Longo-em-Bengaline-com-Algodao-Agroecologico-e-Recorte-Vazado-nos-Ombros-Verde-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Calca-Baggy-em-Sarja-com-Algodao-Agroecologico-Pesponto-Contrastante-Bege-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Colete-em-Sarja-com-Algodao-Agroecologico-Botoes-e-Bolsos-Aplicados-Amarelo-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.looksImageContainer2}>
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Camisa-Overshirt-em-Sarja-com-Algodao-Agroecologico-e-Pespontos-Contrastantes-Bege-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Saia-Curta-em-Sarja-com-Algodao-Agroecologico-e-Pespontos-Contrastantes-Bege-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
              <Image
                source={{
                  uri: "https://blog.lojasrenner.com.br/wp-content/uploads/2025/05/Blusa-em-Algodao-Agroecologico-com-Gola-Alta-e-Decote-Assimetrico-Verde-309x357.jpg",
                }}
                style={styles.looksImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 45,
    backgroundColor: "#fff",
    width: 400,
    paddingLeft: 24,
  },
  logo: {
    width: 120,
    height: 60,
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  hamburger: {
    width: 30,
    height: 16,
    gap: 10,
    marginBottom: 24,
  },
  bar: {
    height: 3,
    backgroundColor: "#333",
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  menu: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: "#eee",
    width: "100%",
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
    color: "#333",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  newsContainer: {
    gap: 10,
  },
  news: {
    marginTop: 24,
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  newsImage1: {
    width: "100%",
    height: 250,
    marginBottom: 8,
    marginTop: 20,
  },
  newsImage: {
    width: "100%",
    height: 250,
    marginBottom: 8,
    marginTop: 150,
  },
  newsHighlight: {
    backgroundColor: "#000",
    width: 70,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  newsHighlightText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newsDescription1: {
    fontSize: 20,
    marginTop: 4,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  newsDescription2: {
    marginTop: 4,
    alignSelf: "flex-start",
    color: "#666",
  },

  buyLook: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 30,
  },

  divisor: {
    width: 100,
    height: 1,
    backgroundColor: "#E8E8E8",
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: 23,
  },
  textLook: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },

  lookContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  looksImageContainer1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  looksImageContainer2: {
    display: "flex",
    flexDirection: "column",

  },

  looksImage: {
    width: 196,
    height: 226,
    marginBottom: 20,
  },
});
