const people = [
    {
        name: 'Seth Harding',
        role: 'Co-Founder / President',
        imageUrl:
        'https://media.discordapp.net/attachments/1158337036038721566/1164791070421426226/298501843_773359537141550_3482837343107104290_n.jpg?ex=65602eb7&is=654db9b7&hm=6bf5790bdd28e0ad79561defdc3fec72f97799cceb87f5eeec5d2d1969c17553&=&width=697&height=701'
    },
    {
        name: 'Herong',
        role: 'Vice President',
        imageUrl:
        ''
    },

    // More people...
]

export default function TeamSection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-100">
                        A group of passionate and talented students who are dedicated to making AI more accessible to the NTU community.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-blue-500">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
