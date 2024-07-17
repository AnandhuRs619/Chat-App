import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setloading] = useState(false);
    const [conversations, setConversations] = useState<ConversationType[]>([]);

    useEffect(() => {
        const getConversations = async () => {
            setloading(true);
            try {
                const res = await fetch("/api/messages/conversations");
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error: any) {
                toast.error(error.message);
            } finally {
                setloading(false);
            }
        };
        getConversations();
    }, []);
    return {conversations, loading}
};

export default useGetConversation;
