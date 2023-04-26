import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useGetSingleAirportQuery } from "../../../../../../../redux/feature/category/airport/airportApi";

import styles from "./AirportSingleItem.style";
import { TopNav } from "../../../../../../../components/Common";
import { Image } from "react-native";

import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../../../../../constants/colors";
import { ScrollView } from "react-native";
import { TouchableOpacity, FlatList } from "react-native";

const AirportSingleItem = () => {
	const {
		params: { id },
	} = useRoute();

	const { data } = useGetSingleAirportQuery(id);

	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 0.05,
					paddingBottom: 50,
				}}
				style={styles.container}>
				<TopNav>Airport Details</TopNav>
				{data && (
					<View>
						<Image
							style={styles.image}
							source={{ uri: data.image }}
						/>
						<View style={styles.content_container}>
							<Text style={styles.title}>{data.name}</Text>
							<Rating
								type='star'
								ratingCount={data.ratting}
								imageSize={20}
								readonly
								style={styles.ratting}
							/>
							<View style={styles.location_container}>
								<Icon
									name='location-arrow'
									size={30}
									color={colors.dark_gray}
								/>
								<Text style={styles.loc_txt}>{data.location}</Text>
							</View>
							<Text style={styles.flight}>
								Monthly Flight : {data.monthly_flight}
							</Text>
							<Text style={styles.flight}>
								Daily Passenger : {data.daily_passenger}
							</Text>
							<Text style={styles.des}>
								Smaller or less-developed airfields, which represent the vast
								majority, often have a single runway shorter than 1,000 m (3,300
								ft). Larger airports for airline flights generally have paved
								runways of 2,000 m (6,600 ft) or longer. Skyline Airport in
								Inkom, Idaho, has a runway that is only 122 m (400 ft) long.[8]
							</Text>
							<View style={styles.flight_container}>
								<Text style={styles.flight_txt}>Available Flights</Text>
								<FlatList
									keyExtractor={(item) => item.name}
									data={data.flights}
									renderItem={({ item, index }) => (
										<TouchableOpacity
											style={styles.flight_content}
											key={index}>
											<Text style={styles.flightContentTitle}>
												{item.flight_name}
											</Text>
											<Text style={styles.flight_container_sub_title}>
												• $ {item.price}
											</Text>
											<Text style={styles.flight_container_sub_title}>
												• Locate : {item.to_locate}
											</Text>
											<Text style={styles.flight_container_sub_title}>
												• time : {item.time}
											</Text>
										</TouchableOpacity>
									)}
								/>
							</View>
						</View>
					</View>
				)}
			</ScrollView>
			<View>
				<TouchableOpacity
					onPress={() => {
						alert("Pilot Now Sleeping");
					}}
					style={styles.btnTouch}>
					<Text style={styles.btnText}>Call Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AirportSingleItem;
