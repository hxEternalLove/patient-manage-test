import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window');
const Theme = {
	screen:{
		width:width,
		height:height
	},
	minGap:5,
	maxGap:10,
	lineGap:1,
	icon: {
		width: 26,
		height: 26,
	},
}
export default Theme;