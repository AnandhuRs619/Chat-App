
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";


const Home = () => {
	return (
		<div className='flex h-[80vh] w-full md:max-w-screen-md md:h-[550px]bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50  border-gray-500 border-[.1px]'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
