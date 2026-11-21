import FadeIn from "@/components/FadeIn";

const benefits = [
  {
    title: "Speeds up cell turnover",
    description:
      "Tretinoin is a retinoid (a vitamin A derivative) that encourages skin to shed and renew itself faster, which helps smooth rough texture.",
  },
  {
    title: "Clears and prevents acne",
    description:
      "Faster turnover helps keep pores from clogging. It's been prescribed for acne for decades.",
  },
  {
    title: "Softens fine lines over time",
    description:
      "With consistent long-term use, it's shown to support collagen and improve the look of fine lines and sun damage.",
  },
  {
    title: "Evens out tone",
    description:
      "It can gradually fade dark spots and uneven pigmentation, giving skin a more even look.",
  },
];

const drawbacks = [
  {
    title: "An adjustment period",
    description:
      "Dryness, flaking, redness, and stinging are common in the first weeks while your skin adjusts.",
  },
  {
    title: "Possible early breakouts",
    description:
      "Some people get a temporary flare of breakouts (often called the “purge”) when they start.",
  },
  {
    title: "More sun sensitivity",
    description:
      "Your skin burns more easily, so daily sunscreen stops being optional.",
  },
  {
    title: "Prescription and patience",
    description:
      "In the US it requires a prescription, it isn't recommended during pregnancy, and results take months, not weeks.",
  },
];

const routine = {
  morning: ["Gentle cleanser (or just water)", "Moisturizer", "Sunscreen, SPF 30 or higher"],
  night: [
    "Gentle cleanser",
    "Wait until skin is fully dry",
    "A pea-sized amount of tretinoin for the whole face",
    "Moisturizer",
  ],
};

const tips = [
  "Start 2–3 nights a week and build up as your skin tolerates it.",
  "Begin with a low strength. Stronger isn't better at the start.",
  "Skip other strong actives (acids, scrubs) until your skin has adjusted.",
  "Talk to a dermatologist or telehealth provider about whether it's right for you.",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-indigo-600">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-amber-500">
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Information() {
  return (
    <section id="information" className="scroll-mt-16 bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">The basics</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            What tretinoin is, and why it works
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Tretinoin is a prescription retinoid. Instead of masking problems, it changes how your
            skin behaves over time. That&apos;s why it&apos;s a strong foundation to build the rest
            of a routine around.
          </p>
        </FadeIn>

        {/* Benefits + drawbacks */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <FadeIn className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
            <dl className="mt-6 space-y-6">
              {benefits.map((item) => (
                <div key={item.title} className="flex gap-x-3">
                  <CheckIcon />
                  <div>
                    <dt className="font-semibold text-gray-900">{item.title}</dt>
                    <dd className="mt-1 text-sm/6 text-gray-600">{item.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Drawbacks</h3>
            <dl className="mt-6 space-y-6">
              {drawbacks.map((item) => (
                <div key={item.title} className="flex gap-x-3">
                  <AlertIcon />
                  <div>
                    <dt className="font-semibold text-gray-900">{item.title}</dt>
                    <dd className="mt-1 text-sm/6 text-gray-600">{item.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        {/* Simple routine */}
        <FadeIn className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Keep it simple</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            A routine you&apos;ll actually stick to
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
          {(
            [
              ["Morning", routine.morning],
              ["Night", routine.night],
            ] as const
          ).map(([label, steps], i) => (
            <FadeIn
              key={label}
              delay={i * 0.1}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-x-3 text-sm/6 text-gray-600">
                    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </FadeIn>
          ))}
        </div>

        {/* Starting out */}
        <FadeIn className="mx-auto mt-12 max-w-2xl rounded-2xl bg-indigo-600 p-8 text-white lg:max-w-4xl">
          <h3 className="text-lg font-semibold">Start low, go slow</h3>
          <ul className="mt-4 space-y-3 text-sm/6 text-indigo-100">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-x-3">
                <span aria-hidden="true" className="text-white">
                  •
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
