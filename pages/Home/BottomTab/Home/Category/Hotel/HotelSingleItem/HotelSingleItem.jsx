import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

import styles from "./HotelSingleItem.style";
import { TopNav } from "../../../../../../../components/Common";
import { useGetSingleHotelQuery } from "../../../../../../../redux/feature/category/hotel/hotelApi";
import { useRoute } from "@react-navigation/native";

import ImageView from "react-native-image-viewing";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Ionicons";

import { Rating } from "react-native-ratings";
import colors from "../../../../../../../constants/colors";

const HotelSingleItem = () => {
	const {
		params: { id },
	} = useRoute();

	const { data } = useGetSingleHotelQuery(id);

	const [visible, setIsVisible] = useState(false);

	const images = [
		{
			uri: data?.image,
		},
	];

	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 0.05,
				}}
				style={styles.container}>
				<TopNav>Hotel Details</TopNav>
				{data && (
					<>
						{!visible ? (
							<TouchableOpacity onPress={() => setIsVisible(true)}>
								<Image
									style={styles.image}
									source={{ uri: data.image }}
								/>
							</TouchableOpacity>
						) : (
							<ImageView
								images={images}
								imageIndex={0}
								visible={visible}
								onRequestClose={() => setIsVisible(false)}
							/>
						)}
						<View style={styles.content}>
							<Text style={styles.name}>{data.name}</Text>
							<View style={styles.location_container}>
								<Icon
									name='location-arrow'
									size={15}
									color={colors.dark_gray}
								/>
								<Text style={styles.loc_txt}>{data.location}</Text>
							</View>
							<Rating
								type='star'
								ratingCount={data.ratting}
								imageSize={15}
								ratingColor={colors.light_secondary}
								readonly
								style={styles.ratting}
							/>
							<View style={styles.specialty}>
								<View style={styles.icon_content}>
									<Text style={styles.icon}>{data.ratting}</Text>
									<Text style={styles.icon_txt}>A/R</Text>
								</View>
								<View style={styles.icon_content}>
									<Text style={styles.icon}>{data.person_review}</Text>
									<Text style={styles.icon_txt}>Feedback</Text>
								</View>
								<View style={styles.icon_content}>
									<Text style={styles.icon}>{data.total_room}</Text>
									<Text style={styles.icon_txt}>Rooms</Text>
								</View>
							</View>
							<View style={styles.specialty}>
								<View style={styles.icon_content}>
									<Text style={styles.icon}>{data.swimming_pool}</Text>
									<Text style={styles.icon_txt}>Swimming Pool</Text>
								</View>
								<View style={styles.icon_content}>
									<Text style={styles.icon}>{data.restaurant}</Text>
									<Text style={styles.icon_txt}>Restaurants</Text>
								</View>
							</View>
							<Text style={styles.des}>
								A hotel is an establishment that provides paid lodging on a
								short-term basis. Facilities provided inside a hotel room may
								range from a modest-quality mattress in a small room to large
								suites with bigger, higher-quality beds, a dresser, a
								refrigerator, and other kitchen facilities, upholstered chairs,
								a flat-screen television, and en-suite bathrooms. Small,
								lower-priced hotels may offer only the most basic guest services
								and facilities. Larger, higher-priced hotels may provide
								additional guest facilities such as a swimming pool, a business
								center with computers, printers, and other office equipment,
								childcare, conference and event facilities, tennis or basketball
								courts, gymnasium, restaurants, day spa, and social function
								services. Hotel rooms are usually numbered (or named in some
								smaller hotels and B&Bs)
							</Text>
						</View>
					</>
				)}
			</ScrollView>
			<TouchableOpacity style={styles.btnTouch}>
				<Text style={styles.btnText}>Book Hotel</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HotelSingleItem;
