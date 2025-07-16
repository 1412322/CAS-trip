import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Slider from '@/components/Slider/page'
import MostPopularArticles1 from '@/public/images/most_popular_articles_1.png'
import MostPopularArticles2 from '@/public/images/most_popular_articles_2.png'
import MostPopularArticles3 from '@/public/images/most_popular_articles_3.png'
import MostPopularArticles4 from '@/public/images/most_popular_articles_4.png'
import MostPopularArticles5 from '@/public/images/most_popular_articles_5.png'
import Image from 'next/image'

export default function Resources() {
  return (
    <main>
      {/* ABOUT US */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E] pt-20">
      MOST POPULAR ARTICLES
        </Heading>

<Slider articles={[
  {
    title: "Skill Up:\nReady for What's Next",
    img: MostPopularArticles1,
  },
  {
    title: "Why are Community Programs\nbenefit for students?",
    img: MostPopularArticles2,
  },
  {
    title: "Volunteer Guidebook\nfor Beginner",
    img: MostPopularArticles3,
  },
  {
    title: "Ready to Make Friends\n& Explore New Skills",
    img: MostPopularArticles4,
  },
  {
    title: "Beyond the Classroom: Your Adventure in Personal Growth",
    img: MostPopularArticles5,
  },
]} />
        </Container>

        <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
      <Heading color="text-[#22C55E]">
      TRIP DIARIES
        </Heading>

        <div className="space-y-10">
          {[
  {
    title: "A Week Teaching English in Rural Vietnam",
    description:
      "Let’s watch our  in vibrant local culture and make a real difference by teaching English in rural Vietnamese communities. See how we bring joy and new opportunities to students, guided by our well-organized program.",
    thumbnail: "/videos/vy-thumb.png", // Replace with your video/image path
  },
  {
    title: "Helping a Community Center in Vietnam\nThe Perfect Journey",
    description:
      "Discover the power of collective effort! This video shows our dedicated teams working alongside local communities in Vietnam to build and support essential community centers, making positive changes together.",
    thumbnail: "/videos/community-thumb.png",
  },
  {
    title: "Meet Our Journey at  School in Thailand",
    description:
      "Join us to see students’ heartwarming connections with the bright, eager children at a special school in Thailand. Witness the joy and progress coming from our genuine interaction and support.",
    thumbnail: "/videos/thailand-thumb.png",
  },
  {
    title: "Q&A Sessions with Our students",
    description:
      "Want to know what our trips are really like? Hear directly from our incredible students as they share their honest experiences, personal growth, and the impact they've made on our trip programs.",
    thumbnail: "/videos/qa-thumb.png",
  },
].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-28">
              <div className="flex-1 border-2 border-[#00712D] rounded-[20px] w-full h-[355px] relative bg-white overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-[#00712D] flex-1">
                <h3 className="font-[900] text-[24px] mb-6">
                  {item.title}
                </h3>

                <p className="text-[18px] font-[600]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
</Container>

<Container className="bg-[#ECFAE5]">
      <Heading color="text-[#00712D]">
      Ready to make an impact? Explore our programs and start your ASEAN adventure today!
        </Heading>

        <div className="mt-10 flex justify-center">
        <Button>Explore our programs</Button>
        </div>
</Container>
    </main>
  )
}
