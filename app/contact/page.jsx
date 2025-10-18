export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold mb-4">Request a Free Estimate</h1>
      <p className="mb-6">
        Tell us about your lawn or landscaping needs. We’ll get back to you quickly.
      </p>

      {/* Netlify Forms: detected at build time */}
      <form
        name="interest"
        method="POST"
        data-netlify="true"
        className="grid gap-4"
      >
        {/* Required hidden input so Netlify recognizes the form */}
        <input type="hidden" name="form-name" value="interest" />

        <label className="grid gap-1">
          <span>Name</span>
          <input name="name" required className="border p-2 rounded" />
        </label>

        <label className="grid gap-1">
          <span>Email</span>
          <input type="email" name="email" required className="border p-2 rounded" />
        </label>

        <label className="grid gap-1">
          <span>Phone</span>
          <input name="phone" className="border p-2 rounded" />
        </label>

        <label className="grid gap-1">
          <span>Address / City</span>
          <input name="address" className="border p-2 rounded" />
        </label>

        <label className="grid gap-1">
          <span>What are you interested in?</span>
          <textarea name="message" rows={5} required className="border p-2 rounded" />
        </label>

        {/* Basic honeypot (spam trap) */}
        <p className="hidden" aria-hidden="true">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <button type="submit" className="rounded bg-green-700 px-4 py-2 text-white">
          Send
        </button>
      </form>
    </main>
  );
}
