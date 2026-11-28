import Image from "next/image";
import {
  ArrowDownIcon,
  CheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import Badge from "@/components/Badge";
import FadeIn from "@/components/FadeIn";

// Step 1 = Cleanse, so this section's accent is amber (hero step color).

// Numbered list (bigger numbers), like the 3 steps list.
const cleanserPoints = [
  {
    title: "Chemical exfoliation.",
    good: true,
    body: "This is the process of exfoliating with a chemical that disolves and breaks up the dirt and dead skin cells that shouldn't be there. This is the best way to go about cleansing the skin on face and neck without causing damage.",
  },
  {
    title: "Mechanical exfoliation.",
    good: false,
    body: "This is the process of exfoliating with an abrasive material to remove dirt losen up dead skins cells clinging to skins outer surface. This absolutely causes damage to the skin on your face and neck and any cleanser with exfoliating beads or the word 'scrub' on the label should be avoided.",
  },
];

// Numbered list (smaller numbers), like the retinoid effects list.
const cleanserTypes = [
  {
    title: "Lorem ipsum.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    title: "Dolor sit.",
    body: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
];

// Feed, like the retinoid conversion feed. Last item is the "winner".
const cleanserFeed = [
  {
    name: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
    label: "Lorem",
    icon: ArrowDownIcon,
    iconBackground: "bg-zinc-400 dark:bg-zinc-600",
  },
  {
    name: "Dolor sit",
    content:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    label: "Ipsum",
    icon: ArrowDownIcon,
    iconBackground: "bg-zinc-500",
  },
  {
    name: "Amet consectetur",
    content:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    label: "Dolor",
    icon: CheckIcon,
    iconBackground: "bg-amber-600 dark:bg-amber-500",
  },
];

// "Be smart" style list.
const cleanserWarnings = [
  {
    title: "Lorem ipsum.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
  },
  {
    title: "Dolor sit.",
    body: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
  },
  {
    title: "Amet consectetur.",
    body: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  },
];

const headingClass =
  // mt-16 always, except directly under a <Badge> (the badge has the gap).
  "mt-16 [[data-badge]+&]:mt-0 text-3xl font-semibold tracking-tight text-pretty text-zinc-800 dark:text-zinc-200";

export default function Cleansers() {
  return (
    <section
      id="cleansers"
      className="scroll-mt-20 px-6 py-24 sm:py-32 lg:px-8"
    >
      <FadeIn className="mx-auto max-w-3xl text-lg/8 text-zinc-700 dark:text-zinc-400">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-800 sm:text-5xl dark:text-zinc-200">
          What cleanser product should I use?
        </h2>

        <p className="mt-8 text-xl/8 dark:text-zinc-300">
          Good news, you don&apos;t need a prescription for a good cleanser. You
          can go to Walmart and buy something made by CeraVe or Neutrogina.
        </p>

        {/* ── Badge section 1 ── */}

        <h3 className={headingClass}>How do cleansers work?</h3>
        <p className="mt-6">
          Cleansers are meant to remove dirt, oil, and sunscreen from your skin.
          Some also exfoliate, which means to remove dead skin cells from the
          outer layer of the skin.
        </p>
        <h3 className={headingClass}>
          Do I need a cleanser that also exfoliates?
        </h3>
        <p className="mt-6">
          Not necessarily. Tretinoin losens the bonds between dead cells and the
          skin&apos;s outer surface so they should wash away with a normal
          cleanser. Adding in a gentle exfoliant is fine and I find it works
          well for me. Exfoliating cleansers exfoliate in one of two ways:
          chemical exfoliation and mechancial exfoliation.
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8">
          {cleanserPoints.map((point) => (
            <li key={point.title} className="flex items-start gap-x-3">
              {point.good ? (
                <HandThumbUpIcon
                  aria-label="Recommended"
                  className="mt-1 size-6 flex-none text-emerald-600 dark:text-emerald-400"
                />
              ) : (
                <HandThumbDownIcon
                  aria-label="Avoid"
                  className="mt-1 size-6 flex-none text-red-600 dark:text-red-400"
                />
              )}
              <span>
                <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {point.title}
                </strong>{" "}
                {point.body}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis
          convallis ac tempor et ut. Ac lorem vel integer orci.
        </p>

        {/* ── Badge section 2 ── */}
        <Badge color="amber" className="mt-16 mb-4">
          Ipsum
        </Badge>
        <h3 className={headingClass}>Maiores impedit perferendis?</h3>
        <p className="mt-6">
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
          in. Convallis arcu ipsum urna nibh.
        </p>
        <ol role="list" className="mt-8 max-w-xl space-y-8">
          {cleanserTypes.map((type, i) => (
            <li key={type.title} className="flex items-baseline gap-x-3">
              <span className="w-5 flex-none text-lg font-semibold text-amber-600 dark:text-amber-400">
                {i + 1}
              </span>
              <span>
                <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  {type.title}
                </strong>{" "}
                {type.body}
              </span>
            </li>
          ))}
        </ol>

        <h3 className={headingClass}>Suscipit eaque iste dolor?</h3>
        <p className="mt-6">
          Pharetra, euismod vitae interdum mauris enim, consequat vulputate
          nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
        </p>
        <ul role="list" className="mt-10">
          {cleanserFeed.map((item, itemIdx) => (
            <li key={item.name} className="relative pb-8 last:pb-0">
              {itemIdx !== cleanserFeed.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"
                />
              ) : null}
              <div className="relative flex gap-x-4">
                <span
                  className={`flex size-8 flex-none items-center justify-center rounded-full ring-8 ring-taupe-200 dark:ring-taupe-950 ${item.iconBackground}`}
                >
                  <item.icon aria-hidden="true" className="size-5 text-white" />
                </span>
                <div className="flex min-w-0 flex-1 justify-between gap-x-4">
                  <p>
                    <strong className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                      {item.name}
                    </strong>
                    <br />
                    {item.content}
                  </p>
                  <span className="text-right whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed
          diam turpis ipsum eu a sed convallis diam.
        </p>

        {/* ── Be smart ── */}
        <Badge color="amber" className="mt-16 mb-4">
          Be smart
        </Badge>
        <h3 className={headingClass}>Blanditiis ratione dolor?</h3>
        <p className="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
          varius orci dapibus volutpat cras.
        </p>
        <ol role="list" className="mt-8 max-w-xl space-y-8">
          {cleanserWarnings.map((warning, i) => (
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
        <figure className="mt-10 border-l border-amber-600 pl-9 dark:border-amber-400">
          <blockquote className="font-semibold text-zinc-800 dark:text-zinc-200">
            <p>
              &ldquo;Vel ultricies morbi odio facilisi ultrices accumsan donec
              lacus purus. Lectus nibh ullamcorper ac dictum justo in
              euismod.&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
              Lorem Ipsum
            </strong>{" "}
            – Dolor Sit
          </figcaption>
        </figure>

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
        <h3 className={headingClass}>
          Everything you need to get up and running
        </h3>
        <p className="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
          varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
          cursus tristique.
        </p>
      </FadeIn>
    </section>
  );
}
