import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { PhoneCall, Video, MoreHorizontal, MessageCircle } from 'lucide-react';
// import { MessageCircle } from "lucide-react";

const MessageContainer = () => {
   const {selectedConversation}=useConversation()
	return (
	
<div className='w-full flex flex-col'>
 {!selectedConversation ? (<NoChatSelected/>):(
   <>
   {/* Header */}
   <div className='bg-slate-500 px-4 py-2 mb-2 flex items-center gap-x-4'>
     <div className='hidden md:block chat-image avatar'>
       <div className='w-6 md:w-10 rounded-full'>
         <img alt='Tailwind CSS chat bubble component' src={"/bg.jpg"} />
       </div>
     </div>
     <span className='text-gray-900 font-bold'>John Doe</span>
     <div className='flex ml-auto items-center gap-x-2'>
       <PhoneCall className='w-5 h-5 text-gray-900 cursor-pointer' />
       <Video className='w-5 h-5 text-gray-900 cursor-pointer' />

       {/* Dropdown for More icon */}
       <div className="dropdown dropdown-end">
         <label tabIndex={0} className='cursor-pointer'>
           <MoreHorizontal className='w-5 h-5 text-gray-900' />
         </label>
         <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-30">
           <li><a>Block</a></li>
           <li><a>Unblock</a></li>
         </ul>
       </div>
     </div>
   </div>

   <Messages />
   <MessageInput />
 </>
 )}
</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser?.fullname} ❄</p>
				<p>Select a chat to start messaging</p>
				<MessageCircle className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
