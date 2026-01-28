export default function CTAsection() {
  return (
  <section className="py-44 relative">
  <div className="max-w-4xl mx-auto px-6 relative">

    {/* Glows outside card */}
    <div className="absolute -top-6 -right-2 w-16 h-16 bg-primary/80 rounded-full blur-2xl pointer-events-none"></div>
    <div className="absolute bottom-0 -left-6 w-20 h-20 bg-primary/80 rounded-full blur-3xl pointer-events-none"></div>

    <div className="relative card bg-base-100 p-10 text-center z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Your calm productivity starts here ✨
      </h2>

      <p className="text-base-content/70 mb-8 max-w-xl mx-auto">
        No pressure. No clutter. Just a simple place to organize your thoughts
        and get things done — one task at a time.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a href="/signup" className="btn btn-primary btn-lg">
          Create Free Account
        </a>
        <a href="/signin" className="btn btn-ghost btn-lg">
          I Already Have One
        </a>
      </div>
    </div>
  </div>
</section>


  );
}
