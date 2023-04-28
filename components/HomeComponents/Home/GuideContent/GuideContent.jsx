import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./GuideContent.style";
import { useNavigation } from "@react-navigation/native";
import { useGetSortGuideQuery } from "../../../../redux/feature/category/guide/guideApi";
import { FlatList } from "react-native";
import { Image } from "react-native";

const GuideContent = () => {
	const Navigate = useNavigation();

	const { data } = useGetSortGuideQuery();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<View>
					<Text style={styles.title}>Guide</Text>
					<Text style={styles.sub_title}>Get your greatest guide</Text>
				</View>
				<TouchableOpacity onPress={() => Navigate.navigate("Guide")}>
					<Text style={styles.see_all_txt}>See All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.content}>
				<FlatList
					horizontal
					keyExtractor={(item) => item._id}
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{ marginRight: 30 }}
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
		</SafeAreaView>
	);
};

export default GuideContent;
