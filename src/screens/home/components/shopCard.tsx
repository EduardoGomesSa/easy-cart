import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ShopCardProps = {
    title: string;
    price: string;
    date: string;
}

export default function ShopCard({ title, price, date }: ShopCardProps) {
    const router = useRouter()

    const handlePress = () => {
        router.push({
            pathname: '/shop',
            params: { title, price, date }
        })
    }

    const [checked, setChecked] = useState(false)

    return (
        <Pressable style={styles.card} onPress={handlePress}>
            <TouchableOpacity
                style={[styles.checkbox, checked && styles.checkedBox]}
                onPress={() => setChecked(!checked)} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.date}>{date}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3A71F5',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 6,
        marginHorizontal: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#fff',
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedBox: {
        backgroundColor: '#fff',
    },
    checkmark: {
        color: '#3A71F5',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    price: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 16,
    },
    date: {
        color: '#fff',
        fontSize: 12,
    }
});
