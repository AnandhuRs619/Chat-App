const Conversation = ({ conversation ,emoji}: { conversation: ConversationType ,emoji : string}) => {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
				<div className='avatar online'>
					<div className='w-8 md:w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200 text-sm md:text-md'>{conversation.fullname}</p>
						<span className='text-xl hidden md:inline-block'>{emoji}</span>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
	);
};
export default Conversation;
