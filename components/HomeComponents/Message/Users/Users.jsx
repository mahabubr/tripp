import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./Users.style";
import { useGetGuideQuery } from "../../../../redux/feature/category/guide/guideApi";
import { useNavigation } from "@react-navigation/native";

const Users = () => {
	const { data } = useGetGuideQuery();

	const Navigate = useNavigation();

	return (
		<View style={{ paddingBottom: 50 }}>
			<FlatList
				keyExtractor={(item) => item._id}
				data={data}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => Navigate.navigate("PersonMessage", { id: item._id })}
						style={styles.container}
						key={item._id}>
						<View style={styles.img_content}>
							<Image
								style={styles.image}
								source={{ uri: item.image }}
							/>
						</View>
						<View style={styles.txt_content}>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.loc}>{item.location}</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default Users;
