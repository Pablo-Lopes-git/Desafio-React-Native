import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./src/screens/login/styles";
import Seta from "./src/img/icons-seta.png"


const App = () => {
    return (
        <View style={styles.container}>

            <Image source={Seta} style={styles.icone} />
            <Text style={styles.title}>Acessar conta</Text>

            <Text style={styles.title2}>Pessoa física</Text>
            <Text style={styles.text}>informe os dados para acessar sua conta:</Text>

            <Text style={styles.title3}>Agência</Text>
            <TextInput style={styles.button} />
            <Text style={styles.text} >Troque o X por 0, se necessario</Text>

            <Text style={styles.title3} >Conta</Text>
            <TextInput style={styles.button} />
            <Text style={styles.text}>Troque o X por 0, se necessario</Text>

            <Text style={styles.title3}>Senha de 8 dígitos</Text>
            <TextInput  style={styles.button} />

            <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText} >ACESSAR CONTA</Text>
            </TouchableOpacity>
        </View>
    )
};
export default App