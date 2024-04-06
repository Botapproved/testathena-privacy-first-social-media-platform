import { ButtonLink } from '@/components/ui/ButtonLink';
import { ButtonAnchor } from '@/components/ui/ButtonAnchor';

export default function HomePage() {
  return (
    <main>
      <div className="mt-28 flex flex-col items-center sm:mt-36">
        <a href="https://twitter.com/surreal_platform">
          <p className="inline-block rounded-lg bg-card px-3 py-2 text-card-foreground">
            Follow us on Twitter
          </p>
        </a>
        <h1 className="mt-4 px-5 text-center text-2xl sm:text-5xl">
          Welcome to Surreal - Where Authenticity Meets Connection.
        </h1>
        <div className="mt-6 flex justify-center gap-3">
          <ButtonLink href="/login" size="medium">
            Get Started
          </ButtonLink>
          <ButtonAnchor
            href="/register"
            size="medium"
            mode="secondary"
          >
            SignUp
          </ButtonAnchor>
        </div>
      </div>

      <div className="mt-20">

        <div >

          <AdvantagesCard

            title="Motto"
            description="Our vision is to create a platform where authenticity is valued, and genuine connections thrive."
          />
        </div>
        <div className="mt-5">
          <AdvantagesCard
            title="Vision"
            description="Surreal aims to revolutionize social media by providing a safe, transparent, and engaging environment for users."
          />

        </div>

      </div>

      <div className="mt-20">
        <h2 className="text-center text-3xl sm:text-5xl">Technology Stack</h2>
        <p className="mt-2 px-4 text-center text-lg text-muted-foreground">
          Surreal is built using the latest technologies for a seamless experience.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 px-4  md:grid-cols-3">
          {[
            {
              header: 'TypeScript',
              details:
                'Strongly-typed code and components for maintainability.',
            },
            {
              header: 'Next.js',
              details: 'Full-stack framework with built-in server rendering.',
            },
            { header: 'React', details: 'Declarative and efficient UI components.' },
            {
              header: 'Prisma',
              details: 'Modern ORM for database access with type safety.',
            },
            {
              header: 'NextAuth.js',
              details: 'Authentication library for secure logins.',
            },
            {
              header: 'React Query',
              details: 'Efficient data fetching and caching library.',
            },
            {
              header: 'Tailwind CSS',
              details: 'Utility-first CSS framework for styling.',
            },
            { header: 'Framer Motion', details: 'Animation library for UI elements.' },
            {
              header: 'React Aria',
              details: 'Provides accessible UI primitives and hooks.',
            },

          ].map(({ header, details }) => (
            <TechStackCard header={header} key={header}>
              {details}
            </TechStackCard>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-3xl sm:text-5xl">Advantages</h2>
        <p className="mt-2 px-4 text-center text-lg text-muted-foreground">
          Discover the unique use cases of Surreal and how it can enhance your social media experience:
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 px-4">
          <AdvantagesCard
            title="Authentic Connections"
            description="Surreal prioritizes genuine interactions, fostering authentic connections between users."
          />
          <AdvantagesCard
            title="Safe Environment"
            description="With advanced AI-driven content moderation, Surreal ensures a safe and secure environment for users."
          />
          <AdvantagesCard
            title="Meaningful Engagement"
            description="Engage in meaningful conversations and share your thoughts without the noise of irrelevant content."
          />
          <AdvantagesCard
            title="Reduced Fake News"
            description="Our fake news detector helps combat misinformation, enhancing the credibility of the platform."
          />
          <AdvantagesCard
            title="Transparency in Sponsored Content"
            description="We promote transparency by requiring both influencers and brands to pay for sponsored content, ensuring users are aware of promotional material."
          />
        </ul>
      </div>
    </main>
  );
}

function TechStackCard({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border-2 border-border bg-card p-5">
      <h4 className="text-lg font-semibold text-card-foreground">{header}</h4>

      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}

function AdvantagesCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border-2 border-border bg-card p-5">
      <h4 className="text-lg font-semibold text-card-foreground">{title}</h4>

      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
