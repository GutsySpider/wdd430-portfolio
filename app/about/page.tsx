import SkillsList from '@/components/SkillsList';
const skills = [
  {
    title: 'Web & Computer Developement',
    description: 'I leaned the basics of programming with variables, functions, stylings, and layouts.',
    languages: ['HTML','Python', 'CSS']
  },
  {
    title: 'Web Developement',
    description: 'I increased my knowledge on styling front end applications. I learned how to work with javascript, databases, authentication, authorization and error handling. ',
    languages: ['HTML', 'JavaScript', 'CSS', 'Node', 'MongoDB', 'mySQL', 'Render', ]
  }
];


export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl fonr-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                This about page shares information about my background and work.
            </p>
            <SkillsList skills={skills} />
        </main>
    );
}