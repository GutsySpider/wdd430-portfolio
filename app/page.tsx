import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Competitor & vehicle Database',
    description: 'A Backend API showing competitor and vehicle data',
    technologies: ['Javascript','Node', 'MongoDB'],
    link: 'https://github.com/GutsySpider/cse341-project2'
  },
  {
    title: 'Streamer Community Page',
    description: 'A Frontend website for a streaming community page  ',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/GutsySpider/wdd231/tree/main/final'
  },
    {
    title: 'Weather Application',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: ''
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}