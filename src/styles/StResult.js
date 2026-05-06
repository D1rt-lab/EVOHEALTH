import { StyleSheet } from 'react-native';
import ResultIMC from '../ResultIMC';

const styles = StyleSheet.create({

    resultIMC: {
        flex: 1,
        marginTop: 20,
        paddingTop: 60,
        borderRadius: 50, 
        alignItems: "center",
        width: "100%",
    },

    numberIMC: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },

    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
    },

    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },

    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,

        
    },

    textShare: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 5,
        alignContent: "center",
    }   

})

export default styles;
