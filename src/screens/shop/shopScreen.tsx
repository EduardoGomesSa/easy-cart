import { itensMock } from "@/src/constants/shops";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ItemCard from "./components/itemCard";

export default function ShopScreen() {
    const { title, price, date, items } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Compra: {title}</Text>
            <Text style={styles.text}>Preço: {price}</Text>
            <Text style={styles.text}>Data: {date}</Text>
            <Text>Itens:</Text>
            <ScrollView style={{padding: 10}}>
                {
                    itensMock.map((item) => (
                        <ItemCard
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onEdit={() => console.log(`Editar item ${item.id}`)}
                        onDelete={() => console.log(`Excluir item ${item.id}`)} />
                    ))
                }
            </ScrollView>
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