
# React Native Common Icon

## Getting started
```bash
yarn add react-native-commonicon
```

Generate ttf file
```bash
  if ("react-native-vector-icons" in package.json){
    react-native link
  }
  else{
    Insert into package.json
    "dependencies": {
    ...
    "react-native-vector-icons": "^6.6.0",
    ...
    }
    react-native link
    Delete react-native-vector-icons": "^6.6.0" from package.json
  }
```

## Usage
```javascript
import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import CommonIcon from 'react-native-commonicon';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <CommonIcon iconType='FontAwesome' iconName='search' title='Tophill' color='#313748' style={{margin:40}} onPress={()=>console.log('CommonIcon Text')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
```
### Component props
| Prop | Required | Type | default | description |
| ---- | ---- | ----| ---- | ---- |
| iconType | YES | string | none | Entypo,EvilIcons,Feather,FontAwesome,Foundation,Ionicons,MaterialIcons,MaterialCommunityIcons,Octicons,Zocial |
| iconName | YES | string | none | |
| touchable | NO | bool | true | |
| onPress | NO | func | none | |
| color | NO | string | '#FFF' | |
| size | NO | number | 20 | |
| title | NO |string | none | |
| titleSize | NO | number | 14 | |
| style | NO | array or object | none | |
