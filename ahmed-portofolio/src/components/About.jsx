const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 2.5
    }
];


const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                I’m passionate about creating innovative embedded systems and digital solutions. With expertise in computer architecture, IoT, and cloud computing, I build scalable, efficient projects that solve real-world challenges. I'm always exploring new ideas to push the limits of technology and turn concepts into impactful solutions.                </p>

                <div className="flex flex-wrap items-centergap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flec items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-4xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img src="/images/ALogo.png" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[50px] rounded-lg border-2 border-yellow-300"/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About