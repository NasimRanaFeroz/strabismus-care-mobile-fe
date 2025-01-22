// import { Tabs } from "expo-router";
// import React from "react";
// import { Platform } from "react-native";


// export default function TabLayout() {

//   return (
//     <Tabs
//       screenOptions={{
//         // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: false,
//         // tabBarButton: HapticTab,
//         // tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: "absolute",
//           },
//           default: {},
//         }),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Dashboard",
//           // tabBarIcon: ({ color }) => (
//           //   // <IconSymbol size={28} name="house.fill" color={color} />
//           // ),
//         }}
//       />
//       <Tabs.Screen
//         name="appointment"
//         options={{
//           title: "Appointment",
//           // tabBarIcon: ({ color }) => (
//           //   // <IconSymbol size={28} name="paperplane.fill" color={color} />
//           // ),
//         }}
//       />
//       <Tabs.Screen
//         name="search"
//         options={{
//           title: "Search",
//           // tabBarIcon: ({ color }) => (
//           //   // <IconSymbol size={28} name="house.fill" color={color} />
//           // ),
//         }}
//       />
//       <Tabs.Screen
//         name="menu"
//         options={{
//           title: "Menu",
//           // tabBarIcon: ({ color }) => (
//           //   // <IconSymbol size={28} name="paperplane.fill" color={color} />
//           // ),
//         }}
//       />
//     </Tabs>
//   );
// }

import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
	const router = useRouter();
	const segments = useSegments();

	const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
		console.log('onAuthStateChanged', user);
		setUser(user);
		if (initializing) setInitializing(false);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	useEffect(() => {
		if (initializing) return;

		const inAuthGroup = segments[0] === '(auth)';

		if (user && !inAuthGroup) {
			router.replace('/(auth)/home');
		} else if (!user && inAuthGroup) {
			router.replace('/');
		}
	}, [user, initializing]);

	if (initializing)
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);

	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: 'Login' }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
		</Stack>
	);
}