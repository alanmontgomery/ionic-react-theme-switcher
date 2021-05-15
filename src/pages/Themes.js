import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark, checkmarkCircle, checkmarkOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import ThemeStore, { setTheme } from '../store/ThemeStore';
import './Themes.css';

const Themes = () => {

	const themes = ThemeStore.useState(s => s.themes );
	const selectedThemeID = ThemeStore.useState(s => s.selectedID );

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Themes</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{/* <ExploreContainer name="Tab 1 page" /> */}

				<IonRow>
					{ themes.map((theme, index) => {

						return (
							<IonCol size="6" onClick={ () => setTheme(theme.file, theme.id) }>
								{ theme.id === selectedThemeID && 
									<div className="selected-theme">
										<IonIcon icon={ checkmark } />
									</div> 
								}
								<img src={ theme.cover } />
							</IonCol>
						);
					})}
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Themes;
