import { View, Text } from "react-native";
import React from "react";

import styles from "./Notification.style";
import { TopNav } from "../../../../../components/Common";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import notification from "../../../../../utils/notification";

const Notification = () => {
	return (
		<View style={styles.container}>
			<TopNav>Notification</TopNav>
			<View style={styles.content}>
				<FlatList
					keyExtractor={(item) => item.time}
					data={notification}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							style={styles.txt}
							key={index}>
							<Text style={styles.title}>{item.title}</Text>
							<Text>{item.time}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default Notification;
