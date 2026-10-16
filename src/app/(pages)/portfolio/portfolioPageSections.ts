import { StaticImageData } from "next/image"
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
import FilmAsset01 from "@assets/portfolioPage/portfolio_film_1.png"
import FilmAsset02 from "@assets/portfolioPage/portfolio_film_2.png"
import FilmAsset03 from "@assets/portfolioPage/portfolio_film_3.png"
import FilmAsset04 from "@assets/portfolioPage/portfolio_film_4.png"
import FilmAsset05 from "@assets/portfolioPage/portfolio_film_5.png"
import FilmAsset06 from "@assets/portfolioPage/portfolio_film_6.png"
import FilmAsset07 from "@assets/portfolioPage/portfolio_film_7.png"
import FilmAsset08 from "@assets/portfolioPage/portfolio_film_8.png"
import FilmAsset09 from "@assets/portfolioPage/portfolio_film_9.png"
import FilmAsset010 from "@assets/portfolioPage/portfolio_film_10.png"
import FilmAsset011 from "@assets/portfolioPage/portfolio_film_11.png"
import FilmAsset012 from "@assets/portfolioPage/portfolio_film_12.png"
import FilmAsset013 from "@assets/portfolioPage/portfolio_film_13.png"
import FilmAsset014 from "@assets/portfolioPage/portfolio_film_14.png"
import FilmAsset015 from "@assets/portfolioPage/portfolio_film_15.png"
import FilmAsset016 from "@assets/portfolioPage/portfolio_film_16.png"
import FilmAsset017 from "@assets/portfolioPage/portfolio_film_17.png"
import FilmAsset018 from "@assets/portfolioPage/portfolio_film_18.png"
import FilmAsset019 from "@assets/portfolioPage/portfolio_film_19.png"
import FilmAsset020 from "@assets/portfolioPage/portfolio_film_20.png"
import FilmAsset021 from "@assets/portfolioPage/portfolio_film_21.png"
import FilmAsset022 from "@assets/portfolioPage/portfolio_film_22.png"
import FilmAsset023 from "@assets/portfolioPage/portfolio_film_23.png"
import FilmAsset024 from "@assets/portfolioPage/portfolio_film_24.png"
import FilmAsset025 from "@assets/portfolioPage/portfolio_film_25.png"
import FilmAsset026 from "@assets/portfolioPage/portfolio_film_26.png"
import CommercialsAsset01 from "@assets/portfolioPage/portfolio_commercials_1.png"
import CommercialsAsset02 from "@assets/portfolioPage/portfolio_commercials_2.png"
import CommercialsAsset03 from "@assets/portfolioPage/portfolio_commercials_3.png"
import CommercialsAsset04 from "@assets/portfolioPage/portfolio_commercials_4.png"

type SectionAssetsProps = {
  src: StaticImageData;
  width: number;
  height: number;
}


type PortfolioPageSectionsProps = {
  sectionTitle: string;
  sectionAssets: SectionAssetsProps[];
}


const photographyAssets: SectionAssetsProps[] = [
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
];

const filmAssets: SectionAssetsProps[] = [
  {
    src: FilmAsset01,
    width: 1510,
    height: 2030
  },
  {
    src: FilmAsset02,
    width: 474,
    height: 685
  },
  {
    src: FilmAsset03,
    width: 37,
    height: 46
  },
  {
    src: FilmAsset04,
    width: 3,
    height: 4
  },
  {
    src: FilmAsset05,
    width: 1,
    height: 1
  },
  {
    src: FilmAsset06,
    width: 16,
    height: 9
  },
  {
    src: FilmAsset07,
    width: 16,
    height: 9
  },
  {
    src: FilmAsset08,
    width: 5,
    height: 4
  },
  {
    src: FilmAsset09,
    width: 2155,
    height: 1838
  },
  {
    src: FilmAsset010,
    width: 709,
    height: 983
  },
  {
    src: FilmAsset011,
    width: 259,
    height: 226
  },
  {
    src: FilmAsset012,
    width: 9,
    height: 16
  },
  {
    src: FilmAsset013,
    width: 1089,
    height: 2234
  },
  {
    src: FilmAsset014,
    width: 16,
    height: 9
  },
  {
    src: FilmAsset015,
    width: 16,
    height: 9
  },
  {
    src: FilmAsset016,
    width: 1675,
    height: 2094
  },
  {
    src: FilmAsset017,
    width: 3,
    height: 2
  },
  {
    src: FilmAsset018,
    width: 2639,
    height: 1760
  },
  {
    src: FilmAsset019,
    width: 1596,
    height: 1596
  },
  {
    src: FilmAsset020,
    width: 2717,
    height: 1590
  },
  {
    src: FilmAsset021,
    width: 2092,
    height: 1603
  },
  {
    src: FilmAsset022,
    width: 1163,
    height: 1652
  },
  {
    src: FilmAsset023,
    width: 1879,
    height: 1680
  },
  {
    src: FilmAsset024,
    width: 2311,
    height: 1742
  },
  {
    src: FilmAsset025,
    width: 2109,
    height: 1742
  },
  {
    src: FilmAsset026,
    width: 1618,
    height: 1748
  },
];

const commercialsAssets = [
  {
    src: CommercialsAsset01,
    width: 1832,
    height: 1893,
  },
  {
    src: CommercialsAsset02,
    width: 2133,
    height: 1804,
  },
  {
    src: CommercialsAsset03,
    width: 2673,
    height: 1766,
  },
  {
    src: CommercialsAsset04,
    width: 2616,
    height: 1454,
  },
]

export const PortfolioPageSections: PortfolioPageSectionsProps[] = [
  {
    sectionTitle: "Photography",
    sectionAssets: photographyAssets
  },
  {
    sectionTitle: "Film",
    sectionAssets: filmAssets
  },
  {
    sectionTitle: "Commercial & Corporate",
    sectionAssets: commercialsAssets,
  }
]