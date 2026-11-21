import FadeIn from "@/components/FadeIn";
import { videos } from "@/data/videos";

export default function Videos() {
  return (
    <section id="videos" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Hear it from doctors</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Don&apos;t just take my word for it
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Dermatologists explaining how tretinoin works, how to start, and what to expect.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
          {videos.map((video, i) => (
            <FadeIn key={video.title} delay={i * 0.1}>
              <article className="flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-200">
                  {video.youtubeId ? (
                    <iframe
                      className="size-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center text-sm text-gray-400">
                      Video coming soon
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-lg/6 font-semibold text-gray-900">{video.title}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600">{video.doctor}</p>
                <p className="mt-3 text-sm/6 text-gray-600">{video.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
