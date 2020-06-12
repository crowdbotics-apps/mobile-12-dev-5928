import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView5468Navigator from '../features/CalendarView5468/navigator';
import Messaging5467Navigator from '../features/Messaging5467/navigator';
import EmailAuth5466Navigator from '../features/EmailAuth5466/navigator';
import Messaging5461Navigator from '../features/Messaging5461/navigator';
import CalendarView5459Navigator from '../features/CalendarView5459/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView5468: { screen: CalendarView5468Navigator },
Messaging5467: { screen: Messaging5467Navigator },
EmailAuth5466: { screen: EmailAuth5466Navigator },
Messaging5461: { screen: Messaging5461Navigator },
CalendarView5459: { screen: CalendarView5459Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
