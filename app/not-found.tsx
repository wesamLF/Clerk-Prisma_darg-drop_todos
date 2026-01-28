export default function NotFound() {
  
  return (
    <main className="min-h-[75vh] my-8 flex items-center justify-center bg-base-200 px-6">
      <div className="card bg-base-100 shadow-xl p-10 max-w-md text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-base-content/70 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </main>
  );
}
