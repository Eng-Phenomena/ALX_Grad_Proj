import ReviewCards from "./ReviewCards";

const reviews = [
    {
      content: 'Thank you for your collaboration! Your insights into communication protocols and IoT have been invaluable, leading us to innovative solutions. We\'re excited to see the impact of our work together!',
      name: 'Abdelrahman Hossam',
      imgSrc: '/images/CoreTech.png',
      company: 'CoreTech'
    },
    {
      content: 'Thank you for your partnership on the PCB design for motor drivers! Your expertise was vital in creating an efficient solution. We look forward to its successful implementation!',
      name: 'Eng. Fathi Khaled',
      imgSrc: '/images/Orange.png',
      company: 'ODC'
    },
    {
      content: 'It was a pleasure working with you on the FPGA design for the specialized MCU! Your insights on optimization were key to achieving a high-performance solution. We’re excited to see it enhance your project!',
      name: 'Dr. Khaled Ghandour',
      imgSrc: '/images/DH.png',
      company: 'Digital Hub'
    },
    {
      content: 'Outstanding work on the project! By implementing FreeRTOS, you developed a security system that ensures robust protection and reliability. We’re eager to see how this solution strengthens your overall operations!',
      name: 'George Iskandar',
      imgSrc: '/images/SA.jpg',
      company: 'SwiftAct'
    }
];

const Review = () => {
  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container overflow-y-auto scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
            <h2 className="headline-2 mb-8">
              Clients Review:
            </h2>
            <div className="overflow-y-auto scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
              <div className="flex items-stretch gap-3 w-fit">
                  {reviews.map(({content, name, imgSrc, company}, key) =>(
                      <ReviewCards 
                      key={key}
                      name={name}
                      imgSrc={imgSrc}
                      company={company}
                      content={content}
                    />
                  ))}
              </div>
            </div>
        </div>
    </section>
  )
}

export default Review