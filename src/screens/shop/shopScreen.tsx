import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ShopScreen() {
    const { title, price, date, items} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Compra: {title}</Text>
            <Text style={styles.text}>Preço: {price}</Text>
            <Text style={styles.text}>Data: {date}</Text>
            <Text>Itens:</Text>
            {/* {items.map((item, index) => (
                    <ItemCard key={index} {...item} />
                  ))} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 20,
        marginVertical: 10,
    }
})