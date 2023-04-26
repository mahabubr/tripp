import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./TaxiSingleItem.style";
import { TopNav } from "../../../../../../../components/Common";
import { useRoute } from "@react-navigation/native";
import { useGetSingleTaxiQuery } from "../../../../../../../redux/feature/category/taxi/taxiApi";
import { TouchableOpacity, Linking } from "react-native";

const TaxiSingleItem = () => {
	const {
		params: { id },
	} = useRoute();

	const { data } = useGetSingleTaxiQuery(id);

	return (
		<View style={styles.container}>
			<TopNav>Taxi Details</TopNav>
			{data && (
				<>
					<Image
						style={styles.image}
						source={{ uri: data.image }}
					/>
					<View style={styles.content_container}>
						<Text style={styles.root}>{data.root}</Text>
						<Text style={styles.ratting}>
							★ {data.ratting} / {data.people}
						</Text>
						<Text style={styles.skill}>Driving : {data.skill} km</Text>
						<Text style={styles.des}>
							A taxi, also known as a taxicab or simply a cab, is a type of
							vehicle for hire with a driver, used by a single passenger or
							small group of passengers, often for a non-shared ride. A taxicab
							conveys passengers between locations of their choice.
						</Text>
						<Text style={styles.driver_txt}>Driver Details</Text>
						<View style={styles.driver_container}>
							<View>
								<Image
									style={styles.driver_img}
									source={{ uri: data.driver[0].driver_image }}
								/>
							</View>
							<View>
								<Text style={styles.driver_name}>{data.driver[0].name}</Text>
								<Text style={styles.driver_phone}>{data.driver[0].phone}</Text>
							</View>
						</View>
						<TouchableOpacity style={styles.btnTouch}>
							<Text
								onPress={() => Linking.openURL(`tel:${data.driver[0].phone}`)}
								style={styles.btnText}>
								Make Call to Driver
							</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</View>
	);
};

export default TaxiSingleItem;
