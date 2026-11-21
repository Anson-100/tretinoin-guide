import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export default function Conclusion() {
  return (
    <section id="conclusion" className="scroll-mt-16 bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">The bottom line</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Simple, consistent, and patient wins
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
            For most people, tretinoin plus a gentle cleanser, a moisturizer, and daily sunscreen
            covers the essentials. Give it a few months, ease in slowly, and let the results build.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="#top" size="lg">
              Back to top
            </Button>
            <Button href="#videos" variant="ghostInverse" size="lg">
              Rewatch the videos <span aria-hidden="true">→</span>
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mx-auto mt-16 max-w-3xl rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
        >
          <h3 className="text-sm font-semibold text-white">Disclaimer</h3>
          <p className="mt-2 text-sm/6 text-gray-400">
            This site is for informational purposes only and is not medical advice. Tretinoin is a
            prescription medication. Talk to a dermatologist or other qualified healthcare provider
            before starting, especially if you are pregnant, planning to become pregnant,
            breastfeeding, or have a skin condition.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
