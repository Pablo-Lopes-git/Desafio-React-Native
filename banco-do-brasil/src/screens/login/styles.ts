import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    icone:{
        tintColor:  "#4169E1",
        width: 30,
        height: 30,  
        marginTop: -30  
    }, 
    title:{
        textAlign: "center",
        marginTop: -26,
        fontSize: 17,
        fontWeight: "bold",
    },
    title2:{
        marginTop: 25,
        fontSize: 18,
        fontWeight: "bold",
    },
    title3:{
        marginTop: 20,
        fontSize: 13,
        fontWeight: "bold",
    },
    text:{
        fontSize: 12,
    },
    button:{
        backgroundColor: "#DCDCDC",
        padding: 2,
        borderRadius: 2,
        alignItems: "center",
        marginTop: 6,
    },
    button2:{
        backgroundColor:  "#FFFF00",
        borderRadius: 3,
        padding: 8,
        alignItems: "center",
        marginTop: 280,
    },
    buttonText:{
        color:  "#4169E1",
        fontSize: 13,
        fontWeight: "bold",
    },  
})