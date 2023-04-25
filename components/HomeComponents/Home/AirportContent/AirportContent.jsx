import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from "react-native";
import React from "react";

import { Rating } from "react-native-ratings";

import styles from "./AirportContent.style";
import { useGetSortAirportQuery } from "../../../../redux/feature/category/airport/airportApi";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const AirportContent = () => {
	const { data, isLoading, error } = useGetSortAirportQuery();

	const Navigate = useNavigation();

	if (isLoading) {
		<ActivityIndicator
			size='large'
			color={colors.primary}
			style={styles.indicator}
		/>;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<View>
					<Text style={styles.title}>Airport</Text>
					<Text style={styles.sub_title}>Find your nearby airport</Text>
				</View>
				<TouchableOpacity onPress={() => Navigate.navigate("Airport")}>
					<Text style={styles.see_all_txt}>See All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.content_container}>
				<FlatList
					data={data}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() =>
								Navigate.navigate("AirportSingleItem", { id: item._id })
							}
							style={styles.item_container}
							key={item._id}>
							<Image
								style={styles.image}
								source={{ uri: item.image }}
							/>
							<Text style={styles.item_title}>{item.name}</Text>
							<View style={styles.location_container}>
								<Icon
									name='location-arrow'
									size={15}
									color={colors.dark_gray}
								/>
								<Text style={styles.loc_txt}>{item.location}</Text>
							</View>
							<Rating
								type='star'
								ratingCount={item.ratting}
								imageSize={20}
								readonly
								style={styles.ratting}
							/>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default AirportContent;
