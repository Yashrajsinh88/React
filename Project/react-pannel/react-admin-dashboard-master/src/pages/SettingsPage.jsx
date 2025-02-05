import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import Bars from "./Bars";

const SettingsPage = () => {
	return (
		<div className='flex bg-gray-900 text-gray-100 overflow-auto relative z-10 bg-gray-900'>
			<Bars/>
			<main className='max-w-4xl w-full mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;
