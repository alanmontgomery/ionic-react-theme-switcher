import { IonBadge, IonButton, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonSpinner, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { star, sunny } from 'ionicons/icons';
import { useGetSelectedTheme } from '../store/ThemeStore';
import './Examples.css';

const Examples = () => {

const currentTheme = useGetSelectedTheme();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Examples</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>

				<IonGrid>
					<IonRow className="ion-text-center ion-padding ion-margin-bottom" style={{ backgroundColor: "var(--ion-color-main-light)" }}>
						<IonCol size="12">
							<IonCardSubtitle color="light">Current Theme</IonCardSubtitle>
							<IonCardTitle color="light">{ currentTheme }</IonCardTitle>
							<IonText color="light">
								<p>Here are a few examples of how the theme looks on stock Ionic components.</p>
							</IonText>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Buttons</IonCardSubtitle>
							<IonButton color="main">Main Color button</IonButton>
							<IonButton color="main-light">Light Color button</IonButton>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Toggle</IonCardSubtitle>

							<IonItem lines="none">
								<IonLabel>Toggle it on/off</IonLabel>
								<IonToggle />
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Select</IonCardSubtitle>
							<IonItem lines="none">
								<IonLabel>Pick an option</IonLabel>
								<IonSelect placeholder="Select...">
									<IonSelectOption value="1">Option 1</IonSelectOption>
									<IonSelectOption value="2">Option 2</IonSelectOption>
								</IonSelect>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Badge</IonCardSubtitle>
							<IonItem lines="none">
								<IonLabel>Awesome badge!!</IonLabel>
								<IonBadge>
									<IonIcon icon={ star } />&nbsp; Woohoo!
								</IonBadge>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Spinner</IonCardSubtitle>
							<IonItem lines="none">
								<IonLabel>Loading, please wait...</IonLabel>
								<IonBadge>
									<IonSpinner name="bubbles" />
								</IonBadge>
							</IonItem>
						</IonCol>
					</IonRow>

					<IonRow className="ion-text-center">
						<IonCol size="12">
							<IonCardSubtitle>Range</IonCardSubtitle>
							<IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="main">
								<IonIcon icon={ sunny } size="small" slot="start" />
								<IonIcon icon={ sunny } slot="end" />
							</IonRange>
						</IonCol>
					</IonRow>

				</IonGrid>
			</IonContent>
		</IonPage>
	);
}

export default Examples;
