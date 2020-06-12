import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen35475Navigator from '../features/BlankScreen35475/navigator';
import CalendarView25474Navigator from '../features/CalendarView25474/navigator';
import Messaging35473Navigator from '../features/Messaging35473/navigator';
import EmailAuth45472Navigator from '../features/EmailAuth45472/navigator';
import CalendarView5468Navigator from '../features/CalendarView5468/navigator';
import Messaging5467Navigator from '../features/Messaging5467/navigator';
import EmailAuth5466Navigator from '../features/EmailAuth5466/navigator';
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
BlankScreen35475: { screen: BlankScreen35475Navigator },
CalendarView25474: { screen: CalendarView25474Navigator },
Messaging35473: { screen: Messaging35473Navigator },
EmailAuth45472: { screen: EmailAuth45472Navigator },
CalendarView5468: { screen: CalendarView5468Navigator },
Messaging5467: { screen: Messaging5467Navigator },
EmailAuth5466: { screen: EmailAuth5466Navigator },
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
