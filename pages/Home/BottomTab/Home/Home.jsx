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
import HotelContent from "../../../../components/HomeComponents/Home/HotelContent/HotelContent.jsx";

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
			<HotelContent />
		</ScrollView>
	);
};

export default Home;
