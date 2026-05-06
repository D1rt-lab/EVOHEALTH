import { StyleSheet, Text, View, TouchableOpacity, Vibration, TextInput, Pressable, Keyboard } from 'react-native';
import ResultIMC from './ResultIMC';
import { useState } from 'react';
import styles from './styles/StForm'

export default function Form(){

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [IMC, setIMC] = useState(null)
    const [TextButton, setTextButton ] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState('')
    
    function imcCalculator(){
        let heightFormat = height.replace(',','.')
        let weightFormat = weight.replace(',','.')
        return setIMC((weightFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationIMC(){
        if (IMC == null){
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }


    function validatorIMC(){
        if(weight != '' && height != ''){
            imcCalculator()
            setHeight('')
            setWeight('')
            setMessageIMC("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        } else{
            verificationIMC()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e altura")
        }
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.label}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ex: 1.78'
                    keyboardType='decimal-pad'
                    onChangeText={setHeight}
                    value={height}
                />

                <Text style={styles.label}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex: 74.36'
                    keyboardType='decimal-pad'
                    onChangeText={setWeight}
                    value={weight}
                />

                <TouchableOpacity
                    onPress={() => { validatorIMC()}}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC
            messageResultIMC={messageIMC}
            ResultIMC={IMC}
            />
        </Pressable>
    );
}