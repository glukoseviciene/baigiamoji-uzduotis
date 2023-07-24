import { StyledApp } from "./App.style";
import ImageSide from "./components/imageSide/ImageSide";
import RegistrationForm from "./components/registrationForm/RegistrationForm";

function App() {
	return (
		<StyledApp>
			<ImageSide />
			<RegistrationForm />
		</StyledApp>
	);
}

export default App;
