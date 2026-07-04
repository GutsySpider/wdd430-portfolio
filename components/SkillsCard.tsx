interface SkillsCardProps {
    title: string;
    description: string;
    languages: string[];
}

export default function SkillsCard({ title, description, languages }: SkillsCardProps) {
    return (
        <article className="p-4 border-l-4 border-green-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-blue-700 mb-3">{description}</p>
            <p className="text-sm text-red-600">
                <strong>Languages:</strong> {languages.join(', ')}
            </p>
            
        </article>
    );
}