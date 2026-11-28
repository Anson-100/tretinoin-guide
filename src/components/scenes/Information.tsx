import Image from "next/image";
import {
  ArrowDownIcon,
  CheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Badge from "@/components/Badge";
import FadeIn from "@/components/FadeIn";

const points = [
  {
    title: "Cleanse.",
    color: "text-amber-600 dark:text-amber-400",
    body: "Pollution in the air, dirty pillowcases (as mentioned above), touching our face after touching everything else. As a result of going about our business and traveling to our destinations, our skin gets dirty. We need to clean it with a cleanser of some sort.",
  },
  {
    title: "Treat.",
    color: "text-sky-600 dark:text-sky-400",
    body: "This step is where the magic happens. This step is where the transformation happens. This step is what probably 90% of the million products out there target. The main product you should use for this step is Tretinoin and it should be applied at night since it makes your skin sensitive to sunlight.",
  },
  {
    title: "Protect.",
    color: "text-emerald-600 dark:text-emerald-400",
    body: "After cleaning your skin to make it not dirty and putting something on your skin to make it look better, you need to protect this investment and lock in the changes. This is accomplished with moisturizers and sunscreens.",
  },
];

const retinoidEffects = [
  {
    title: "Boost collagen production.",
    body: "Collagen is a protein in your skin's deeper layer. It keeps skin firm, smooth, and full. Your body starts making less of it in your mid-20s, and sun exposure breaks it down at every age. Retinoids help your skin make more collagen. That makes it as much about prevention as repair: starting earlier means protecting the collagen you have instead of trying to rebuild it later.",
  },
  {
    title: "Speed up cell turnover.",
    body: "The outer layer of your skin is always renewing itself. New cells form underneath, rise to the surface, and the old cells slough off onto your clothes or bedding or go down the shower drain. When this process is sluggish or uneven, dead cells build up on the surface and stick together inside pores. The result is clogs, breakouts, rough texture, and a dull complexion. Retinoids speed up and normalize this cycle, which keeps pores clear and skin smoother and brighter. Faster turnover also means pigmented cells shed sooner, so dark spots, uneven tone, and leftover acne marks fade faster. That's why it's been a go-to acne treatment for decades, long before anyone used it for wrinkles.",
  },
];

// Feed: how vitamin A derivatives convert in the skin, ending at the active form.
const retinoidConversion = [
  {
    name: "Retinyl esters",
    stepsAway: 3,
    content:
      "The weakest starting point, usually found in cheaper products. Your skin has to convert it to retinol, then retinaldehyde, then retinoic acid, losing strength every step of the way.",
    availability: "Over-the-counter",
    icon: ArrowDownIcon,
    iconBackground: "bg-zinc-300 dark:bg-zinc-700",
  },
  {
    name: "Retinol",
    stepsAway: 2,
    content:
      "The most common over-the-counter retinoid. Your skin has to convert it to retinaldehyde, then to retinoic acid.",
    availability: "Over-the-counter",
    icon: ArrowDownIcon,
    iconBackground: "bg-zinc-400 dark:bg-zinc-600",
  },
  {
    name: "Retinaldehyde",
    stepsAway: 1,
    content:
      "One step away. Your skin still has to convert it to retinoic acid before it does anything.",
    availability: "Over-the-counter",
    icon: ArrowDownIcon,
    iconBackground: "bg-zinc-500",
  },
  {
    name: "Retinoic acid (Tretinoin)",
    stepsAway: 0,
    content:
      "The final form. This is what actually does the work in your skin cells. No conversion, no lost strength.",
    availability: "Prescription",
    icon: CheckIcon,
    iconBackground: "bg-sky-600 dark:bg-sky-500",
  },
];

// "Be careful!" section: how NOT to use Tretinoin. Starter copy — edit freely.
const tretinoinWarnings = [
  {
    title: "Dryness, redness, and sensitivity when you first start.",
    body: "There is a loading phase with Tretinoin. It doesn't mean you are having a bad reaction, it means your skin is adjusting and acclimating to the retinoic acid. Push through this and you will be rewarded.",
  },

  {
    title: "Use Tretinoin at night.",
    body: "Tretinoin gets broken down by the sun, so don't waste it by using it in the morning. Tretinoin also makes your skin much more sensitive to sunlight. This makes the collagen in your skin more vulnerable to breakdown and you are taking Tretinoin to help your body make more. Don't get sun damage and don't cancel out one of the two primary benefits of this product.",
  },
  {
    title: "Use sunscreen.",
    body: "As mentioned above, Tretinoin makes your skin very sensitive to sunlight. Use sunscreen in the mornings before you leave for the day.",
  },
  {
    title: "Don't use with any other step 2 products in the beginning.",
    body: "If you use other step 2 products when you first start using Tretinoin, you won't be able to tell what is doing what.",
  },

  {
    title: "Don't use it if you're pregnant or trying to be.",
    body: "Retinoids are not recommended during pregnancy. Talk to your prescriber about this.",
  },
];

const headingClass =
  "text-3xl font-semibold tracking-tight text-pretty text-zinc-800 dark:text-zinc-200";

export default function Information() {
  return (
    <section
      id="information"
      className="scroll-mt-20 px-6 py-24 sm:py-32 lg:px-8"
    >
      <FadeIn className="mx-auto max-w-3xl text-lg/8 text-zinc-700 dark:text-zinc-400">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-800 sm:text-5xl dark:text-zinc-200">
          What is Tretinoin? What is even the point of this web page?
        </h2>
        <p className="mt-8 text-xl/8 dark:text-zinc-300">
          Having a youthful glowing complexion improves quality of life and
          that is a fact. Most topical skincare products claim to deliver this
          result but fail to do so. Tretinoin will noticeably improve your
          complexion if used correctly in a proper routine.
        </p>
        <p className="mt-8 text-xl/8 dark:text-zinc-300">
          I&apos;ve watched dozens of hours of skincare videos and tried dozens
          of products. As you can probably imagine, many of these videos were
          dumb and many of the products I tried weren&apos;t very effective,
          despite some of them being quite pricey.
        </p>
        <p className="mt-6 text-xl/8 dark:text-zinc-300">
          It seems there are two main causes of friction when it comes to
          learning something new: knowing where to start and filtering out all
          of the information (and products) you don&apos;t actually need.
        </p>
        <p className="mt-6 text-xl/8 dark:text-zinc-300">
          This web page is meant to present things in a way where you can
          quickly form a basic mental model for skincare and get started with
          the process in the most effective way possible.
        </p>

        <h3 className={`mt-16 ${headingClass}`}>What is skincare?</h3>
        <p className="mt-6">
          Skincare is caring for your skin. How does one care for their skin?
          Well, in addition to all the topical products you put on your face and
          neck and body, what you eat and drink (or don&apos;t eat and drink),
          the cleanliness of your pillowcases, and the laundry detergent you use
          all play a role to some degree. The scope of this page is focused
          mainly on the products you put on your skin — especially the face and
          neck since that is to what people refer when they use the term
          &ldquo;complexion&rdquo;.
        </p>

        {/* ── Routine ── */}
        <Badge color="sky" className="mt-16 mb-4">
          Routine
        </Badge>
        <h3 className={headingClass}>
          There are a million products out there. How many do I need? When do I
          use them?
        </h3>
        <p className="mt-6">
          Visually scanning the selection at Walmart or Ulta or Target can make
          your brain hurt. How do you know what you need, what you don&apos;t
          need, and what all of these products do? Well, just remember, since
          any skincare routine has 3 steps, every product out there falls into
          one of 3 main categories.
        </p>

        <h3 className={`mt-16 ${headingClass}`}>
          My skincare only needs 3 steps? Does that mean I only need 3 products?
          Which ones?
        </h3>
        <p className="mt-6">
          You probably noticed the cards at the top of this page. Think of that
          when you are looking at products and deciding which ones to buy. And,
          yes, less is more when it comes to the amount of products involved in
          your routine. After all, we all have lives to live.
        </p>
        <ol role="list" className="mt-8 max-w-xl space-y-8">
          {points.map((point, i) => (
            <li key={point.title} className="flex items-baseline gap-x-3">
              <span
                className={`w-6 flex-none text-2xl font-semibold ${point.color}`}
              >
                {i + 1}
              </span>
              <span>
                <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {point.title}
                </strong>{" "}
                {point.body}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-8">
          Seriously, that is it. Any video you watch, blog entry you read, or
          product advertisement you are subjected to can be filtered through
          this mental model. You just need to fill in the blanks with the right
          products for you.
        </p>

        <h3 className={`mt-16 ${headingClass}`}>
          Great, so what is the big deal about Tretinoin? Why should this be the
          nucleus of my routine?
        </h3>
        <p className="mt-6">
          Tretinoin is a prescription product. It has been around since 1957. It
          has decades of research behind it. It is a retinoid, meaning it is a
          vitamin A derivative.
        </p>

        {/* ── Retinoids ── */}
        <Badge color="sky" className="mt-16 mb-4">
          Retinoids
        </Badge>
        <h3 className={headingClass}>What is a retinoid? What does it do?</h3>
        <p className="mt-6">
          As mentioned above, retinoids are vitamin A derivatives. You may have
          already heard of them. There are many, many, many retinoid products
          out there that are available over-the-counter.
        </p>
        <p className="mt-6">
          Retinoids basically do two things: boost collagen production and
          optimize the natural cell-turnover process your skin is doing anyway.
        </p>
        <ol role="list" className="mt-8 max-w-xl space-y-8">
          {retinoidEffects.map((effect, i) => (
            <li key={effect.title} className="flex items-baseline gap-x-3">
              <span className="w-5 flex-none text-lg font-semibold text-sky-600 dark:text-sky-400">
                {i + 1}
              </span>
              <span>
                <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {effect.title}
                </strong>{" "}
                {effect.body}
              </span>
            </li>
          ))}
        </ol>

        <h3 className={`mt-16 ${headingClass}`}>
          Ok, if there are so many over-the-counter retinoid options, why go
          through the trouble of getting a Tretinoin prescription?
        </h3>
        <p className="mt-6">
          Retinoids are available in 4 main forms: retinyl esters, retinol,
          retinaldehyde, and retinoic acid. Pretty much every over-the-counter
          product is either a retinyl ester, retinol, or retinaldehyde. They can
          do some good, but their strength is weakened by each conversion step
          required to activate them. Might as well get straight to the point and
          put the activated version on your face and neck to get the full
          effects.
        </p>
        <ul role="list" className="mt-10">
          {retinoidConversion.map((stage, stageIdx) => (
            <li key={stage.name} className="relative pb-8 last:pb-0">
              {stageIdx !== retinoidConversion.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"
                />
              ) : null}
              <div className="relative flex gap-x-4">
                <span
                  className={`flex size-8 flex-none items-center justify-center rounded-full ring-8 ring-taupe-200 dark:ring-taupe-950 ${stage.iconBackground}`}
                >
                  <stage.icon
                    aria-hidden="true"
                    className="size-5 text-white"
                  />
                </span>
                <div className="flex min-w-0 flex-1 justify-between gap-x-4">
                  <p>
                    <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                      {stage.name}
                    </strong>
                    <br />
                    {stage.content}
                  </p>
                  <div className="flex flex-col items-end gap-y-1 text-right whitespace-nowrap">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {stage.stepsAway === 0
                        ? "Active"
                        : `${stage.stepsAway} step${stage.stepsAway > 1 ? "s" : ""} away`}
                    </span>
                    <div className="flex gap-x-1" aria-hidden="true">
                      {[0, 1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`h-2 w-4 rounded-sm ${
                            n < 4 - stage.stepsAway
                              ? stage.stepsAway === 0
                                ? "bg-sky-600 dark:bg-sky-500"
                                : "bg-zinc-500 dark:bg-zinc-400"
                              : "ring-1 ring-zinc-400 ring-inset dark:bg-zinc-800 dark:ring-0"
                          }`}
                        />
                      ))}
                    </div>
                    <span>{stage.availability}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          That is the long and short of it. Retinoids are the GOAT of all
          products in the step 2 treat category and Tretinoin is the GOAT of
          retinoids for the reasons mentioned above.
        </p>

        <h3 className={`mt-16 ${headingClass}`}>
          Is a tretinoin prescription expensive?
        </h3>
        <p className="mt-6">
          No. Even if you don&apos;t have health insurance and use GoodRx, you
          will probably be out $30 to $70 at the most. And it will last you a
          few months. You will need to get a doctor or nurse practitioner or
          physician&apos;s assistant to prescribe it for you but, after that,
          you are good to go.
        </p>

        <h3 className={`mt-16 ${headingClass}`}>
          So what is the main takeaway here before we move on to side effects,
          warnings, and other stuff?
        </h3>
        <p className="mt-6">
          Broadly speaking, any skincare routine will consist of 3 steps:
          cleanse, treat, and protect. Broadly speaking, any topical product out
          there will target one of these three steps. Tretinoin is the highest
          percentage, most effective product to use for your step 2 product. You
          also need to find a good cleanser for step 1 and, for step 2, a
          moisturizer, a sunscreen, or a product that combines the two. Some
          suggestions are included below but, before that, let&apos;s talk about
          how NOT to use Tretinoin.
        </p>

        {/* ── Be careful! (warnings) ── */}
        <Badge color="amber" className="mt-16 mb-4">
          Be smart
        </Badge>
        <h3 className={headingClass}>
          How do I use Tretinoin properly? What do I need to watch out for?
        </h3>
        <p className="mt-6">
          Apply Tretinoin at night and use a gentle cleanser beforehand. Apply
          sunscreen in the mornings. Use a moisturizer to deal with the dryness.
          It should be a part of your routine anyway.
        </p>

        <ol role="list" className="mt-8 max-w-xl space-y-8">
          {tretinoinWarnings.map((warning, i) => (
            <li key={warning.title} className="flex items-baseline gap-x-3">
              <span className="w-5 flex-none text-lg font-semibold text-amber-600 dark:text-amber-400">
                {i + 1}
              </span>
              <span>
                <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {warning.title}
                </strong>{" "}
                {warning.body}
              </span>
            </li>
          ))}
        </ol>
        <figure className="mt-10 border-l border-amber-600 pl-9 dark:border-sky-400">
          <blockquote className="font-semibold text-zinc-800 dark:text-zinc-200">
            <p>
              &ldquo;Vel ultricies morbi odio facilisi ultrices accumsan donec
              lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod.
              Risus aenean ut elit massa. In amet aliquet eget cras. Sem
              volutpat enim tristique.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              width={24}
              height={24}
              className="mt-1 size-6 flex-none rounded-full bg-zinc-200 dark:bg-zinc-800"
            />
            <div>
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                Maria Hill
              </strong>{" "}
              – Marketing Manager
            </div>
          </figcaption>
        </figure>
        <p className="mt-10">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
        </p>

        {/* ── Template filler below ── */}
        <figure className="mt-16">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            width={1310}
            height={873}
            sizes="(min-width: 768px) 768px, 100vw"
            className="aspect-video rounded-xl bg-zinc-200 object-cover dark:bg-zinc-800"
          />
          <figcaption className="mt-4 flex gap-x-2">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-1.5 size-5 flex-none text-zinc-400 dark:text-zinc-600"
            />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <h3 className={`mt-16 ${headingClass}`}>
          Everything you need to get up and running
        </h3>
        <p className="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
          varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
          cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
          molestie. Gravida quis fringilla amet eget dui tempor dignissim.
          Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum
          convallis quam.
        </p>
        <p className="mt-8">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
        </p>
      </FadeIn>
    </section>
  );
}
