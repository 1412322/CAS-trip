import { Montserrat } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";
import "./global.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export const metadata = {
  title: "CAS Trips",
  description: "Youth travel programs for growth and adventure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#E9F4E5] text-gray-900`}>
        <Head>
          <title>CAS Trips - Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        {children}

        {/* FOOTER */}
        <footer className="bg-green-800 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">CAS TRIPS</h3>
              <p>Asia Youth</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Expore</h4>
              <ul className="space-y-1">
                <li>Nature Camps</li>
                <li>Subject Camps</li>
                <li>Leadership Camps</li>
                <li>//////</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Address</h4>
              <p>123 Anywhere St. Any City 1234</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Office Hours</h4>
              <p>
                Monday: 8am – 7pm
                <br />
                Tuesday: 8am – 5pm
                <br />
                Wednesday: 8am – 5pm
                <br />
                Thursday: 8am – 7pm
                <br />
                Friday: 8am – 5pm
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p>
                Telephone:
                <br />
                Mobile:
                <br />
                Gmail:
              </p>
              <h4 className="font-bold mt-4 mb-2">Social Media Contacts</h4>
              <div className="flex gap-3 text-2xl">
                <Link href="#">
                  <i className="fab fa-facebook-square" />
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="#">
                  <i className="fab fa-tiktok" />
                </Link>
                <Link href="#">
                  <i className="fab fa-youtube" />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* BACK TO TOP BUTTON */}
        <BackToTopButton />
      </body>
    </html>
  );
}
