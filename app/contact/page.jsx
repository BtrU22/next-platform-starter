export const dynamic = 'force-static'; // ensure static HTML at build time

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold mb-4">Request a Free Estimate</h1>
      <p className="mb-6">
        Tell us about your lawn or landscaping needs. We’ll get back to you quickly.
      </p>

      <form
        name="interest"
        method="POST"
        action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="grid gap-4"
      >
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

        {/* Honeypot input (matches netlify-honeypot attr) */}
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
