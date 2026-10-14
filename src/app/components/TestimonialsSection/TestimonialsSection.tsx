"use client"

import GenericGrid from "../UI/GenericGrid";

const TestimonialsSection = () => {
  return (
    <GenericGrid as="section">
      <h2 className="font-young text-primary col-span-4 col-start-1 text-center md:col-span-12">
        {"People Love Working With Me"}
      </h2>
      <div className="col-span-10 col-start-2 grid grid-cols-2 gap-6">
        <div id="testimonial-1" className="bg-secondary shadow-big col-start-1 flex flex-col gap-6 rounded-2xl p-5">
          <p className="font-instrument text-xl">{`“I have worked with Geffen in a variety of positions; regardless of my role, I have witnessed Geffen’s continuous growth as a creative and her dedication to her work. She has always stepped up as a beautifully skilled (and organized) make-up artist on set.
            As an actor, I’ve seen how Geffen is considerate of bodily autonomy and the boundaries of the performers she is working with. I always felt comfortable telling Geffen if I needed anything during application or on camera with touch-ups. Building trust with actors is not an easy task, but it’s something I have always found with Geffen, on and off-camera.
            After working with Geffen for several years as an on-screen performer, I knew without a doubt Geffen was the MUA to call for my directorial debut. For Sensus Mori (2025), set in 1969, I had a distinct vision for replicating period looks and unconventional character appeal– and she met that vision and beyond. Geffen was adaptable, reliable, and overall a steady force on set that kept my talent picture perfect and our shoot on schedule.
            For her work on Sensus Mori, Geffen has received the Award for Best Makeup (Indie Line Film, 2026) and numerous honors for her contribution to the aesthetics and visual style of Sensus Mori, spanning 85 festivals across 16 countries. Geffen is a MUA powerhouse, and any production would be lucky to have her.”
          `}</p>
          <h5 className="font-young text-primary whitespace-pre-line text-right">
            {`- Sydney Rincón\n Director/ Writer of Sensus Mori (2025)\nActor, Filmmaker, Co-founder of `}
            <span className="whitespace-nowrap italic">FemmeFields Productions</span>
          </h5>
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div id="testimonial-2" className="bg-secondary shadow-big col-start-1 flex flex-col justify-between gap-6 rounded-2xl p-5">
            <p className="font-instrument text-xl">
              {`“I’ve had the pleasure of working with Geffen on two projects, and I’ve been so happy with the results both times. She is incredibly talented, organized, and knows exactly how to bring your best features. She is also so kind, fun to chat with, and makes the whole experience feel comfortable and enjoyable. I’d absolutely recommend her and I’m hopeful to work with her again!”`}
            </p>
            <h5 className="font-young text-primary text-right">
              {`- Isabella Doherty, Model/ Actress`}
            </h5>
          </div>
          <div id="testimonial-3" className="bg-secondary shadow-big col-start-1 flex flex-col justify-between gap-6 rounded-2xl p-5">
            <p className="font-instrument text-xl">
              {`“Geffen is a delight to work with and a master of her craft! Getting my makeup done by Geffen helps me physically transform into my characters, and she always takes care of my sensitive skin.”`}
            </p>
            <h5 className="font-young text-primary text-right">
              {`- Madison Mendez, Model/ Actress`}
            </h5>
          </div>
        </div>
      </div>
    </GenericGrid>
  )
}

export default TestimonialsSection;