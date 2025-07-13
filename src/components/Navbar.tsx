
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (item: string) => {
    if (item === 'blog') {
      navigate('/blog');
    } else if (item === 'home') {
      navigate('/');
    } else {
      // For sections like 'about', scroll to section if on home page
      if (location.pathname === '/') {
        setActiveSection(item);
        const section = document.getElementById(item);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(item);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          onClick={() => handleNavigation('home')}
          className="text-xl font-bold cursor-pointer hover:text-primary transition-colors"
        >
          Eric:~$
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-8">
            {['about', 'blog'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => handleNavigation(item)}
                  className={`cursor-pointer capitalize hover:text-primary transition-colors ${
                    (item === 'blog' && location.pathname === '/blog') || 
                    (item === 'about' && activeSection === item && location.pathname === '/') 
                      ? 'text-primary font-medium' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
