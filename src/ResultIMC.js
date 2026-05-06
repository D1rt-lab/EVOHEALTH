import { StyleSheet, Text, View, Share, TouchableOpacity } from 'react-native';
import styles from './styles/StResult';

export default function ResultIMC(props){
    
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.ResultIMC
        })
    }
    
    return(
        <View style={styles.resultIMC}>
            <View style={styles.boxShareButton}>
                {props.ResultIMC != null ?
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.textShare}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.ResultIMC}</Text>
        </View>
    );
}