// global.d.ts is a special file. Types added here can be used globally in the project without importing them.

type ConversationType = {
    id: string;
    fullname: string;
    profilePic: string;
};

type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt : string;
    ShouldShake? : boolean;
};