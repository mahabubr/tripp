import { ScrollView } from "react-native";
import React from "react";

import {
	AirportContent,
	Category,
	SearchBar,
	TaxiContent,
	TopBar,
} from "../../../../components/HomeComponents/Home/index.js";

import styles from "./Home.style";

const Home = () => {
	return (
		<ScrollView
			contentContainerStyle={{ paddingBottom: 60 }}
			style={styles.container}>
			<TopBar />
			<SearchBar />
			<Category />
			<AirportContent />
			<TaxiContent />
		</ScrollView>
	);
};

export default Home;
