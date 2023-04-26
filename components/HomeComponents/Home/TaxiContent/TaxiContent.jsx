import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import React from "react";

import styles from "./TaxiContent.style";
import { useNavigation } from "@react-navigation/native";
import { useGetSortTaxiQuery } from "../../../../redux/feature/category/taxi/taxiApi";

const TaxiContent = () => {
	const Navigate = useNavigation();

	const { data } = useGetSortTaxiQuery();

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
			<View style={styles.content_container}>
				<FlatList
					horizontal
					data={data}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() =>
								Navigate.navigate("TaxiSingleItem", { id: item._id })
							}
							style={styles.text_content}
							key={item._id}>
							<Image
								style={styles.image}
								source={{ uri: item.image }}
							/>
							<View>
								<Text style={styles.locate}>{item.root}</Text>
								<Text style={styles.ratting}>
									★ {item.ratting} / {item.people}
								</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default TaxiContent;
