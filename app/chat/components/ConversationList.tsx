"use client";

export default function ConversationList({
  conversations,
  onSelect,
}: {
  conversations: any[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5">

      <h2 className="text-2xl font-bold mb-5">
        Chats
      </h2>

      {conversations.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className="w-full text-left border-b py-4 hover:bg-gray-50"
        >
          Conversation
        </button>
      ))}

    </div>
  );
}