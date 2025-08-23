import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Slider from '@/components/Slider/page'
import MostPopularArticles1 from '@/public/images/most_popular_articles_1.png'
import MostPopularArticles2 from '@/public/images/most_popular_articles_2.png'
import MostPopularArticles3 from '@/public/images/most_popular_articles_3.png'
import MostPopularArticles4 from '@/public/images/most_popular_articles_4.png'
import MostPopularArticles5 from '@/public/images/most_popular_articles_5.png'

export default function Resources() {
  return (
    <main>
      {/*  MOST POPULAR ARTICLES */}
      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E] pt-16 md:pt-20">MOST POPULAR ARTICLES</Heading>

        <Slider
          articles={[
            {
              title: "Skill Up:\nReady for What's Next",
              img: MostPopularArticles1,
            },
            {
              title: 'Why are Community Programs\nbenefit for students?',
              img: MostPopularArticles2,
            },
            {
              title: 'Volunteer Guidebook\nfor Beginner',
              img: MostPopularArticles3,
            },
            {
              title: 'Ready to Make Friends\n& Explore New Skills',
              img: MostPopularArticles4,
            },
            {
              title: 'Beyond the Classroom: Your Adventure in Personal Growth',
              img: MostPopularArticles5,
            },
          ]}
        />
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">TRIP DIARIES</Heading>

        <div className="space-y-10">
          {[
            {
              title: 'A Week Teaching English in Rural Vietnam',
              description: 'See how we bring joy and meaningful new opportunities to students.',
              thumbnail: '/videos/vy-thumb.png', // Replace with your video/image path
            },
            {
              title: 'Helping a Community Center in Vietnam\nThe Perfect Journey',
              description:
                'Discover the power of teamwork in supporting alongside local communities in Vietnam.',
              thumbnail: '/videos/community-thumb.png',
            },
            {
              title: 'Meet Our Journey at  School in Thailand',
              description:
                'Join us to see students’ heartwarming connections with the bright, eager children at a special school in Thailand.',
              thumbnail: '/videos/thailand-thumb.png',
            },
            {
              title: 'Q&A Sessions with Our students',
              description:
                'Directly listen to our incredible students sharing experience and personal growth.',
              thumbnail: '/videos/qa-thumb.png',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-28"
            >
              <div className="relative min-h-[180px] w-full flex-1 overflow-hidden rounded-[10px] border-2 border-[#00712D] bg-white md:min-h-[355px] md:rounded-[20px]">
                {/* <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-contain"
                /> */}
              </div>

              <div className="flex-1 text-[#00712D]">
                <h3 className="mb-1 text-[14px] font-[900] md:mb-6 md:text-[24px]">{item.title}</h3>

                <Paragraph className="!text-left">{item.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
      <p className="text-[10px] md:text-[32px] font-[800] text-center text-[#00712D]">
        Ready to make an impact? Explore our programs and start your ASEAN adventure today!
        </p>

        <div className="mt-5 md:mt-10 flex justify-center">
        <Button path="/contact-us">Contact Us</Button>
        </div>
      </Container>
    </main>
  )
}
