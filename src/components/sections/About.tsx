
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
              Hello! I'm Jason, a cybersecurity professional with over 5 years of experience in safeguarding organizations
              against evolving digital threats and vulnerabilities.
            </p>
            <p className="text-lg">
              My journey in cybersecurity began during my college years when I uncovered a significant vulnerability in a local 
              business's network. Since then, I've worked with various security frameworks and tools, always striving to create 
              resilient, protected systems that maintain both security and usability.
            </p>
            <p className="text-lg">
              When I'm not analyzing threat patterns or conducting penetration tests, you can find me participating in CTF competitions,
              researching zero-day vulnerabilities, or contributing to open-source security projects.
            </p>

            <h3 className="text-xl font-semibold mt-8">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Network Security', 'Penetration Testing', 'SIEM', 'Threat Analysis', 'Incident Response', 'Cloud Security', 'Encryption', 'Compliance'].map(skill => (
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
              { number: '5+', text: 'Years in Security' },
              { number: '30+', text: 'Vulnerabilities Patched' },
              { number: '15+', text: 'Security Audits' },
              { number: '3', text: 'Security Certifications' }
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
