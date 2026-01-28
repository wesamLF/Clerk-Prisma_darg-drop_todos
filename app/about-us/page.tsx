export default function AboutUs() {
  return (
    <section className="py-24 my-20 bg-base-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">About TodoJoy</h2>
        <p className="text-base-content/70 text-lg mb-12">
          TodoJoy is a playful and simple productivity app designed to make your day more organized 
          and calm. Stay productive without the stress — track your tasks, drag them around, and enjoy completing them.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center text-white" style={{ backgroundColor: "var(--p)" }}>
            <h3 className="text-xl font-semibold mb-2">Simple & Fun</h3>
            <p>
              No clutter, no pressure. Just a delightful interface for managing your tasks.
            </p>
          </div>

          <div className="card p-6 text-center text-white" style={{ backgroundColor: "var(--s)" }}>
            <h3 className="text-xl font-semibold mb-2">Drag & Drop</h3>
            <p>
              Move tasks between Incomplete and Completed with ease and visual satisfaction.
            </p>
          </div>

          <div className="card p-6 text-center text-white" style={{ backgroundColor: "var(--p)" }}>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p>
              Your todos are private and securely stored, so you can focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
