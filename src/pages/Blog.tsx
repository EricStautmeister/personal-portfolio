import { useState } from 'react';
import { ThemeProvider } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Terminal, Shield, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Advanced Penetration Testing Methodologies',
      content: 'Deep dive into modern penetration testing techniques and frameworks used in enterprise environments...',
      date: '2024-01-15',
      excerpt: 'Exploring cutting-edge methodologies for comprehensive security assessments.'
    },
    {
      id: '2',
      title: 'Zero Trust Architecture Implementation',
      content: 'A comprehensive guide to implementing Zero Trust security models in modern organizations...',
      date: '2024-01-10',
      excerpt: 'Building robust security architectures with zero trust principles.'
    }
  ]);

  const [isAddingPost, setIsAddingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    excerpt: ''
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.content && newPost.excerpt) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        excerpt: newPost.excerpt,
        date: new Date().toISOString().split('T')[0]
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', excerpt: '' });
      setIsAddingPost(false);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar activeSection="blog" setActiveSection={() => {}} />
        
        <main className="flex-1 pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Terminal className="h-8 w-8 text-primary" />
                  <h1 className="text-4xl font-bold">Security Research Blog</h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  Latest insights and research in cybersecurity
                </p>
              </div>

              {/* Add Post Button */}
              <div className="mb-8 flex justify-end">
                <Button 
                  onClick={() => setIsAddingPost(!isAddingPost)}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add New Article
                </Button>
              </div>

              {/* Add Post Form */}
              {isAddingPost && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      New Security Article
                    </CardTitle>
                    <CardDescription>
                      Share your latest cybersecurity research and insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input
                        placeholder="Article title..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Excerpt</label>
                      <Input
                        placeholder="Brief description..."
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Content</label>
                      <Textarea
                        placeholder="Article content..."
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        rows={8}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleAddPost}>
                        Publish Article
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsAddingPost(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Blog Posts */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 flex items-center gap-2">
                            <Lock className="h-5 w-5 text-primary" />
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground ml-4">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.content}
                      </p>
                      <Button variant="link" className="p-0 mt-2">
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {posts.length === 0 && !isAddingPost && (
                <Card className="text-center p-12">
                  <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Articles Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start sharing your cybersecurity research and insights
                  </p>
                  <Button onClick={() => setIsAddingPost(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Article
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;