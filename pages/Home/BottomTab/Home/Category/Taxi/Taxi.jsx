import { View } from "react-native";
import React from "react";

import styles from "./Taxi.style";
import { ScrollView } from "react-native";
import { TopNav } from "../../../../../../components/Common";
import { Content } from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer";

const Taxi = () => {
	return (
		<ScrollView style={styles.container}>
			<TopNav>Taxi</TopNav>
			<View style={styles.content}>
				<Content />
			</View>
		</ScrollView>
	);
};

export default Taxi;
