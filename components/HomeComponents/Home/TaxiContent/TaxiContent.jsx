import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./TaxiContent.style";
import { useNavigation } from "@react-navigation/native";

const TaxiContent = () => {
	const Navigate = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<View>
					<Text style={styles.title}>Taxi</Text>
					<Text style={styles.sub_title}>Find your nearby taxi service</Text>
				</View>
				<TouchableOpacity onPress={() => Navigate.navigate("Taxi")}>
					<Text style={styles.see_all_txt}>See All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.content_container}></View>
		</SafeAreaView>
	);
};

export default TaxiContent;
