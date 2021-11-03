const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Rr',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Rrrrrr',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 30 }
  }
});

export default createAppContainer(HomeStack);
