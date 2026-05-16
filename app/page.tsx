export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          AI-Powered LinkedIn Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict which posts will{' '}
          <span className="text-[#58a6ff]">go viral</span>{' '}before posting
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your LinkedIn draft, get an instant engagement score, and receive AI suggestions to maximize reach — before you hit publish.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $12/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Mock preview */}
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-3">Sample Prediction</p>
          <p className="text-[#c9d1d9] text-sm mb-4 italic">
            "5 lessons I learned after 3 years of building in public that nobody talks about..."
          </p>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1 bg-[#0d1117] rounded-full h-3">
              <div className="bg-[#58a6ff] h-3 rounded-full" style={{width: '82%'}}></div>
            </div>
            <span className="text-[#58a6ff] font-bold text-lg">82</span>
            <span className="text-[#6e7681] text-sm">/100</span>
          </div>
          <p className="text-xs text-[#3fb950]">+ Strong hook detected &nbsp;·&nbsp; + Personal story format &nbsp;·&nbsp; ⚠ Add a clear CTA</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">✓</span> Unlimited post predictions</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">✓</span> AI improvement suggestions</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">✓</span> Engagement score history</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">✓</span> Hook & CTA analysis</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">✓</span> Best time to post insights</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the engagement prediction work?</h3>
            <p className="text-[#8b949e] text-sm">Our AI analyzes your post against thousands of high-performing LinkedIn posts, scoring factors like hook strength, readability, emotional tone, structure, and call-to-action clarity to generate a predictive engagement score.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Do I need to connect my LinkedIn account?</h3>
            <p className="text-[#8b949e] text-sm">No. Simply paste your draft text into the editor. We never require access to your LinkedIn account, keeping your data private and the setup instant.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center pb-10 text-[#6e7681] text-xs">
        © {new Date().getFullYear()} LinkedIn Engagement Predictor. All rights reserved.
      </footer>
    </main>
  )
}
