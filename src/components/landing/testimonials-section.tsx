
'use client';

import { TrendingUp } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SectionTitle } from './section-title';

export function TestimonialsSection() {
  const testimonials = [
    'https://raw.githubusercontent.com/leosabbadin/imagem/6f07e79859b98373d89691006aee3f95e4c6218a/5.png',
    'https://raw.githubusercontent.com/leosabbadin/imagem/6f07e79859b98373d89691006aee3f95e4c6218a/7.png',
    'https://raw.githubusercontent.com/leosabbadin/imagem/6f07e79859b98373d89691006aee3f95e4c6218a/8.png',
    'https://raw.githubusercontent.com/leosabbadin/imagem/6f07e79859b98373d89691006aee3f95e4c6218a/9.png',
  ];

  return (
    <section id="provas" className="section mx-auto max-w-7xl px-6 py-16">
      <SectionTitle>
        <div className="flex items-center gap-3">
          <TrendingUp className="size-8 text-primary" /> O que nossos alunos
          dizem:
        </div>
      </SectionTitle>

      <div className="mt-8 flex justify-center">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Depoimento de aluno ${index + 1}`}
                      width={400}
                      height={800}
                      className="aspect-[9/16] w-full object-cover"
                      data-ai-hint="student testimonial"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
