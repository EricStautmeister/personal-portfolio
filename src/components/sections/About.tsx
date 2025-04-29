
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          About<span className="text-primary">.</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              Hello! I'm Jason, a passionate web developer with over 5 years of experience in creating
              digital experiences that are both functional and aesthetically pleasing.
            </p>
            <p className="text-lg">
              My journey in web development began during my college years when I built my first
              website for a local business. Since then, I've worked with various technologies
              and frameworks, always striving to create clean, efficient, and user-friendly applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking in the mountains, reading a good sci-fi novel,
              or experimenting with new recipes in the kitchen.
            </p>

            <h3 className="text-xl font-semibold mt-8">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'UI/UX Design', 'GraphQL', 'PostgreSQL'].map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {[
              { number: '5+', text: 'Years Experience' },
              { number: '30+', text: 'Projects Completed' },
              { number: '15+', text: 'Happy Clients' },
              { number: '3', text: 'Awards' }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold text-primary mb-2">{item.number}</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
