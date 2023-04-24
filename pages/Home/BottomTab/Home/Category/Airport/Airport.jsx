import { View, Text } from "react-native";
import React from "react";

import styles from "./Airport.style";
import { TopNav } from "../../../../../../components/Common";
import { Map } from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer";

const Airport = () => {
	return (
		<View style={styles.container}>
			<TopNav>Airport</TopNav>
			<Map />
		</View>
	);
};

export default Airport;
