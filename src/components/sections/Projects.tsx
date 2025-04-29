
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Network Defense System',
    description: 'A comprehensive intrusion detection and prevention system with real-time threat monitoring.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500',
    tags: ['Python', 'Machine Learning', 'SIEM'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Vulnerability Scanner',
    description: 'Automated vulnerability assessment tool for detecting weaknesses in web applications.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500',
    tags: ['Go', 'Docker', 'REST API'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Secure Auth Platform',
    description: 'Zero-trust authentication system with multi-factor authentication and behavioral analysis.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500',
    tags: ['React', 'Node.js', 'OAuth 2.0'],
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          Projects<span className="text-primary">.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-md">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="rounded-md">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
