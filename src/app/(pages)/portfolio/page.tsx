'use client'

import { useState } from 'react'
import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react'
import PhotographyAsset01 from "@assets/portfolioPage/portfolio_photography_1.png"
import PhotographyAsset02 from "@assets/portfolioPage/portfolio_photography_2.png"
import PhotographyAsset03 from "@assets/portfolioPage/portfolio_photography_3.png"
import PhotographyAsset04 from "@assets/portfolioPage/portfolio_photography_4.png"
import PhotographyAsset05 from "@assets/portfolioPage/portfolio_photography_5.png"
import PhotographyAsset06 from "@assets/portfolioPage/portfolio_photography_6.png"
import PhotographyAsset07 from "@assets/portfolioPage/portfolio_photography_7.png"
import PhotographyAsset08 from "@assets/portfolioPage/portfolio_photography_8.png"
import PhotographyAsset09 from "@assets/portfolioPage/portfolio_photography_9.png"
import PhotographyAsset010 from "@assets/portfolioPage/portfolio_photography_10.png"
import PhotographyAsset011 from "@assets/portfolioPage/portfolio_photography_11.png"
import PhotographyAsset012 from "@assets/portfolioPage/portfolio_photography_12.png"
import PhotographyAsset013 from "@assets/portfolioPage/portfolio_photography_13.png"
import { GenericGrid } from "@components/index";
import Image, { StaticImageData } from 'next/image';
import {
  type ControlsData,
  defaultControlsData,
} from '@components/BalancedMasonryGrid/controls/controls';
import { useMediaQuery } from "usehooks-ts";

type SectionAssetsProps = {
  src: StaticImageData;
  width: number;
  height: number;
}

type PortfolioPageSectionsProps = {
  sectionTitle: string;
  sectionAssets: SectionAssetsProps[];
}

const PortfolioPageSections: PortfolioPageSectionsProps[] = [
  {
    sectionTitle: "Photography",
    sectionAssets: [
      {
        src: PhotographyAsset01,
        width: 1291,
        height: 1795,
      },
      {
        src: PhotographyAsset02,
        width: 1,
        height: 1,
      },
      {
        src: PhotographyAsset03,
        width: 4,
        height: 3,
      },
      {
        src: PhotographyAsset04,
        width: 1403,
        height: 1816,
      },
      {
        src: PhotographyAsset05,
        width: 3,
        height: 4,
      },
      {
        src: PhotographyAsset06,
        width: 5,
        height: 4,
      },
      {
        src: PhotographyAsset07,
        width: 1,
        height: 1,
      },
      {
        src: PhotographyAsset08,
        width: 2,
        height: 3,
      },
      {
        src: PhotographyAsset09,
        width: 1,
        height: 1,
      },
      {
        src: PhotographyAsset010,
        width: 2,
        height: 3,
      },
      {
        src: PhotographyAsset011,
        width: 1269,
        height: 1574,
      },
      {
        src: PhotographyAsset012,
        width: 5,
        height: 4,
      },
      {
        src: PhotographyAsset013,
        width: 1423,
        height: 1839,
      },
    ]
  }
]

const PortfolioPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [controlsData, setControlsData] = useState<ControlsData>(defaultControlsData);
  const isMobile = useMediaQuery('(max-width: 768px)', {
    initializeWithValue: false,
  });

  return (
    <GenericGrid as="section">
      <h1 className="font-young text-primary col-span-4 text-center md:col-span-12">Portfolio Page</h1>
      {
        PortfolioPageSections.map(({ sectionTitle, sectionAssets }) => {
          return (
            <section id={sectionTitle} key={`${sectionTitle}`} className="col-span-4 col-start-1 px-4 md:col-span-10 md:col-start-2 md:px-0">
              <h3 className='font-young text-primary border-primary border-b-8'>{sectionTitle}</h3>
              <MasonryGrid
                className="container col-span-4 col-start-1 mt-2.5 px-1 md:col-span-12 md:col-start-2"
                gap={24}
                frameWidth={isMobile ? 150 : 300}
                style={{ width: `${100}%` }}
              >
                {sectionAssets.map(({ src, width, height }, index) => {
                  return (
                    <Frame
                      key={`${sectionTitle}-${index + 1}`}
                      className="frame"
                      width={width}
                      height={height}
                    >
                      <Image
                        className="shadow-small rounded-2xl border border-black"
                        src={src}
                        alt={`${sectionTitle}-${index + 1}`}
                      />
                    </Frame>
                  )
                })}
              </MasonryGrid>
            </section>
          )
        })
      }
      {/*
        <MasonryGrid
        className="container col-span-4 col-start-1 md:col-span-12 md:col-start-2"
        gap={controlsData.gap}
        frameWidth={controlsData.frameWidth}
        style={{ width: `${controlsData.containerWidth}%` }}
      >
        {items.map(({ width, height, backgroundColor }, i) => (
          <Frame
            key={i}
            className='frame'
            width={width}
            height={height}
            style={{ backgroundColor }}
          >
            {i + 1}
          </Frame>
        </MasonryGrid>
        ))} */}
    </GenericGrid >
  )
}

export default PortfolioPage;