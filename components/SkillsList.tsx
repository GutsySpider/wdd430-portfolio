import SkillsCard from "./SkillsCard";

interface Skills {
    title: string;
    description: string;
    languages: string[];
}

interface SkillsListProps {
    skills: Skills[];
}

export default function SkillsList({ skills }: SkillsListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {skills.map((skills) => (
                <SkillsCard key={skills.title} {...skills} />
            ))}
        </section>
    );
}