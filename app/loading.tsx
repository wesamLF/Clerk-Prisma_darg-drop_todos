export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[85vh] bg-base-200">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-base-content/70">Loading...</p>
      </div>
    </div>
  );
}