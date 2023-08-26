import AppLayout from "@/layout/AppLayout";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      count: "01",
      name: "Oystr Transaction History",
      tools: ["Inertia JS", "React JS", "JavaScript", "TailwindCSS", "SASS"],
      url: "/",
    },
    {
      count: "02",
      name: "Oystr Float",
      tools: ["Inertia JS", "React JS", "JavaScript", "TailwindCSS", "SASS"],
      url: "/",
    },
    {
      count: "03",
      name: "Oystr Originators and Lenders",
      tools: ["Inertia JS", "React JS", "JavaScript", "TailwindCSS", "SASS"],
      url: "/",
    },
    {
      count: "04",
      name: "FrendlyLendr",
      tools: ["Next JS/TS", "TypeScript", "SASS", "Ant Design", "TailwindCSS"],
      url: "/",
    },
    {
      count: "05",
      name: "Unify360",
      tools: ["TypeScript", "Next JS/TS", "SASS", "Ant Design", "TailwindCSS"],
      url: "/",
    },
  ];
  return (
    <div className="home__container">
      <AppLayout>
        <div className="home__layout">
          <div className="home__hero pageborders">
            <h1>Alvin Okoro</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="home__about pageborders">
            <h1>About Me</h1>
            <div className="home__about--texts">
              <p>
                I am a passionate, experienced Software Engineer skilled in
                JavaScript, TypeScript, React, React Native, Next.js, Node.js,
                Express.js, and PostgreSQL. Proficient in creating scalable web
                solutions with a keen eye for detail and quality.
              </p>
              <p>
                In the past 5 years, I have been navigating the fintech space
                during which I worked with the team at sterling bank on unify360
                - a school management system. I also worked as lead FE at Oystr
                Finance on financial solutions such as Oystr TH, Oystr Float and
                Originators and Lenders
              </p>
            </div>
          </div>
          <div className="home__projects pageborders">
            <h1>Projects</h1>
            <>
              {projects?.map(({ count, name, tools, url }, index) => (
                <div className="projects--item" key={index}>
                  <div className="projects--item-left">
                    <h3>{count}</h3>
                    <div className="projects-item-tools">
                      <h2>{name}</h2>
                      <div className="project-tools">
                        {tools?.map((tool, index) => (
                          <span key={index}>
                            {index === tools.length - 1 ? tool : tool + ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="projects--item-right">
                    <Link href={url}>
                      <GoArrowUpRight size={48} />
                    </Link>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}
