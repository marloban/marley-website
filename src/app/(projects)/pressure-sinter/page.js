import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import ProjectText from '@/components/project-text';
import ProjectImage from '@/components/project-image';
import { psmText } from '@/util/text-data';
import mainImg from 'public/projects/psm/completed-machine.png';
import sinter from 'public/projects/psm/chip-sintering.png';
import positioning from 'public/projects/psm/chip-positioning-system.png';
import gui from 'public/projects/psm/chip-alignment-gui.png';

export default function PressureSinter() {
  return (
    <main className="relative h-fit w-full bg-home">
      <ProjectHeading name="Pressure Sintering Machine" />
      <section className="relative px-3 pb-6 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Pressure Sintering Machine
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.citc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chip Integration Technology Center
          </a>
        </h3>
        <div className="relative mx-auto my-8 aspect-square h-72 sm:h-96">
          <Image
            src={mainImg}
            alt="Photo of the pressure sintering machine"
            fill
            className="z-10 object-contain"
            sizes="(max-width: 639px) 18rem, 24rem"
          />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-between md:flex-row md:items-start mx-auto">
          <ProjectText text={psmText.overview} />
          <ProjectText text={psmText.method} />
          <ProjectText text={psmText.result} />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-between md:flex-row md:items-start mx-auto">
          <ProjectImage
            image={sinter}
            caption="Chip being pressure sintered onto lead frame"
          />
          <ProjectImage image={positioning} caption="Chip positioning system" />
          <ProjectImage image={gui} caption="Chip alignment GUI" />
        </div>
      </section>
    </main>
  );
}
