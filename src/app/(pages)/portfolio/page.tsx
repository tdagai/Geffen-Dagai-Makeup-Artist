'use client'

import { BalancedMasonryGrid as MasonryGrid, Frame } from '@masonry-grid/react'
import { GenericGrid } from "@components/index";
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";
import { PortfolioPageSections } from './portfolioPageSections'

const PortfolioPage = () => {
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
                        className="shadow-small rounded-2xl border-2 border-black"
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
    </GenericGrid >
  )
}

export default PortfolioPage;