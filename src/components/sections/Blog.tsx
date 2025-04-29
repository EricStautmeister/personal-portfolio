
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
    date: 'April 15, 2023',
    readTime: '5 min read',
    categories: ['React', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500'
  },
  {
    title: 'The Power of Tailwind CSS',
    excerpt: 'Discover how Tailwind CSS can streamline your workflow and help you build beautiful interfaces faster.',
    date: 'March 22, 2023',
    readTime: '4 min read',
    categories: ['CSS', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500'
  },
  {
    title: 'Building a Personal Website with Vite',
    excerpt: 'A step-by-step guide to creating a modern personal website using Vite and React.',
    date: 'February 10, 2023',
    readTime: '8 min read',
    categories: ['Vite', 'React'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          Blog<span className="text-primary">.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pb-2">
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.categories.map(category => (
                    <Badge key={category} variant="outline">{category}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:underline text-primary">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-md">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
