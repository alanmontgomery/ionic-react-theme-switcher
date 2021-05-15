import { Store } from "pullstate";

const ThemeStore = new Store({
    
    selectedID: "",
    currentTheme: {},
    themes: [
        {
            id: 1,
            name: "Leafy Green",
            file: "leafygreen.json",
            cover: "/themes/covers/leafygreen.png"
        },
        {
            id: 2,
            name: "Moody Blue",
            file: "moodyblue.json",
            cover: "/themes/covers/moodyblue.png"
        },
        {
            id: 3,
            name: "Earthy Tones",
            file: "earthytones.json",
            cover: "/themes/covers/earthytones.png"
        },
        {
            id: 4,
            name: "Peely Orange",
            file: "peelyorange.json",
            cover: "/themes/covers/peelyorange.png"
        },
        {
            id: 5,
            name: "Firey Red",
            file: "fireyred.json",
            cover: "/themes/covers/fireyred.png"
        },
        {
            id: 6,
            name: "Coffee Brown",
            file: "coffeebrown.json",
            cover: "/themes/covers/coffeebrown.png"
        }
    ]
});

export default ThemeStore;

const buildTheme = theme => {

	const appTheme = {

		"--ion-toolbar-background": theme.toolbar_background_color,
		"--ion-tab-bar-background": theme.tab_bar_background_color,
		"--ion-toolbar-color": theme.toolbar_color,
		"--ion-tab-bar-color": theme.tab_bar_color,
		"--ion-tab-bar-color-selected": theme.tab_bar_activated_color,

        "--ion-color-main-light": theme.light_color,
		"--ion-color-main-light-shade": theme.light_color_shade,
		"--ion-color-main-light-tint": theme.light_color_tint,

		"--ion-color-main-color": theme.main_color,

		//	Set primary to be the main color as well
		"--ion-color-primary": theme.main_color,
		"--ion-color-main-color-shade": theme.main_color_shade,
		"--ion-color-main-color-tint": theme.main_color_tint
	};
	
	return appTheme;
}

export const useGetSelectedTheme = () => {

    const themes = ThemeStore.useState(s => s.themes);
    const selectedID = ThemeStore.useState(s => s.selectedID);
    var themeName = "Default";

    if (selectedID) {
        
        const theme = themes.filter(t => t.id === selectedID);
        themeName = theme ? theme[0].name : false;
    }

    return themeName;
}

export const setTheme = async (file, id) => {

	const response = await fetch(`/themes/${ file }`);
	const data = await response.json();

	const theme = buildTheme(data);
	ThemeStore.update(s => { s.currentTheme = theme });
	ThemeStore.update(s => { s.selectedID = id });


	//	We could also override the style properties
	//	Using the setProperty method
	//	But i feel, we have more control using global state
	//	see below:

	// for (var themeVar in theme) {

	//     document.documentElement.style.setProperty(themeVar, theme[themeVar]);
	// }
}