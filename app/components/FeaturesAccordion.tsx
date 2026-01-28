
const FeaturesAccordion = () => {
  return (
   <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why You'll Love This App
      </h2>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="features" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            🔐 Secure Authentication
          </div>
          <div className="collapse-content">
            <p>
              Your data is protected with modern authentication — no passwords stored,
              no stress.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="features" />
          <div className="collapse-title text-xl font-medium">
            🧲 Drag & Drop Workflow
          </div>
          <div className="collapse-content">
            <p>
              Move tasks between incomplete and completed instantly with smooth drag & drop.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="features" />
          <div className="collapse-title text-xl font-medium">
            ⚡ Fast & Simple
          </div>
          <div className="collapse-content">
            <p>
              No clutter. No distractions. Just a clean experience to help you stay focused.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="features" />
          <div className="collapse-title text-xl font-medium">
            ☁️ Cloud Sync
          </div>
          <div className="collapse-content">
            <p>
              Access your todos anywhere — desktop, tablet, or phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesAccordion