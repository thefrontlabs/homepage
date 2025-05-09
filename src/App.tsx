import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import pro  from "./assets/projects.ts";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

// This component renders the full P2P Labs page with header and projects section
const P2PLabsPage = () => {
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    // In a real app, this would fetch from the JSON file
    // For demo purposes, we're using a mock JSON objec

    try {
      setTimeout(() => {
        setProjects(pro || []);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load projects data");
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header section with logo and vision */}
        <div className="flex flex-col lg:flex-row justify-between mb-16">
          <div className="lg:w-2/3 pr-4">
            <div className="flex items-center mb-6">
              <div className="mr-3 text-cyan-400">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
                  <path d="M8 8v20h20V8H8zM6 6h24v24H6V6z" fillRule="evenodd" />
                  <path d="M14 14v8h8v-8h-8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-medium">Front Labs</h1>
              <div className="ml-auto">
                <a href="https://github.com/thefrontlabs" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black ">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Building Real-World Blockchain Use Cases Through Experimentation and Innovation.</h2>
            
            <p className="text-gray-700 mb-3">
              At Front Labs, We are building Real-World Blockchain Use Cases Through Experimentation and Innovation.
            </p>
            
            <p className="text-gray-700 mb-3">
            We are a research-driven lab exploring and creating practical applications within the blockchain space. With hands-on experience working across networks like TRON, BTTC, and beyond, we focus on identifying gaps, solving core problems, and prototyping new ideas that push the boundaries of what's possible. With active projects underway and more on the horizon, we're committed to turning experimentation into impact.
            </p>
            
            <p className="text-gray-700 font-medium mb-6">
            "Pioneering the future of decentralized technology through hands-on innovation and real-world impact."
            </p>
            
            <p className="text-gray-700">
              Join our community <a href="https://forum.trondao.org/c/tbl/" className="text-blue-600 hover:underline">Tron Forum</a>
            </p>
          </div>
          
          <div className="lg:w-1/3 flex justify-center items-center mt-8 lg:mt-0">
            <div className="w-64 h-64">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g stroke="#ccc" strokeWidth="0.5" fill="none">
                  {/* Network nodes and connections visualization */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <circle 
                      key={`node-${i}`} 
                      cx={100 + 60 * Math.cos(i * Math.PI / 10)} 
                      cy={100 + 60 * Math.sin(i * Math.PI / 10)} 
                      r="2" 
                      fill="#000" 
                    />
                  ))}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <line 
                      key={`line-${i}`}
                      x1={100 + 60 * Math.cos(i * Math.PI / 20)} 
                      y1={100 + 60 * Math.sin(i * Math.PI / 20)}
                      x2={100 + 60 * Math.cos((i + 7) * Math.PI / 20)} 
                      y2={100 + 60 * Math.sin((i + 7) * Math.PI / 20)}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            {/* <p className="text-gray-600 max-w-lg">
              Use our services from the following links. Our software is open-sourced. 
              So you can read it, fork it, and improve it!
            </p> */}
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-gray-600">Loading projects...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-red-500">Error: {error}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project: any) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-sky-50 p-6 flex justify-center items-center h-48">
                    <div className="w-full h-full relative">
                      <img 
                        src={project.imagePath} 
                        alt={`${project.name} logo`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</div>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 min-h-16">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                      asChild
                    >
                      <a href={project.downloadLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Checkout
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default P2PLabsPage;