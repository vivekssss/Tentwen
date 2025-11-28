'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-slate-950">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      </div>

      <div className="relative w-full">
        <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl w-full">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <p className="text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                    Welcome To Tentwen
                  </p>
                </div>
              </div>

              <div className="space-y-4 overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 delay-100 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Transforming Experiences
                  </h1>
                </div>
              </div>

              <div className="space-y-6 overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 delay-200 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    A premium platform built with modern technology, designed for businesses that demand excellence. Create, scale, and innovate with ease.
                  </p>
                </div>
              </div>

              <div className="pt-4 overflow-hidden">
                <div
                  className={`transform transition-all duration-1000 delay-300 inline-flex gap-4 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                >
                  <Button
                    size="lg"
                    className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                  >
                    Explore Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/50 dark:to-transparent">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ${
                scrollY > 200 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
                Why Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lightning Fast',
                  description: 'Optimized performance that exceeds industry standards with minimal load times.',
                  delay: 0,
                },
                {
                  title: 'Secure & Reliable',
                  description: 'Enterprise-grade security with 99.99% uptime guarantee and data encryption.',
                  delay: 100,
                },
                {
                  title: 'Scalable Solution',
                  description: 'Grow your business without worrying about technical limitations or infrastructure.',
                  delay: 200,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white transition-all duration-300 bg-white dark:bg-slate-900/50 hover:shadow-xl transform ${
                    scrollY > 200 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${200 + item.delay}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${
                scrollY > 600 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Join thousands of satisfied users and transform your business today.
              </p>
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
