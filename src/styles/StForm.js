import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
    formContext: {

        width: "100%",
        height: "1000%",
        justifyContent: 'space-around',
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {

        width: "100%",
        height: "auto",
        padding: 30,
        paddingTop: 30,
    },

    label: {   
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {

        width: "90%",
        height: 40,
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 10,
        marginBottom: -90,
    },

    textButtonCalculator: {

        fontSize: 20,
        color: "#ffffff",
    },

    errorMessage: {
        fontSize: 12,
        color: "#ff0000",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles

