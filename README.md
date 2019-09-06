
# React Native Common Icon

## Getting started
```bash
yarn add react-native-commonicon
```

Generate ttf file
  if ("react-native-vector-icons" in package.json){
    ```bash
    react-native link
    ```
  }
  else{
    Insert into package.json
    "dependencies": {
    ...
    "react-native-vector-icons": "^6.6.0",
    ...
    }
    ```bash
    react-native link
    ```
    Delete <font color=#ff0000>"react-native-vector-icons": "^6.6.0",<font> from package.json
  }

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
| iconType | YES | string | none | |
| iconName | YES | string | none | |
| touchable | NO | bool | true | |
| onPress | NO | func | none | |
| color | NO | string | '#FFF' | |
| size | NO | number | 20 | |
| title | NO |string | none | |
| titleSize | NO | number | 14 | |
| style | NO | array or object | none | |
