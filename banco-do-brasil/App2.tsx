import React from "react";
import { View, Image, TouchableOpacity, Text} from "react-native";
import { styles } from "./src/screens/home/styles";
import Logo from "./src/img/logo.png"
import Icone from "./src/img/icons.png"

const App = () => {
    return (
        <View style={styles.container}>
               
            <Image source={Logo} style={styles.image} />

            <Image source={Icone} style={styles.icone} />
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ACESSAR SUA CONTA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2}>QUERO SER CLIENTE</Text>
            </TouchableOpacity>
            
        </View>
    )
};

export default App