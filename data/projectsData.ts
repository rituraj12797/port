interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Trade Matching Engine',
    description: `A high-performance, multi-core trade matching engine designed to replicate the core logic and architecture of a modern electronic stock exchange.`,
    imgSrc: 'https://github.com/rituraj12797/Capitol_main/blob/main/assets/Capitol.png',
    href: 'https://github.com/rituraj12797/Capitol_main',
  },
  {
    title: 'Key Value Store',
    description: `A key value store implementtion in Go, implemented from scratch with WAL logging, Double buffering and B+ Trees. `,
    imgSrc: '',
    href: 'https://github.com/rituraj12797/GoD-B',
  },
  {
    title: 'Version Control System',
    description: `A version control system in Go, implemented using Myer's diffing algorithm `,
    imgSrc: '',
    href: 'https://github.com/rituraj12797/VCON',
  },
  {
    title: 'Mail automation app',
    description: `A mail automation utility built on a microservice architecture that broadcasts personalized emails to large number of recipients on behalf of a user via Gmail integration using GCP`,
    imgSrc: 'https://commu-net.vercel.app/assets/Communet-b_0tT9y4.png',
    href: 'https://commu-net.vercel.app/',
  }

]

export default projectsData
