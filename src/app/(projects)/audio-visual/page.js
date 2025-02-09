import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import ProjectText from '@/components/project-text';
import ProjectImage from '@/components/project-image';
import { aviText } from '@/util/text-data';
import mainImg from 'public/projects/avi/external-photo.png';
import internal from 'public/projects/avi/internal-structure.png';
import external from 'public/projects/avi/external-structure.png';
import sleeve from 'public/projects/avi/fabric-sleeve.png';
import under1 from 'public/projects/avi/underneath-view-1.png';
import under2 from 'public/projects/avi/underneath-view-2.jpg';
import under3 from 'public/projects/avi/wizards hat5.PNG';

export default function AudioVisual() {
  return (
    <main className="relative h-fit w-full bg-home">
      <ProjectHeading name="Audio-Visual Installation" />
      <section className="relative px-3 pb-6 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Audio-Visual Installation
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            
            target="_blank"
            rel="noopener noreferrer"
          >
            E.L.G. Arts Festival
          </a>
        </h3>
        <div className="relative mx-auto my-6 aspect-[5/9] h-96 xs:h-[32rem]">
          <Image
            src={mainImg}
            alt="External structure with fabric sleeve"
            fill
            className="z-10 object-contain"
            sizes="(max-width: 429px) 13rem, 18rem"
          />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-around md:flex-row md:items-start mx-auto">
          <ProjectText text={aviText.overview} />
          <ProjectText text={aviText.method} />
          <ProjectText text={aviText.result} />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-between md:flex-row md:items-start mx-auto">
          <ProjectImage image={internal} caption="Internal structure" />
          <ProjectImage
            image={external}
            caption="External waterproof structure with speakers"
          />
          <ProjectImage image={sleeve} caption="Fabric sleeve" />
          
          <ProjectImage
            image={under1}
            caption="View from underneath the sculpture"
          />
          <ProjectImage
            image={under2}
            caption="View from underneath the sculpture"
          />
          <ProjectImage
            image={under3}
            caption="View from underneath the sculpture"
          />
        </div>
      </section>
    </main>
  );
}
