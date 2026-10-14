"use client"

import StyledButton from "../StyledButton/StyledButton";
import GenericGrid from "../UI/GenericGrid";

interface TestimonialData {
  id: string;
  text: string;
  author: string;
  company?: string;
}

const testimonialsData: TestimonialData[] = [
  {
    id: "testimonial-1",
    text: `“I have worked with Geffen in a variety of positions; regardless of my role, I have witnessed Geffen’s continuous growth as a creative and her dedication to her work. She has always stepped up as a beautifully skilled (and organized) make-up artist on set.
    As an actor, I’ve seen how Geffen is considerate of bodily autonomy and the boundaries of the performers she is working with. I always felt comfortable telling Geffen if I needed anything during application or on camera with touch-ups. Building trust with actors is not an easy task, but it’s something I have always found with Geffen, on and off-camera.
    After working with Geffen for several years as an on-screen performer, I knew without a doubt Geffen was the MUA to call for my directorial debut. For Sensus Mori (2025), set in 1969, I had a distinct vision for replicating period looks and unconventional character appeal– and she met that vision and beyond. Geffen was adaptable, reliable, and overall a steady force on set that kept my talent picture perfect and our shoot on schedule.
    For her work on Sensus Mori, Geffen has received the Award for Best Makeup (Indie Line Film, 2026) and numerous honors for her contribution to the aesthetics and visual style of Sensus Mori, spanning 85 festivals across 16 countries. Geffen is a MUA powerhouse, and any production would be lucky to have her.”`,
    author: `- Sydney Rincón\n Director/ Writer of Sensus Mori (2025)\nActor, Filmmaker, Co-founder of `,
    company: "FemmeFields Productions",
  },
  {
    id: "testimonial-2",
    text: `“I’ve had the pleasure of working with Geffen on two projects, and I’ve been so happy with the results both times. She is incredibly talented, organized, and knows exactly how to bring your best features. She is also so kind, fun to chat with, and makes the whole experience feel comfortable and enjoyable. I’d absolutely recommend her and I’m hopeful to work with her again!”`,
    author: `- Isabella Doherty, Model/ Actress`,
  },
  {
    id: "testimonial-3",
    text: `“Geffen is a delight to work with and a master of her craft! Getting my makeup done by Geffen helps me physically transform into my characters, and she always takes care of my sensitive skin.”`,
    author: `- Madison Mendez, Model/ Actress`,
  },
];

const TestimonialsSection = () => {
  const [firstTestimonial, ...restTestimonials] = testimonialsData;

  return (
    <GenericGrid as="section">
      <h2 className="md:mb-18 font-young text-primary col-span-4 col-start-1 row-start-1 mx-4 text-center md:col-span-12 md:mx-0">
        {"People Love Working With Me"}
      </h2>

      <div className="col-span-4 col-start-1 row-start-2 mx-4 grid grid-cols-1 gap-6 md:col-span-10 md:col-start-2 md:mx-0 md:grid-cols-2">
        <div id={firstTestimonial.id} className="bg-secondary shadow-big col-start-1 flex flex-col gap-6 rounded-2xl p-5">
          <p className="font-instrument text-xl">{firstTestimonial.text}</p>
          <h5 className="font-young text-primary whitespace-pre-line text-right">
            {firstTestimonial.author}
            {firstTestimonial.company && (
              <span className="whitespace-nowrap italic">{firstTestimonial.company}</span>
            )}
          </h5>
        </div>
        <div className="grid grid-rows-2 gap-6">
          {restTestimonials.map(({ id, text, author }) => (
            <div key={id} id={id} className="bg-secondary shadow-big col-start-1 flex flex-col justify-between gap-6 rounded-2xl p-5">
              <p className="font-instrument text-xl">{text}</p>
              <h5 className="font-young text-primary text-right">{author}</h5>
            </div>
          ))}
        </div>
      </div>

      <StyledButton href="/contact" className="md:mt-18 col-span-2 col-start-2 row-start-3 mt-8 place-self-center text-center md:col-span-12">
        {"Become My Next Satisfied Client →"}
      </StyledButton>
    </GenericGrid>
  )
}

export default TestimonialsSection;
