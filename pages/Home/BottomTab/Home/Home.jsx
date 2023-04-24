import { ScrollView } from "react-native";
import React from "react";

import {
	AirportContent,
	Category,
	SearchBar,
	TopBar,
} from "../../../../components/HomeComponents/Home/index.js";

import styles from "./Home.style";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	return (
		<ScrollView style={styles.container}>
			<TopBar />
			<SearchBar />
			<Category />
			<AirportContent />
		</ScrollView>
	);
};

export default Home;
