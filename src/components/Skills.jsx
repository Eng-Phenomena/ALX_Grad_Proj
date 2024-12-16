import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/C.png',
      label: 'C Promgramming',
      desc: 'Interfacing Language'
    },
    {
      imgSrc: '/images/C++.png',
      label: 'C++ Programming',
      desc: 'Interfacing Language'
    },
    {
      imgSrc: '/images/MCU.png',
      label: 'AVR/ARM MCU',
      desc: 'MCU Interfacing'
    },
    {
      imgSrc: '/images/Altium.png',
      label: 'Altium Designer',
      desc: 'PCB Designer Tool'
    },
    {
      imgSrc: '/images/VHDL.png',
      label: 'VHDL',
      desc: 'Hardware Description'
    },
    {
      imgSrc: '/images/SV.png',
      label: 'SystemVerilog',
      desc: 'Hardware Description'
    },
    {
      imgSrc: '/images/ubunto.png',
      label: 'Linux Ubunto',
      desc: 'Linux OS'
    },
    {
      imgSrc: '/images/IOT.png',
      label: 'IOT',
      desc: 'Wireless Communication'
    },
    {
      imgSrc: '/images/FPGA.png',
      label: 'FPGA Design',
      desc: 'Logic Config Design'
    },
    {
      imgSrc: '/images/Python.webp',
      label: 'Python Programming',
      desc: 'Development Language'
    },
];

const Skills = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Explore the cutting-edge tools and technologies I leverage to craft innovative, high-performance embedded systems and digital solutions.            
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) =>(
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills