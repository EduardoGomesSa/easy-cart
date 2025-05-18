import { StyleSheet, Text, View } from "react-native";

export default function ShopScreen() {
    return (
        <View style={styles.container}>
            <Text>Tela de detalhes de uma compra</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignContent: 'center',
    }
})