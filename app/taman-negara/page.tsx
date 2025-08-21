import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Container from '@/components/Layout/Container'
import Paragraph from '@/components/Paragraph'
import Ages from '@/public/images/ages.svg'
import Carret from '@/public/images/carret.svg'
import Cost from '@/public/images/cost.svg'
import Duration from '@/public/images/duration.svg'
import EnrollmentDeadline from '@/public/images/enrollment_deadline.svg'
import Highlights1 from '@/public/images/highlights_1.webp'
import Highlights2 from '@/public/images/highlights_2.webp'
import Highlights3 from '@/public/images/highlights_3.webp'
import Impact from '@/public/images/impact.svg'
import Itinerary1 from '@/public/images/itinerary_1.webp'
import ProgramTypes from '@/public/images/program_types.svg'
import Sologan from '@/public/images/taman_negara_sologan.svg'
import Image from 'next/image'

export default function TamanNegara() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('../public/images/mobile_cover.webp')] bg-cover bg-center bg-no-repeat md:h-screen md:max-h-[655px] md:bg-[url('../public/images/taman_negara_cover.webp')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center px-5 md:px-[100px]">
          <Image src={Sologan} layout="responsive" alt="reativity-activity-service" />

          <h2 className="mb-[77px] mt-3 text-center text-[16px] font-[800] text-white md:text-[35px]">
            22 OCTOBER – 26 OCTOBER 2025
          </h2>

          <Button>Sign Up Now</Button>
        </div>
      </div>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">LET'S TAKE A LOOK OUR JOURNEY</Heading>

        <div className="mt-10 flex justify-center">
          <Button>Watch more our trips</Button>
        </div>
      </Container>

      <Container className="relative z-0 bg-[url('../public/images/wilderness_expedition_cover.webp')]">
        <Heading color="text-white">ASEAN ADVENTURE: WILDERNESS EXPEDITION</Heading>

        <div className="absolute inset-0 z-[-1] bg-[#00712D] opacity-50" />

        <div className="absolute inset-0 z-[-1] bg-[#000] opacity-50" />

        <Paragraph className="text-white">
          Experience a unique 7-day journey blending urban exploration, thrilling nature, and
          cultural immersion across Singapore and Malaysia. Discover Singapore's iconic landmarks
          before delving into Malaysia's serene landscapes and ancient wonders. Engage in hands-on
          challenges and cultural exchanges for a perfect blend of learning, adventure, and personal
          growth.
        </Paragraph>

        <div className="mt-10 flex justify-center">
          <Button>Download Trip Itinerary</Button>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#22C55E]">HIGHLIGHTS</Heading>

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          {[
            {
              img: Highlights1,
              title: 'City-state of Singapore',
            },
            {
              img: Highlights2,
              title: 'Taman Negara Immersion',
            },
            {
              img: Highlights3,
              title: 'Outdoor challenges',
            },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="flex h-full w-full items-center justify-center rounded-full">
                <Image
                  src={item.img}
                  className="max-h-60 max-w-60 object-cover md:max-h-full md:max-w-full"
                  layout="responsive"
                  alt=""
                />
              </div>

              <h3 className="mt-2.5 text-[20px] font-[900] text-[#00712D] md:mt-10 md:text-[24px]">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="bg-[#00712D]">
        <Heading color="text-white">TRIP OVERVIEW</Heading>

        <ul className="grid grid-cols-3 md:grid-cols-6">
          {[
            {
              img: EnrollmentDeadline,
              title: 'Enrollment Deadline',
              description: 'July 25th 2025',
            },
            {
              img: Cost,
              title: 'Cost',
              description: 'Price',
            },
            {
              img: Ages,
              title: 'Ages',
              description: 'Senior: Ages 19 - 22\nJunior: Ages 14 - 18',
            },
            {
              img: Duration,
              title: 'Duration',
              description: '5 days',
            },
            {
              img: ProgramTypes,
              title: 'Program Types',
              description: '7 days',
            },
            {
              img: Impact,
              title: 'Impact',
              description: 'Deepen knowledge\nSharpen soft skills',
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-start space-y-1 md:space-y-2.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full md:h-[88px] md:w-[88px]">
                <Image
                  src={item.img}
                  className="h-full w-full object-cover"
                  layout="responsive"
                  alt=""
                />
              </div>

              <div className="text-center text-[14px] font-[900] text-white md:text-[18px]">
                {item.title}
              </div>

              <Paragraph className="text-white">{item.description}</Paragraph>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <Heading color="text-[#22C55E]">OUTCOMES</Heading>

        <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-t-[10px] border border-[#00712D] md:grid-cols-2 md:gap-0">
          {[
            {
              title: 'Community Impact',
              contents: [
                {
                  title: 'Cultural Exchanges',
                  description:
                    'Students directly engaging with the traditions, customs activities and daily lives of communities in Singapore and Malaysia.',
                },
                {
                  title: 'Mutual Understanding',
                  description:
                    'Through meaningful and cultural immersion, the program builds relationship between students and local populations in Singapore and Malaysia.',
                },
                {
                  title: 'Local Engagement',
                  description:
                    'Students experience hands-on farm to interact with local practices and livelihoods, potentially strengthening community ties and cultural preservation efforts in a supportive manner.',
                },
              ],
            },
            {
              title: 'Self-Impact on Students',
              contents: [
                {
                  title: 'Personal Growth',
                  description:
                    'Fostering adaptability, resilience, and a sense of adventure by pushing beyond ordinary experiences.',
                },
                {
                  title: 'Expand Insights',
                  description:
                    'Gain real-world insights through urban exploration, thrilling nature adventures, and active engagement with diverse environments.',
                },
                {
                  title: 'Skill Development',
                  description:
                    'Students improve soft skills, such as problem-solving, adaptability, communication, collaboration, critical thinking through experiencing outdoor challenges.',
                },
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center last:border-l last:border-[#00712D]"
            >
              <div className="flex h-10 w-full items-center justify-center bg-[#00712D] text-center text-[20px] font-[800] text-white md:h-[76px] md:text-[32px]">
                {item.title}
              </div>

              <ul className="flex-1 px-2.5 py-6 text-[#00712D] md:px-10 md:py-8">
                {item.contents.map((content, index) => (
                  <li key={index} className="mb-2.5 last:mb-0 md:mb-10">
                    <div className="mb-1.5 flex items-center gap-2.5">
                      <div className="relative aspect-square w-4 md:w-5">
                        <Image src={Carret} alt="" layout="fill" />
                      </div>

                      <div className="text-[14px] font-[900] md:text-[24px]">{content.title}</div>

                      {/* <Image className={activeDropdown === "programs" ? 'rotate-180' : ''} src={ArrowDown} width={12} alt="arrow-down-icon" /> */}
                    </div>

                    <Paragraph className="mb-1.5 ml-[26px] !text-left md:ml-[30px]">
                      {content.description}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className="bg-[#ECFAE5] pb-0 md:pb-0">
        <input
          id="accommodation"
          className="peer/accommodation hidden"
          type="radio"
          name="status"
          defaultChecked
        />

        <input id="itinerary" className="peer/itinerary hidden" type="radio" name="status" />

        <input id="general_note" className="peer/general_note hidden" type="radio" name="status" />

        <input id="faq" className="peer/faq hidden" type="radio" name="status" />

        {/* <div className="mb-10 flex justify-center"> */}
        <label className="hidden w-[140px] md:inline-block" />

        <label
          htmlFor="accommodation"
          className="inline w-fit cursor-pointer items-center justify-center rounded-[10px] px-1.5 py-0.5 text-center text-[10px] font-[800] text-[#22C55E80] peer-checked/accommodation:bg-[#00712D] peer-checked/accommodation:text-white md:px-2.5 md:py-1.5 md:text-[32px]"
        >
          ACCOMMODATION
        </label>

        <label
          htmlFor="itinerary"
          className="inline w-fit cursor-pointer items-center justify-center rounded-[10px] px-1.5 py-0.5 text-center text-[10px] font-[800] text-[#22C55E80] peer-checked/itinerary:bg-[#00712D] peer-checked/itinerary:text-white md:px-2.5 md:py-1.5 md:text-[32px]"
        >
          ITINERARY
        </label>

        <label
          htmlFor="general_note"
          className="inline w-fit cursor-pointer items-center justify-center rounded-[10px] px-1.5 py-0.5 text-center text-[10px] font-[800] text-[#22C55E80] peer-checked/general_note:bg-[#00712D] peer-checked/general_note:text-white md:px-2.5 md:py-1.5 md:text-[32px]"
        >
          GENERAL NOTE
        </label>

        <label
          htmlFor="faq"
          className="inline w-fit cursor-pointer items-center justify-center rounded-[10px] px-1.5 py-0.5 text-center text-[10px] font-[800] text-[#22C55E80] peer-checked/faq:bg-[#00712D] peer-checked/faq:text-white md:px-2.5 md:py-1.5 md:text-[32px]"
        >
          FAQ
        </label>

        <label className="hidden w-[140px] md:inline-block" />
        {/* </div> */}

        <div className="hidden border-b border-b-[#00712D] peer-checked/accommodation:block">
          <Container className="bg-[#ECFAE5] !p-2.5 md:pt-10">
            <div className="mb-1.5 text-[18px] font-[900] text-[#00712D] md:text-[24px]">
              Janda Baik Stay
            </div>

            <Paragraph className="mb-10 !text-left">
              Enjoy a comfortable and immersive stay at a well-situated resort in the Janda Baik
              area for the majority of your program. This provides a serene base amidst nature,
              offering a relaxing environment after your adventurous days. Specific details
              regarding rooming and facilities will be provided upon confirmation.
            </Paragraph>

            <div className="mb-1.5 text-[18px] font-[900] text-[#00712D] md:text-[24px]">
              Immersive Community Experience
            </div>

            <Paragraph className="mb-10 !text-left">
              <ul className="list-inside list-disc">
                <li>Discover the National University of Singapore and travel to Janda Baik.</li>

                <li>Experience a Goat Farm (feeding/milking) and an Organic Fitrah Farm.</li>

                <li>
                  Participate in the GEMS Olympic challenges and embark on a thrilling Raft Building
                  & Mission on the water.
                </li>

                <li>Travel to Taman Negara, enjoy a scenic Boat Ride to Lata Berkoh.</li>

                <li>
                  Experience Rapid Shooting, visit a Batek Tribe village, hike to Teresek Hill and
                  enjoy a Canopy Walk.
                </li>

                <li>Departure to Kuala Lumpur.</li>
              </ul>
            </Paragraph>
          </Container>
        </div>

        <div className="hidden border-b border-b-[#00712D] peer-checked/itinerary:block">
          <Container className="bg-[#ECFAE5] pt-10 md:pt-10">
            {[
              {
                imgs: [Itinerary1, Itinerary1],
                title: 'Singapore Arrival & Welcome',
                descriptions: [
                  `Check in to accommodation and get acquainted with your fellow. Brief orientation of the trip program and key highlights.`,
                ],
              },
              {
                imgs: [Itinerary1, Itinerary1],
                title: 'Singapore Exploration & Journey to Janda Baik',
                descriptions: [
                  `Discover the National University of Singapore and the stunning Gardens by the Bay before traveling to Janda Baik and checking into your resort.Discover the National University of Singapore and the stunning Gardens by the Bay before traveling to Janda Baik and checking into your resort.`,
                ],
              },
              {
                imgs: [Itinerary1, Itinerary1],
                title: 'Farm Life & River Trekking',
                descriptions: [
                  `Experience a Goat Farm and an Organic Fitrah Farm, followed by an exhilarating Sg Benus River Trekking adventure.`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`mb-5 flex flex-col items-start gap-5 last:mb-0 md:mb-10 md:gap-6 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="flex w-full flex-1 gap-2.5 md:gap-6">
                  {item.imgs.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      className="aspect-square w-full overflow-hidden rounded-[10px]"
                      layout="responsive"
                      alt=""
                    />
                  ))}
                </div>

                <div
                  className={`flex-1 ${index % 2 !== 0 ? 'text-right' : 'text-left'} text-[#00712D]`}
                >
                  {item.title && (
                    <div className="text-[18px] font-[900] md:mb-6 md:text-[24px]">
                      {item.title}
                    </div>
                  )}

                  <ul className={`${item.descriptions.length > 1 ? 'ml-4 list-disc' : ''}`}>
                    {item.descriptions.map((description, descriptionIndex) => (
                      <li
                        key={descriptionIndex}
                        className={`${item.descriptions.length > 1 ? 'last:mb-0 md:mb-6' : ''}`}
                      >
                        <p
                          className="text-[14px] font-[600] md:text-[18px]"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Container>
        </div>

        <div className="hidden border-b border-b-[#00712D] peer-checked/general_note:block">
          <Container className="bg-[#ECFAE5] !p-2.5 pt-10 md:pt-10">
            <Heading color="text-[#22C55E]">WHAT YOU NEED TO BRING</Heading>

            <Paragraph>
              <ul className="flex-1 p-5 text-[#00712D] md:px-10 md:py-8">
                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[18px] font-[900] md:text-[24px]">Backpack</div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    <ul className="list-inside list-disc">
                      <li>
                        Bring versatile, lightweight, and quick-drying clothes and school uniform.
                      </li>

                      <li>
                        Long, loose-fitting shorts/skirts for daily activities and service projects;
                        T-shirts with sleeves, lightweight hoodie are good.
                      </li>

                      <li>Comfortable crocs, walking shoes for outdoor activities.</li>
                    </ul>
                  </Paragraph>
                </li>

                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[18px] font-[900] md:text-[24px]">
                      Essential Documents
                    </div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    <ul className="list-inside list-disc">
                      <li>{`Passport (with validity > 6 months) and a photocopy of passport.`}</li>

                      <li>Visa documentation.</li>

                      <li>Our emergency contacts list.</li>

                      <li>Money (you’ll be responsible for carrying).</li>
                    </ul>
                  </Paragraph>
                </li>

                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[18px] font-[900] md:text-[24px]">
                      Personal Daypack
                    </div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    <ul className="list-inside list-disc">
                      <li>Reusable water bottle, sunglasses, hat for sun protection.</li>

                      <li>Personal medication.</li>

                      <li>Mobile phone, portable charger, camera.</li>

                      <li>Extra paperwork for service hours credit (if needed).</li>
                    </ul>
                  </Paragraph>
                </li>
              </ul>
            </Paragraph>
          </Container>
        </div>

        <div className="hidden border-b border-b-[#00712D] peer-checked/faq:block">
          <Container className="bg-[#ECFAE5] pt-10 md:pt-10">
            <Heading color="text-[#22C55E]">WHAT YOU NEED TO BRING</Heading>

            <Paragraph>
              <ul className="flex-1 px-10 py-8 text-[#00712D]">
                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[24px] font-[900]">Accommodation</div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    Hotels: Students will be staying at a hotel where they can expect to stay two
                    students per room with en suite bathrooms with toilets and hot water.
                  </Paragraph>
                </li>

                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[24px] font-[900]">Activities</div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    Students will engage directly in
                    <ul className="list-inside list-disc">
                      <li>
                        Urban Exploration: Discover iconic landmarks and academic sites in
                        Singapore.
                      </li>

                      <li>
                        Rural Engagement: Participate in unique farm experiences (goat, organic
                        farming) and cultural exchanges with local communities like the Batek Tribe.
                      </li>

                      <li>
                        Nature Adventures: Embark on thrilling river treks, raft building missions,
                        jungle hikes, and wildlife encounters within the lush landscapes of Janda
                        Baik and Taman Negara.
                      </li>

                      <li>
                        Team Challenges: Engage in fun and challenging team-building activities like
                        the GEMS Olympic. Our goal is to provide a comprehensive experience that
                        combines learning, adventure, and cultural immersion.
                      </li>
                    </ul>
                  </Paragraph>
                </li>

                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[24px] font-[900]">Health and Safety</div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    Ensuring the safety of your teen as they travel with us is a top priority.
                    <ul className="list-inside list-disc">
                      <li>Please review our Sustainability.</li>

                      <li>Trained Local Teams.</li>

                      <li>
                        Safety Briefings for all adventure activities (trekking, rafting, rapid
                        shooting).
                      </li>

                      <li>
                        Medical Recommendations and any necessary medication for the region. A basic
                        first-aid kit is also recommended for personal use.
                      </li>

                      <li>
                        Emergency Support 24/7 in-country emergency support, and clear emergency
                        protocols are in place for all situations.
                      </li>

                      <li>
                        Travel Insurance covering medical emergencies, evacuation, and
                        activity-related incidents is mandatory for all participants.
                      </li>

                      <li>
                        Cultural Sensitivity to ensure a safe and respectful interaction with
                        communities.
                      </li>
                    </ul>
                  </Paragraph>
                </li>

                <li className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2.5">
                    <Image src={Carret} alt="" width={20} />

                    <div className="mb-1.5 text-[24px] font-[900]">Insurance</div>
                  </div>

                  <Paragraph className="mb-1.5 ml-[30px] !text-left">
                    Our Protection Plan helps protect our participants, their belongings, and their
                    travel investment in those unforeseen circumstances that may arise during
                    travel.
                  </Paragraph>
                </li>
              </ul>
            </Paragraph>
          </Container>
        </div>
      </Container>

      <Container className="bg-[#ECFAE5]">
        <Heading color="text-[#00712D]">
          Contact us to find out how Our Volunteer Programs can help your students achieve their
          learning outcomes during a school trip abroad!
        </Heading>

        <div className="mt-10 flex justify-center">
          <Button path="/contact-us">Contact Us</Button>
        </div>
      </Container>
    </main>
  )
}
