import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export default function Projects() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Bee&#39;s <span className="text-[hsl(247,43%,37%)]">Projects 🐝</span>
        </h1>
        <h2 className="text-3xl tracking-tight">
          This portfolio is under construction 🚧
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
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
      <h2 className="mb-4 border-b-2 p-2 text-3xl tracking-tight">
        All Projects
      </h2>
      <div className="m-2 mb-2 grid grid-cols-2 gap-4 sm:grid-cols-1 md:gap-8">
        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Three.js Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/jelly-hologram"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Drone landing</h3>
                <div className="text-lg">
                  🚧 Working on mapping drone images to spheres in React.three
                  fiber (loading time is currently very long but I&#39;m working
                  on it)
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/drone-landing"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Jellyfish hologram</h3>
                <div className="text-lg">
                  🚧 Working on my shading and lighting skills with Three.js.
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/under-the-sea"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Under the sea</h3>
                <div className="text-lg">
                  🚧 Monthly challenge for three.js journey
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://threejs-journey-portal-scene-psi.vercel.app/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">
                  Three.js Journey Portal Scene
                </h3>
                <div className="text-lg">
                  Adventures with Blender and Three.js
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/threejs-christmas-challenge"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Christmas Challenge</h3>
                <div className="text-lg">
                  Adventures with Blender and Three.js for three.js journey
                  challenge, and fun with physics
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/noughts-and-crosses"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Noughts and Crosses</h3>
                <div className="text-lg">
                  🚧 Building tic-tac-toe with react three fiber (work in
                  progress)
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/poke-challenge"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Pokesphere</h3>
                <div className="text-lg">
                  My first three.js journey challenge
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Django Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://peaks-and-beaks.herokuapp.com/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Peaks and Beaks</h3>
                <div className="text-lg">
                  &#34;Peaks and Beaks &#34; is my capstone project for Harvard
                  &#39;s CS50 &#39;s Web Programming with Python and JavaScript.
                  I designed this application to create a fun way to stay
                  active, share the routes you &#39;ve created with your
                  community, and enjoy and take note of the natural world around
                  you. I had fun learning leaftlet.js, geoDjango, and how to
                  upload images to S3 buckets (honestly, this part I found less
                  fun).
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://www.youtube.com/channel/UCQvfBJ8AMUTJvZW_iz8OztA"
                target="_blank"
              >
                <h3 className="text-xl font-bold">
                  Social Network, Auction and Search
                </h3>
                <div className="text-lg">
                  Demos of the Projects I built using Django for Harvard&#39;s
                  CS50 Web Programming with Python and JavaScript. To keep in
                  line with Academic Honesty I&#39;m not able to share the code.
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Next.js Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://kinetic-cure.vercel.app/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Kinetic Cure</h3>
                <div className="text-lg">
                  🚧 Building an exercise and physio tracker to keep myself
                  accountable (production is currently broken - a reminder to
                  myself to deploy early and often and fix production bugs
                  before creating new features 😮‍💨 I&#39;m learning)
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/bee-well-read"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Bee Well Read</h3>
                <div className="text-lg">
                  🚧 Building a reading tracker to replace my good reads app
                  with an interface I enjoy
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Flask Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://stackjourneyjs-5cb7b83591cd.herokuapp.com/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Carbon Hero</h3>
                <div className="text-lg">
                  Carbon Hero is a gamified carbon tracker built to celebrate
                  big wins and track your savings over time in terms of carbon
                  emissions and money.
                </div>
              </Link>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://stackjourneyjs-5cb7b83591cd.herokuapp.com/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">B&#39;s Briefing</h3>
                <div className="text-lg">
                  I built this app using beautiful soup to help me get a news
                  briefing and reduce my doom scrolling
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Scripting Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://github.com/TokiLoshi/reminderbot"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Discord Reminder Bot</h3>
                <div className="text-lg">
                  ReminderBot is a Discord both reminds friends when they ask me
                  to remind me of something but after several weeks of
                  semi-consistent reminders said friend has still not completed
                  said task. The hypothesis is that a more regular, reliable
                  automated reply provide better incentives for the person to
                  get the task done, along with gifs so that the bot is
                  perceived as fun and friendly. Using the Cron library,
                  reminder bot reminds specific user id&#39;s at a specific time
                  with a random motivational quote and a randomly selected gif
                  from an array of curatedly appropriate gifs, arranged around
                  the meme &#34;wen&#34;, and &#34;knock knock.
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
          <h3 className="text-3xl font-bold">Vanilla Projects</h3>
          <Collapsible>
            <CollapsibleTrigger className="flex items-center">
              →
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Link
                className="mb-2 flex max-w-xs flex-col gap-4 rounded-md bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://stackjourneyjs-5cb7b83591cd.herokuapp.com/"
                target="_blank"
              >
                <h3 className="text-xl font-bold">Stack Journey</h3>
                <div className="text-lg">
                  A flash card app to help me learn Japanese (learning vanilla
                  js and express and jwt) and google sheets api
                </div>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
