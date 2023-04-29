import { View, Text } from "react-native";
import React from "react";
import { TopNav } from "../../../../components/Common";

import styles from "./Review.style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import {
	useGetStoryQuery,
	usePostStoryMutation,
} from "../../../../redux/feature/story/storyApi";
import { useUser } from "@clerk/clerk-expo";
import { FlatList } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../../../constants/colors";
import { RefreshControl } from "react-native";
import { useCallback } from "react";

const Review = () => {
	const [postText, setPostText] = useState("");
	const [refreshing, setRefreshing] = useState(false);

	const { user } = useUser();

	const [postStory] = usePostStoryMutation();
	const { data } = useGetStoryQuery();

	const onPressSubmitStory = () => {
		const data = {
			title: postText,
			email: user.emailAddresses[0].emailAddress,
		};
		postStory(data)
			.unwrap()
			.then((data) => {
				if (data.acknowledged) {
					alert("Story Posted");
				}
			});
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<TopNav>Day Yourself</TopNav>
			<View style={styles.content}>
				<View>
					<TextInput
						onChangeText={setPostText}
						multiline
						numberOfLines={4}
						maxLength={200}
						style={styles.input}
						placeholder='Tell your story'
					/>
					<TouchableOpacity
						onPress={onPressSubmitStory}
						style={styles.btnTouch}>
						<Text style={styles.btnText}>POST</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.txt_content}>
					<FlatList
						refreshControl={
							<RefreshControl
								refreshing={refreshing}
								onRefresh={onRefresh}
							/>
						}
						keyExtractor={(item) => item._id}
						data={data}
						renderItem={({ item }) => (
							<View style={styles.cnt}>
								<View
									style={styles.main_content}
									key={item._id}>
									<Text style={styles.email}>{item.email}</Text>
									<Text style={styles.title}>{item.title}</Text>
								</View>
								<View style={styles.icon_content}>
									<Icon
										name='heart'
										size={25}
										color={colors.light_secondary}
									/>
									<Icon
										name='comment'
										size={25}
										color={colors.dark_gray}
									/>
									<Icon
										name='share'
										size={25}
										color={colors.sec_primary}
									/>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Review;
