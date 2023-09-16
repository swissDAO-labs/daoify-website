'use client';

import { Card } from '@/components/card/card';
import Cobe from '@/components/cobe/cobe';
import Features from '@/components/features/features';
import Feedbacks from '@/components/feedbacks/feedbacks';
import Keyboard from '@/components/keyboard/keyboard';
import Section from '@/components/section/section';
import Separator from '@/components/separator/separator';
import ShowCase from '@/components/showcase/showcase';
import Stars from '@/components/stars/stars';
import Teaser from '@/components/teaser/teaser';
import H2 from '@/components/text/h2';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

const styles = {
  main: ['flex', 'flex-col', 'items-center', 'min-h-screen'].join(' '),
};

const qa = [
  'Do you offer any discounts for annual subscriptions?',
  'What payment methods do you accept?',
  'Is there a free trial available?',
  'Are there any limits on the number of domains?',
  'Are there any limits on the number of team members?',
  'Who can I contact about a custom plan?',
  'What happens if I send more emails than my plan allow?',
];

const FadeInContent = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -20 },
      }}
      transition={{
        delay,
        duration: 0.25,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Stars />

      <div className="pt-48">
        <FadeInContent>
          <Teaser />
        </FadeInContent>
      </div>

      <Section small>
        <FadeInContent delay={0.2}>
          <h1 className="text-md font-bold md:text-lg">Latest Legal Wrapper</h1>
        </FadeInContent>
        <FadeInContent delay={0.4}>
          <div className="flex justify-center">
            <span className="w-2/4 text-sm md:text-base">
              Zero code, maximum speed. Make professional sites easy, fast and
              fun while delivering best-in-className SEO, performance.
            </span>
          </div>
        </FadeInContent>
      </Section>

      <Section small>
        <div className="relative md:px-8 lg:px-16">
          <FadeInContent delay={0.6}>
            <Image
              src={'/dashboard.svg'}
              alt=""
              height={800}
              width={1600}
            />
          </FadeInContent>
        </div>
      </Section>

      <Section id="about" small>
        <Separator />

        <span className="mt-20 text-center text-base">About</span>
        <H2>Cutting-edge features for DAOs</H2>

        <span className="w-2/4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>

        <div className="my-20">
          <Features />
        </div>
      </Section>

      <Section id="process" small>
        <Separator />

        <span className="mt-20 text-center text-base">Process</span>
        <H2>Cutting-edge features for DAOs</H2>

        <div className="mt-20"></div>
      </Section>

      {/* <Section className="hidden md:flex">
          <H2>Always at your command</H2>
          <span className="text-center text-base"></span>

          <div className="border-line relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border p-4 lg:p-6">
            <Keyboard />
          </div>
        </Section> */}

      <Section noPadding>
        <div className="relative flex w-full justify-center overflow-hidden">
          <div className="absolute bottom-0 top-0 z-10 flex items-center justify-center">
            <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:bg-[linear-gradient(to_left,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
              <div className="animate-infinite-slider flex w-full">
                <Feedbacks />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 z-[2] h-full w-full bg-gradient-to-t from-black via-black via-35% to-transparent" />
          <Cobe />
        </div>
      </Section>

      <Section small>
        <Separator />

        <H2 className="my-20">Frequently Asked Questions</H2>

        <Accordion type="single" collapsible className="grid w-96 gap-4">
          {qa.map((question, i) => (
            <AccordionItem key={i} value={`item-${i}`} asChild>
              <Card nested>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* <Section>
          <Analytics />
        </Section> */}

      <Section noPadding>
        <div className="relative min-h-[60rem] w-full">
          <div className="absolute left-0 right-0 top-0 flex w-full justify-center overflow-hidden">
            <div className="aspect-square max-h-[60rem] min-w-[60rem] overflow-hidden rounded-full bg-gradient-to-b from-white from-0% via-white/30 via-[2%] to-white/0 to-25% p-px">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                <div className="mx-auto h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-48 flex flex-col items-center gap-12 text-center">
            <div>
              <h1 className="text-md font-bold md:text-lg">
                Building future for today.
              </h1>
              <h1 className="text-md font-bold md:text-lg">
                Join the Journey.
              </h1>
            </div>

            <div className="relative h-[300px] w-[300px]">
              <Image src={'appIcon.svg'} alt="" fill />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
