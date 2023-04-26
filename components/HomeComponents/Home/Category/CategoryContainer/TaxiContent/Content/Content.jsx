import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./Content.style";
import { useGetTaxiQuery } from "../../../../../../../redux/feature/category/taxi/taxiApi";
import { useNavigation } from "@react-navigation/native";

const Content = () => {
	const { data } = useGetTaxiQuery();

	const Navigate = useNavigation();

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				data={data}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							Navigate.navigate("TaxiSingleItem", { id: item._id })
						}
						style={styles.text_content}
						key={item._id}>
						<View style={styles.image_container}>
							<Image
								style={styles.image}
								source={{ uri: item.image }}
							/>
						</View>
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
	);
};

export default Content;
