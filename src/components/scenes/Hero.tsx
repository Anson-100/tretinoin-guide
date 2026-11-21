import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10">
              For informational purposes only — not medical advice.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            The simplest base for better skin
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Whether your goal is clearer skin, anti-aging, or just looking your best, tretinoin is
            one of the most studied skincare ingredients there is. Here&apos;s what it does, what
            it costs you, and how to keep a routine dead simple.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="#information" size="lg">
              Learn the basics
            </Button>
            <Button href="#videos" variant="ghost" size="lg">
              Watch doctors explain it <span aria-hidden="true">→</span>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
