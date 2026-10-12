import { Link } from "react-router-dom";
import useThemeStore from "@/store/themeStore";

const About = ({ teamMembers }) => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const cardStyle = isDark
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-slate-200";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <main>
      <section
        className={`border-y py-20 ${
          isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-500">
              Meet Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The people behind HAHU
            </h2>

            <p className={`mt-4 leading-7 ${mutedText}`}>
              We are a team of passionate software developer students learning,
              collaborating, and building our ideas into reality.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg ${cardStyle}`}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-lg">
                  {member.initial}
                </div>

                <h3 className="mt-5 text-xl font-bold">{member.name}</h3>

                <p className="mt-2 text-sm font-medium text-blue-500">
                  Software Developer Student
                </p>

                <p className={`mt-4 text-sm leading-6 ${mutedText}`}>
                  {member.description}
                </p>
              </article>
            ))}
          </div>

          <div
            className={`mt-10 rounded-2xl border p-6 text-center ${cardStyle}`}
          >
            <p className={`leading-7 ${mutedText}`}>
              We are learning, growing, and building HAHU together through
              teamwork, curiosity, and a shared passion for software
              development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
