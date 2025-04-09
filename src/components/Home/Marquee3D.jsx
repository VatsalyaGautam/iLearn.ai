import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Amit",
    username: "@amit",
    body: "LinguistiQ is a game-changer for research! Extracting key insights from massive PDFs has never been this easy.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The multilingual support is outstanding. Now I can generate questions and answers in multiple languages effortlessly.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "Incredibly precise and efficient. This AI-powered tool is a must-have for students and researchers!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Neha",
    username: "@neha",
    body: "Revolutionary AI for document analysis! This will change how we extract knowledge from PDFs forever.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "As an educator, I find this AI incredibly useful for generating study materials quickly and accurately.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "This technology bridges the language barrier, making complex research accessible to a global audience.",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Suresh",
    username: "@suresh",
    body: "Brilliant AI innovation! This makes information retrieval from large documents seamless and efficient.",
    img: "https://avatar.vercel.sh/suresh",
  },
  {
    name: "Meera",
    username: "@meera",
    body: "With AI like this, generating insightful Q&A from PDFs is faster and more accurate than ever!",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "The future of document processing is here! AI-driven knowledge extraction is a game-changer.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Riya",
    username: "@riya",
    body: "I'm amazed by how well this system understands context. The generated questions are spot-on!",
    img: "https://avatar.vercel.sh/riya",
  },
  {
    name: "Karthik",
    username: "@karthik",
    body: "Finally, an AI tool that makes large documents manageable. This will revolutionize research and learning!",
    img: "https://avatar.vercel.sh/karthik",
  },
  {
    name: "Swati",
    username: "@swati",
    body: "The multilingual translation is incredibly accurate. AI is transforming education and information access!",
    img: "https://avatar.vercel.sh/swati",
  },
  {
    name: "Ramesh",
    username: "@ramesh",
    body: "This project gives hope to researchers worldwide. AI-driven document processing is the next big leap in education!",
    img: "https://avatar.vercel.sh/ramesh",
  },
  {
    name: "Vivek",
    username: "@vivek",
    body: "Academic research is evolving, and this AI is leading the way in multilingual Q&A generation!",
    img: "https://avatar.vercel.sh/vivek",
  },
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const chunkedReviews = chunkArray(reviews, Math.ceil(reviews.length / 4));

const firstRow = chunkedReviews[0] || [];
const secondRow = chunkedReviews[1] || [];
const thirdRow = chunkedReviews[2] || [];
const fourthRow = chunkedReviews[3] || [];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
       
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
