import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const Theme = {
    screen: {
        width: width,
        height: height
    },
    minGap: 5,
    maxGap: 10,
    lineGap: 1,
    leftGap: 15,
    defaultGap: 14,
    defaultSmallGap: 10,
    icon: {
        width: 26,
        height: 26
    },
    defaultColor: '#3db1b2',
    defaultBgColor: '#F8F8F8',
    textColor: '#666',
    titleColor: '#333',
    lineColor: '#ddd'
};
export default Theme;
