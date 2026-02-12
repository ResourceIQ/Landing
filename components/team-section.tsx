import Link from 'next/link'

const members = [
    {
        name: 'U.D. Senuja Imeth Jayasekara',
        role: 'Coordinator & Introduction Specialist',
        avatar: '/images/team/senuja.jpeg',
        link: '#',
    },
    {
        name: 'P.A.A Chasith Gunathilaka',
        role: 'Visual Strategist',
        avatar: '/images/team/chasith.jpeg',
        link: '#',
    },
    {
        name: 'S.A.P Diluka Lahiru',
        role: 'Researcher & Analyst',
        avatar: '/images/team/diluka.jpeg',
        link: 'http://diluka.infy.uk',
    },
    {
        name: 'A.G. Nirodha Sandanunwan Adhikari',
        role: 'Technical Planner',
        avatar: '/images/team/nirodha.jpeg',
        link: '#',
    },
    {
        name: 'H.M.Hirusha Lakshan Jayaweera',
        role: 'System Designer & Methodologist',
        avatar: '/images/team/hirusha.jpeg',
        link: '#',
    },
    {
        name: 'T.L.Supuni Hiranyada Liyanage',
        role: 'Project Manager & Document Integrator',
        avatar: '/images/team/supuni.jpeg',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Meet the minds behind ResourceIQ</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>ResourceIQ is built by six passionate software engineering students from IIT who experienced firsthand the pain of inefficient task allocation. We're not just building a tool—we're solving a problem we've lived.</p>
                    </div>
                </div>
                
                <div className="mt-12 md:mt-24">
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}