export default function Result({ joke }: { joke: string }) {
  if (!joke) return null;

  return (
    <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl w-full max-w-md animate-in fade-in zoom-in duration-300">
      <p className="text-lg text-gray-200 leading-relaxed italic">
        "{joke}"
      </p>
    </div>
  );
}
