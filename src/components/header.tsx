import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
    const insets = useSafeAreaInsets()
    return  (
        <View style={[styles.header, {paddingTop: insets.top}]}>
            <Text style={styles.title}>Easy Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3A71F5',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
})