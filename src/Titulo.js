import { StyleSheet, Text, View } from 'react-native'
import styles from './styles/StTitulo'


export default function Titulo(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>EVOHEALTH</Text>
        </View>
    );
}