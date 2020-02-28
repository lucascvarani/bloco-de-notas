import AddTask from './AddTask'
import App from './App'
import Task from './Task'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
    Home: {screen: App},
    AddTaskPage: {screen: AddTask},
    Task: {screen: Task},
},
{
    headerMode: 'none',
    mode: 'modal'
}
);

const Routes = createAppContainer(StackNavigator);

export default Routes;