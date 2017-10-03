import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Splash',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Splash</Text>
        <Button
          onPress={() => {
            const navigateAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            })
            this.props.navigation.dispatch(navigateAction)
          }}
          title="go to Home"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => {
            const navigateAction = NavigationActions.navigate({
              routeName: 'Chat',
              params: { user: 'Lucy' },
              action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
            })
            this.props.navigation.dispatch(navigateAction)
          }}
          title="go to Chat"
        />
      </View>
    );
  }
}


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


const App = StackNavigator({
  Splash: { screen: SplashScreen },
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default App
