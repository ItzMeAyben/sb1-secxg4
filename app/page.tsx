"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LucideIcon, Code, PenTool, Video, MessageSquare, Lightbulb } from 'lucide-react';

const skills = [
  { name: 'Video Editing', progress: 90, icon: Video },
  { name: 'Content Creation', progress: 85, icon: PenTool },
  { name: 'Idea Generation', progress: 95, icon: Lightbulb },
  { name: 'Freelance Writing', progress: 80, icon: MessageSquare },
  { name: 'Coding', progress: 75, icon: Code },
];

const projects = [
  { title: 'Video Campaign', description: 'Created a viral video campaign for a tech startup', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { title: 'Content Strategy', description: 'Developed a comprehensive content strategy for a lifestyle brand', image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { title: 'Web Development', description: 'Built a responsive website for a local business', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
];

const clients = [
  'TechCorp', 'LifestyleBrand', 'LocalBiz', 'StartupX', 'MediaGroup'
];

function Skill({ name, progress, icon: Icon }: { name: string, progress: number, icon: LucideIcon }) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="w-6 h-6" />
      <div className="flex-grow">
        <div className="flex justify-between mb-1">
          <span>{name}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          Freelancer
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {['About', 'Projects', 'Services', 'Clients', 'Contact'].map((item) => (
              <Button key={item} variant="ghost" size="sm" asChild>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4"
              >
                Hi, I'm a Versatile Freelancer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-4"
              >
                I'm a freelancer who can do many things—editing, content creation, idea generation, and more.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {skills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </motion.div>
            </div>
            <div className="h-[400px]">
              <Scene />
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <Tabs defaultValue="video-editing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="video-editing">Video Editing</TabsTrigger>
              <TabsTrigger value="content-creation">Content Creation</TabsTrigger>
              <TabsTrigger value="idea-generation">Idea Generation</TabsTrigger>
              <TabsTrigger value="freelance-writing">Freelance Writing</TabsTrigger>
            </TabsList>
            <TabsContent value="video-editing">
              <Card>
                <CardHeader>
                  <CardTitle>Video Editing</CardTitle>
                  <CardDescription>Professional video editing services for all your needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>From short clips to feature-length films, I can help bring your vision to life.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="content-creation">
              <Card>
                <CardHeader>
                  <CardTitle>Content Creation</CardTitle>
                  <CardDescription>Engaging content for your brand across all platforms.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>I create compelling content that resonates with your audience and drives engagement.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="idea-generation">
              <Card>
                <CardHeader>
                  <CardTitle>Idea Generation</CardTitle>
                  <CardDescription>Innovative ideas to help your business stand out.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>I offer creative brainstorming sessions to generate unique ideas for your projects.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="freelance-writing">
              <Card>
                <CardHeader>
                  <CardTitle>Freelance Writing</CardTitle>
                  <CardDescription>High-quality writing for various purposes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>From blog posts to technical documentation, I deliver clear and engaging written content.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="clients" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Clients</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="w-48 h-48 flex items-center justify-center">
                  <CardContent>
                    <p className="text-xl font-semibold text-center">{client}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below to contact me about your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Freelancer Portfolio. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-foreground hover:text-primary">LinkedIn</a>
              <a href="#" className="text-foreground hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}