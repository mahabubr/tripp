import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import React from "react";

import styles from "./HotelContent.style";
import { useNavigation } from "@react-navigation/native";
import { useGetSortHotelQuery } from "../../../../redux/feature/category/hotel/hotelApi";

import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../../../constants/colors";

import { Rating } from "react-native-ratings";

const HotelContent = () => {
	const Navigate = useNavigation();

	const { data } = useGetSortHotelQuery();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContainer}>
				<View>
					<Text style={styles.title}>Hotel</Text>
					<Text style={styles.sub_title}>Find your nearby hotel</Text>
				</View>
				<TouchableOpacity onPress={() => Navigate.navigate("Hotel")}>
					<Text style={styles.see_all_txt}>See All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.content_container}>
				<FlatList
					keyExtractor={(item) => item._id}
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.card_content}
							key={item._id}>
							<View style={styles.image_container}>
								<Image
									style={styles.image}
									source={{ uri: item.image }}
								/>
							</View>
							<View style={styles.text_container}>
								<Text style={styles.name}>{item.name}</Text>
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
									imageSize={15}
									ratingColor={colors.light_secondary}
									readonly
									style={styles.ratting}
								/>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HotelContent;
