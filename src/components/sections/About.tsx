
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
              Hello! I'm Eric, a passionate cybersecurity analyst with a keen interest in threat detection and incident response.
              I currently work at Swisscom, where I focus on analyzing alerts and incidents to ensure the security of our systems.
            </p>
            <p className="text-lg">
              My passion for cybersecurity was ignited in high school, where I first explored programming, network security, ethical hacking, and incident response. 
              This early curiosity culminated in my Maturaarbeit, a research project titled "The future security of our current data: post-quantum cryptography," which deepened my fascination with cryptography and its critical role in protecting systems against quantum-era threats. 
              Building on this foundation, I have carried my enthusiasm and knowledge into my current role at Swisscom, where I thrive on tackling complex challenges and continuously expanding my expertise in the ever-evolving field of cybersecurity.
            </p>
            <p className="text-lg">
              Outside of work, you will find me learning languages, building side projects, or reading fantasy or sci-fi novels and manga.
            </p>

            <h3 className="text-xl font-semibold mt-8">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Network Security', 'Threat Analysis', 'Incident Response', 'SOC', 'SIEM', 'MS ATP', 'Splunk', 'MISP', 'Automation', 'Python', 'Jira'].map(skill => (
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
              { number: '20', text: 'Age' },
              { number: '1+', text: 'Years in Security' },
              { number: '~40+', text: 'Alerts Handled per Day' },
              { number: '1', text: 'Security Certifications' }
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
