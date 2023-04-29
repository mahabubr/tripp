import { View, Text } from "react-native";
import React from "react";

import styles from "./Notification.style";
import { TopNav } from "../../../../../components/Common";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Notification = () => {
	const data = [
		{
			title: "Sudanese flee to Egypt as Cairo works to avoid ‘refugee crisis’",
			time: "2 days ago",
		},
		{
			title: "Turkey’s Baykar to build new ‘highly autonomous’ combat drone",
			time: "5 days ago",
		},
		{
			title: "Sudan fighting live news: Battles ongoing despite ceasefire",
			time: "3 days ago",
		},
		{
			title: "Why did Iran seize a US-bound oil tanker in the Gulf of Oman?",
			time: "1 days ago",
		},
		{
			title: "Sudan fighting in its 15th day: A list of key events",
			time: "8 days ago",
		},
		{
			title: "Sperm donor who fathered at least 550 kids banned by Dutch court",
			time: "12 days ago",
		},
		{
			title: "For Syrians in Sudan, returning home is not an option",
			time: "9 days ago",
		},
		{
			title: "Reported Ukraine drone strike ignites major fuel blaze on Crimea",
			time: "4 days ago",
		},
		{
			title: "Saudi Arabia, Iran to reopen embassies ‘within days’: Minister",
			time: "6 days ago",
		},
	];

	return (
		<View style={styles.container}>
			<TopNav>Notification</TopNav>
			<View style={styles.content}>
				<FlatList
					keyExtractor={(item) => item.time}
					data={data}
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
