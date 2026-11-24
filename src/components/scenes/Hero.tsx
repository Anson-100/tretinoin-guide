import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: 1,
    label: "Cleanse",
    middle: null,
    // Lowest tile — steps rise left to right.
    column: "pt-16 sm:pt-80 lg:pt-36 xl:pt-80",
  },
  {
    number: 2,
    label: "Treat",
    middle: "Tretinoin",
    column: "pt-8 sm:pt-52 lg:pt-36",
  },
  {
    number: 3,
    label: "Protect",
    middle: null,
    column: "pt-0",
  },
];

function StepTile({
  number,
  label,
  middle,
}: {
  number: number;
  label: string;
  middle: string | null;
}) {
  return (
    <div className="relative flex aspect-2/3 w-full flex-col rounded-xl bg-white p-3 shadow-lg sm:p-5 dark:bg-stone-900">
      <div className="flex items-baseline gap-1.5 sm:gap-2">
        <span className="text-3xl font-semibold tracking-tight text-sky-600 sm:text-6xl dark:text-sky-400">
          {number}
        </span>
        <span className="text-sm font-semibold text-gray-900 sm:text-xl dark:text-white">{label}</span>
      </div>
      {/* Middle: the product for this step, or a "?" when it's up to you. */}
      <div className="flex flex-1 items-center justify-center">
        {middle ? (
          <span className="text-sm font-semibold text-gray-900 sm:text-xl dark:text-white">
            {middle}
          </span>
        ) : (
          <QuestionMarkCircleIcon
            aria-label="Your choice"
            className="size-10 text-gray-400 sm:size-16 dark:text-stone-500"
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-sky-300 to-sky-600 opacity-30"
        />
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <FadeIn className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                  Tretinoin
                </h1>
                <span className="text-lg font-medium text-gray-600 sm:text-2xl dark:text-gray-400">
                  <span className="sr-only">Pronounced </span>/ TRET-ih-no-in /
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-300">
                  Learn about tretinoin to get a mental model for skincare. Tretinoin is a good thing
                  to build a routine around and then you can fill in the other two blanks with
                  products of your choice.
                </p>
              </FadeIn>
            </div>

            {/* Step tiles: shrink to fit on mobile so nothing is cropped; fixed w-44 from sm up. */}
            <div className="mt-14 flex justify-center gap-4 sm:-mt-44 sm:justify-start sm:gap-8 sm:pl-20 lg:mt-0 lg:pl-0">
              {steps.map((step, i) => (
                <FadeIn
                  key={step.number}
                  delay={0.15 + i * 0.1}
                  className={`max-w-44 min-w-0 flex-1 sm:w-44 sm:flex-none ${step.column}`}
                >
                  <StepTile number={step.number} label={step.label} middle={step.middle} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
