
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h2 className="text-lg md:text-xl text-primary font-medium">Hello, my name is</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Eric Stautmeister<span className="text-primary">.</span>
          </h1>
          {/* <h3 className="text-2xl md:text-4xl text-muted-foreground font-medium leading-relaxed">
            Securing the digital frontier
          </h3> */}
          <p className="text-muted-foreground text-lg max-w-xl">
            I'm a junior cybersecurity analyst working for swisscom, where I specialize in
            analysing alerts and incidents to ensure the security of our systems.
            Currently, I'm focused on increasing my skills by taking on more responsibilities,
            expanding my knowledge in cybersecurity, and contributing to impactful projects.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button onClick={scrollToProjects} className="rounded-md">
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/eric-stautmeister/', '_blank')}
              className="rounded-md"
            >
              See LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
