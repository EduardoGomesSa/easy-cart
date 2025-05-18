import { Stack } from "expo-router";

export default function ShopLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Informações da Compra',
          headerStyle: { backgroundColor: '#3A71F5' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Stack>
  );
}
