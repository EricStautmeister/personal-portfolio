
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Eric Stautmeister</h2>
            <p className="text-muted-foreground mt-2">Junior Cybersecurity Analyst</p>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={scrollToTop} 
            className="rounded-full"
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </Button>
        </div>
        
        <hr className="my-8 border-border/50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Eric Stautmeister. All rights reserved. Secured with end-to-end encryption.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/eric-stautmeister/" 
              className="text-muted-foreground hover:text-foreground transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/EricStautmeister" 
              className="text-muted-foreground hover:text-foreground transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
