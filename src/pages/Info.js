import { IonBadge, IonButton, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonSpinner, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { star, sunny } from 'ionicons/icons';
import { useGetSelectedTheme } from '../store/ThemeStore';
import './Info.css';

const Info = () => {

const currentTheme = useGetSelectedTheme();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Info</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>

				<IonGrid>
					<IonRow className="ion-text-left ion-padding ion-margin-bottom" style={{ backgroundColor: "var(--ion-color-main-light)" }}>
						<IonCol size="12">
							<IonCardSubtitle color="light">Current Theme</IonCardSubtitle>
							<IonCardTitle color="light">{ currentTheme }</IonCardTitle>
							<IonText color="light">
								<p>This is an example showing how to easily implement dynamic themes into an Ionic app. We could use the setProperty method, but you'll notice that we can pass a style object into the IonApp component - I feel like we have more control this way. With this in mind, we can utilise all of the Ionic color CSS variables and custom variables.
                                <br /><br />
                                Check out the <code>setTheme</code> function
                                <br /><br />
                                I haven't over-rode every possible Ionic CSS variable, just a few of the core visually noticeable ones for this example.
                                </p>
							</IonText>
						</IonCol>
					</IonRow>

                    <IonRow className="ion-text-left ion-padding ion-margin-bottom" style={{ backgroundColor: "var(--ion-color-main-light)" }}>
						<IonCol size="12">
							<IonCardSubtitle color="light">Switching themes</IonCardSubtitle>
							<IonCardTitle color="light">Using global state</IonCardTitle>
							<IonText color="light">
								<p>We now know that our overall theme is controlled via a style object, so we can easily store this in state. In this example I'm using Pullstate, and updating the "currentTheme" on each change. I've mimicked an API call from local JSON data, as if it were a customer/client theme or branding.</p>
							</IonText>
						</IonCol>
					</IonRow>

                    <IonButton routerLink="/themes" color="main" expand="full">View Themes &rarr;</IonButton>

				</IonGrid>
			</IonContent>
		</IonPage>
	);
}

export default Info;
