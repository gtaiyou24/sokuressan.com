import GenerateMessageForm from "@/features/generate/generate-message-form";

export default function HomePage() {
  return (
      <div className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-3xl max-w-[708px] font-bold animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          AI を使って返信文を生成
        </h1>

        <div className="max-w-xl w-full mt-10 animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
            <GenerateMessageForm />
        </div>
      </div>
  );
}
