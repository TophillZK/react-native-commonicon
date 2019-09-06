import React, {
	Component,
} from 'react';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

/**
 * 通用Icon
 * 用法: <CommonIcon iconType='FontAwesome'iconName='search'  title='Tophill' color='#313748' style={{margin:40}} onPress={()=>console.log('CommonIcon Text')}/>
 */
export default class CommonIcon extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		// if (__DEV__)
		//     console.log('++++++++++', 'CommonIcon');

		if (this.props.touchable)
			return (
				<View style={this.props.style}>
					<TouchableOpacity onPress={this.props.onPress} style={{justifyContent: 'center',alignItems: 'center'}}>
						<InnerIcon iconType={this.props.iconType} iconName={this.props.iconName} color={this.props.color} size={this.props.size}/>
						{this.props.title&&(<Text style={[{color: this.props.color}, {fontSize:this.props.titleSize}]}>{this.props.title}</Text>)}
					</TouchableOpacity>
				</View>
			);
		else
			return (
				<View style={[{justifyContent: 'center',alignItems: 'center'},this.props.style]}>
					<InnerIcon iconType={this.props.iconType} iconName={this.props.iconName} color={this.props.color} size={this.props.size}/>
					{this.props.title&&(<Text style={[{color: this.props.color}, {fontSize:this.props.titleSize}]}>{this.props.title}</Text>)}
				</View>
			);
	}
}

CommonIcon.propTypes = {
	iconType: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	touchable: PropTypes.bool,
	onPress: PropTypes.func,
	color: PropTypes.string,
	size: PropTypes.number,
	title: PropTypes.string,
	titleSize: PropTypes.number,
	style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
CommonIcon.defaultProps = {
	touchable: true,
	color:'#FFF',
	size: 20,
	titleSize: 14,
};

class InnerIcon extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		switch (this.props.iconType) {
			case 'Empty':
				return (
					<View style={{width:this.props.size}}/>
				);
				break;
			case 'Entypo':
				return (
					<Entypo name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'EvilIcons':
				return (
					<EvilIcons name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'Feather':
				return (
					<Feather name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'FontAwesome':
				return (
					<FontAwesome name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'Foundation':
				return (
					<Foundation name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'Ionicons':
				return (
					<Ionicons name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'MaterialIcons':
				return (
					<MaterialIcons name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'MaterialCommunityIcons':
				return (
					<MaterialCommunityIcons name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'Octicons':
				return (
					<Octicons name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
			case 'Zocial':
				return (
					<Zocial name={this.props.iconName} size={this.props.size} color={this.props.color}/>
				);
				break;
		}


	}
}