import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/Security.jpg',
      title: 'Apartment Security System',
      tags: ['AVR MCU', 'UART', 'FreeRTOS'],
      projectLink: 'https://github.com/Eng-Phenomena/ALX_Portifolio_Project'
    },
    {
      imgSrc: '/images/PCB2.png',
      title: 'Buck Converter Power Supply Layout',
      tags: ['PCB', 'Layout'],
      projectLink: 'https://github.com/Eng-Phenomena/CO_Project'
    },
    {
      imgSrc: '/images/SS.png',
      title: 'Simple Shell',
      tags: ['Development', 'C Prog', 'OS'],
      projectLink: 'https://github.com/AhmedAmrhashem/simple_shell'
    },
    {
      imgSrc: '/images/TLS.jpg',
      title: 'Traffic Management System',
      tags: ['PIC MCU', 'Interfacing', 'Timers'],
      projectLink: 'https://github.com/Eng-Phenomena/embedded_training'
    },
    {
      imgSrc: '/images/SM.jpg',
      title: 'Smart Home',
      tags: ['RTOS', 'Development', 'IOT', 'SPI'],
      projectLink: 'https://github.com/Eng-Phenomena/embedded_training'
    },
    {
      imgSrc: '/images/Quartus.jpg',
      title: '8-bit MCU Design',
      tags: ['FPGA', 'GPIO', 'Counters', 'Logic Design'],
      projectLink: 'https://github.com/Eng-Phenomena/ALX_Portifolio_Project'
    },
];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 pb-8">
                My portfolio highlights:
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work