import { View, Text, TextInput } from "react-native";
// import { StyleSheet } from "react-native";
import { useState } from "react";

export default function CredInput(props) {
	const [isfocused, setIsFocused] = useState(false);
	const [heading, setHeading] = useState("");
	const [validation, setValidation] = useState("");
	
	return (
		<View
			style={{
				flexDirection: "column",
			}}
		>
			<Text
				style={{
					fontSize: 18,
					fontWeight: "bold",
					marginBottom: 10,
					color: "#2B2B2BFF",
				}}
			>
				{props.heading}
			</Text>
			<TextInput
			onChangeText={props.value}
				secureTextEntry={props.obscure === "true"}
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
				placeholder={isfocused ? "" : `Enter your ${props.heading}`}
				style={{
					borderWidth: isfocused ? 2 : 1,
					borderColor: isfocused ? "#00668BFF" : "#333333",
					padding: 10,
					marginBottom: 20,
					height: 50,
					width: "100%",
					borderRadius: 12,
					color: "#939393FF",
				}}
			/>
		</View>
	);
}
