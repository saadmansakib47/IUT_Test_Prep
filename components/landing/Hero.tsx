import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-[#004B49] text-white pb-20 lg:pb-0 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16 lg:pt-24 pb-16 lg:pb-24">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ace Your IUT Admission Test
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Master your preparation with realistic mock tests, instant feedback, and AI-powered insights. 
              Join thousands of students who trust IUT MockHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/sign-up">
                <button className="px-4 py-2 bg-[#003333] text-white border-2 border-white rounded-md font-medium transition-all hover:bg-white hover:text-[#003333] w-full sm:w-auto">
                  Start Learning
                </button>
              </Link>
              <Link href="/#see-it-in-action">
                <Button variant="secondary" className="w-full sm:w-auto !px-4 !py-2">
                  See How it Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image - Extends beyond section */}
          <div className="hidden lg:block absolute right-0 top-16 w-[520px] xl:w-[580px] z-10">
            <div 
              className="overflow-hidden shadow-2xl "
              style={{
                borderTopLeftRadius: '3rem',
                borderBottomRightRadius: '3rem',
                height: '650px'
              }}
            >
              <Image
                src="/landing.jpg"
                alt="IUT Campus"
                width={500}
                height={650}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
