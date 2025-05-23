import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ItemProps = {
    name: string;
    amount: number;
    price: number;
    onEdit?: () => void;
    onDelete?: () => void;
}

export default function ItemCard({ name, amount, price, onEdit, onDelete } : ItemProps) {
    const total = amount * price;

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.label}>nome: <Text style={styles.value}>{name}</Text></Text>
                <Text style={styles.label}>quantidade: <Text style={styles.value}>{amount}</Text></Text>
                <Text style={styles.label}>valor: <Text style={styles.value}>{price}</Text></Text>
                <Text style={styles.label}>total: <Text style={styles.value}>{total}</Text></Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onDelete} style={styles.icoonButton}>
                    <Ionicons name="trash" size={16} color="#000" />
                    <Text style={styles.actionText}>excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEdit} style={styles.icoonButton}>
                    <Ionicons name="create" size={16} color="#000" />
                    <Text style={styles.actionText}>editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1e90ff",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    label: {
        color: "#fff",
        fontSize: 12,
        marginRight: 10,
    },
    value: {
        fontWeight: "bold",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 12,
        backgroundColor: "white",

        paddingHorizontal: 10,
        paddingVertical: 4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: "100%",
    },
    icoonButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    actionText: {
        fontSize: 12,
        color: "#000",
    }
})