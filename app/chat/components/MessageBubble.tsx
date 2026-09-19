type MessageBubbleProps = {
  mine: boolean;
  message: string;
};

export default function MessageBubble({
  mine,
  message,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex ${
        mine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 ${
          mine
            ? "bg-blue-700 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
