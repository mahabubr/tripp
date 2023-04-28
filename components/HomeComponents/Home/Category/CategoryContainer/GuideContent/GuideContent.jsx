import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./GuideContent.style";
import { useGetGuideQuery } from "../../../../../../redux/feature/category/guide/guideApi";
import { useNavigation } from "@react-navigation/native";

const GuideContent = () => {
	const { data } = useGetGuideQuery();

	const Navigate = useNavigation();

	return (
		<View style={styles.content}>
			<FlatList
				keyExtractor={(item) => item._id}
				data={data}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => Navigate.navigate("GuideProfile", { id: item._id })}
						style={styles.container}
						key={item._id}>
						<Image
							style={styles.image}
							source={{ uri: item.image }}
						/>
						<Text style={styles.name}>{item.name}</Text>
						<Text style={styles.loc}>{item.location}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default GuideContent;
