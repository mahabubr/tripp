import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	ActivityIndicator,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

import styles from "./Category.style";
import { useGetCategoryQuery } from "../../../../redux/feature/category/categoryApi";
import colors from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
	const { error, data, isLoading } = useGetCategoryQuery();

	const Navigate = useNavigation();

	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("http://10.0.2.2:5000/category")
	// 		.then((res) => res.text())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// }, []);

	if (isLoading) {
		<ActivityIndicator
			size='large'
			color={colors.primary}
			style={styles.indicator}
		/>;
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				horizontal
				bouncesZoom={true}
				data={data}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => Navigate.navigate(item.name)}
						style={styles.itemContainer}
						key={item._id}>
						<View style={styles.image_container}>
							<Image
								style={styles.image}
								source={{ uri: item.image }}
							/>
						</View>
						<Text style={styles.itemTxt}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
};

export default Category;
