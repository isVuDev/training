import {
    AppRegistry
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';

import App from './app'

const Navigation = StackNavigator({
    App: {
        screen: App
    }
});

AppRegistry.registerComponent('cameraRoll', () => Navigation);