"use client";

import React from "react";
import { FAQItem, FAQS_DATA } from "@/app/constants/faqs.constants";
import { useAccordion } from "@/app/components/ui/accordion/use-accordion.hook";
import { Accordion } from "../../ui/accordion/accordion";

export default function FAQSection() {
  const accordion = useAccordion();

  return (
    <section className="w-full overflow-hidden py-8 md:py-16">
      <div className="max-w-width mx-auto rounded-xl bg-white px-4 py-8 md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex flex-col items-center text-center md:w-1/3 md:items-start md:text-right">
            <h2 className="text-3xl font-bold text-black md:text-4xl md:font-black">
              FAQ
            </h2>
            <h3 className="mt-2 text-lg font-bold text-black md:text-2xl">
              سوالات متداولی که از ما می‌پرسید
            </h3>
            <p className="text-text-secondary mt-4 hidden text-sm leading-relaxed md:block md:text-base">
              سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
              شده اند:
            </p>
          </div>

          <div className="md:w-2/3">
            <Accordion.Root value={accordion}>
              {FAQS_DATA.map((faq: FAQItem) => (
                <Accordion.Item key={faq.id} id={faq.id}>
                  <Accordion.Trigger id={faq.id}>
                    <h3>{faq.question}</h3>
                  </Accordion.Trigger>

                  <Accordion.Content id={faq.id}>
                    <p>{faq.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
