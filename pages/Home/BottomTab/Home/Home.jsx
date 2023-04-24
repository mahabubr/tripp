import { View, Text } from "react-native";
import React from "react";

import {
	SearchBar,
	TopBar,
} from "../../../../components/HomeComponents/Home/index.js";

import styles from "./Home.style";
import Category from "../../../../components/HomeComponents/Home/Category/Category.jsx";

const Home = () => {
	return (
		<View>
			<TopBar />
			<SearchBar />
			<Category />
		</View>
	);
};

export default Home;
