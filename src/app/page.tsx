import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hi 👋 <span className="text-[hsl(247,43%,37%)]">I&#39;m Bee</span>
      </h1>
      <h2 className="text-3xl tracking-tight">
        This portfolio is under construction 🚧
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/projects"
        >
          <h3 className="text-2xl font-bold">Projects →</h3>
          <div className="text-lg">
            Here&#39;s what I&#39;ve been working on...
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/about"
        >
          <h3 className="text-2xl font-bold">About →</h3>
          <div className="text-lg">
            Developer information, skills, and experience.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/blog"
        >
          <h3 className="text-2xl font-bold">Blog →</h3>
          <div className="text-lg">
            My musings and thoughts on what I&#39;m learning in tech.
          </div>
        </Link>
      </div>
    </div>
  );
}
