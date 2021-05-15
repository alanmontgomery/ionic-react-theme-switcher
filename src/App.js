import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { alertOutline, brushOutline, ellipse, filterOutline, handLeftOutline, informationCircle, listOutline, logoBitbucket, pencilOutline, square, squareOutline, star, starOutline, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ThemeStore from './store/ThemeStore';
import Themes from './pages/Themes';
import Examples from './pages/Examples';
import Info from './pages/Info';

const App = () => {

	const theme = ThemeStore.useState(s => s.currentTheme);

  return (
	<IonApp style={ theme ? theme : {} }>
		<IonReactRouter>
		<IonTabs>
			<IonRouterOutlet>
			<Route exact path="/info">
				<Info />
			</Route>
			<Route exact path="/themes">
				<Themes />
			</Route>
			<Route exact path="/examples">
				<Examples />
			</Route>
			<Route exact path="/">
				<Redirect to="/info" />
			</Route>
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
			<IonTabButton tab="tab1" href="/info">
				<IonIcon icon={ informationCircle } />
				<IonLabel>Info</IonLabel>
			</IonTabButton>
			<IonTabButton tab="tab2" href="/themes">
				<IonIcon icon={ brushOutline } />
				<IonLabel>Themes</IonLabel>
			</IonTabButton>
			<IonTabButton tab="tab3" href="/examples">
				<IonIcon icon={ handLeftOutline } />
				<IonLabel>Examples</IonLabel>
			</IonTabButton>
			</IonTabBar>
		</IonTabs>
		</IonReactRouter>
	</IonApp>
	);
}

export default App;
