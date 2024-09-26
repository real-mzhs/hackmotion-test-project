"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Chart from "../public/chart.svg";
import Section from "../components/Section";
import Separator from "../components/Separator";
import Button from "../components/Button";
import Tooltip from "../components/Tooltip";
import { Card, CardContent, CardTitle } from "@/components/Card";
import ProgressIndicator from "../components/ProgressIndicator";
import { breakData, BreakKey } from "../lib/breakData";
import { capitalizeFirstLetter, cn } from "../lib/utils";
import { Accordion, AccordionItem } from "../components/Accordion";
import ScrollBar from "../components/ScrollBar";
import useVideoEffect from "../hooks/useVideoEffect";
import { ArrowRight } from "lucide-react";
import { usePageContent } from "@/components/PageContentClientWrapper";

const getIndex = (key: BreakKey): number =>
  breakData.findIndex((item) => item.key === key);

const BreakChartSection: React.FC<{
  visibleItems: typeof breakData;
}> = ({ visibleItems }) => {
  const data = usePageContent();

  if (!data) return <div>No content available</div>;

  return (
    <div className="w-full md:w-[565.5px] h-[323px] md:h-[439px] bg-[#F7F7F7] rounded-[16px] p-4 flex flex-col justify-between relative">
      {visibleItems.map((item) => (
        <div
          key={item?.key}
          className={cn(
            "flex gap-4 items-center w-full",
            visibleItems.length === 2 && "h-full items-start"
          )}
        >
          <p className="text-xs font-medium text-black text-opacity-70 inline-flex shrink-0">
            {item?.key
              ? `Break ${capitalizeFirstLetter(item.key)}`
              : `${breakData[breakData.length - 1].key}+`}
          </p>
          <div className="h-[8px] w-full opacity-70 bg-[radial-gradient(#000000_0px,transparent_1px)] [background-size:8px_8px]" />
        </div>
      ))}
      <Image
        unoptimized
        src={Chart}
        alt="Chart"
        className="absolute h-full z-5 bottom-8 -top-4 left-4 right-0 px-8 md:px-0 md:top-auto md:right-4 md:left-20 md:h-full md:max-w-[467px]"
      />
      <Tooltip
        variant="primary"
        className="absolute top-[36%] left-[24%] md:top-[30%] md:left-[24%] transform -translate-x-1/2 -translate-y-1/2"
      >
        {data.pageContent.beforeTooltipLabel}
      </Tooltip>
      <Tooltip
        variant="accent"
        className="absolute top-[75%] left-[75%] md:top-[80%] md:left-[82%] transform -translate-x-1/2 -translate-y-1/2"
      >
        {data.pageContent.afterTooltipLabel}
      </Tooltip>
    </div>
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("break");

  const data = usePageContent();

  const { videoRef, scrollPercent, accordionIndex, handleAccordionToggle } =
    useVideoEffect();

  const breakKey = useMemo(
    () =>
      (breakData.find((item) => item.key === query)?.key as BreakKey) ??
      ("par" as BreakKey),
    [query]
  );

  const breakValue = useMemo(
    () => breakData.find((item) => item.key === breakKey)!,
    [breakKey]
  );

  const breakIndex = useMemo(() => getIndex(breakKey), [breakKey]);

  const visibleItems = useMemo(
    () =>
      [
        breakData.length === breakIndex + 1
          ? { key: "+100" }
          : breakData[breakIndex + 1],
        breakData[breakIndex],
        breakData[breakIndex - 1],
      ].filter(Boolean),
    [breakIndex]
  );

  const formatSectionTitle = (title: string) => {
    return title.split("{break}").map((part, index) => {
      if (index === 1) {
        return (
          <span key={index} className="text-accent">
            break {breakKey as string}
          </span>
        );
      }
      return part;
    });
  };

  if (!data) return <div>No content available</div>;

  return (
    <main>
      <Section className="flex flex-col md:flex-row gap-8 items-center md:h-[1024px]">
        <div className="grid gap-8 md:gap-12">
          <h1 className="text-md md:text-title w-full text-black font-medium">
            {formatSectionTitle(data.pageContent.section1Title)}
          </h1>
          <div className="grid gap-8 md:gap-12">
            <div className="grid gap-3">
              <p className="text-base md:text-lg font-normal">
                {data.packIncludes.packIncludesHeading}
              </p>
              <Separator />
              <ul className="border-l-[4px] grid gap-4 border-accent pl-3 text-[20px] leading-[26px] md:text-md font-medium">
                <li>{data.packIncludes.packItems1}</li>
                <li>{data.packIncludes.packItems2}</li>
                <li>{data.packIncludes.packItems3}</li>
              </ul>
            </div>
            <Button>
              <p>{data.pageContent.primaryCta}</p>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="grid gap-3 md:mr-[87px] w-full md:w-fit">
          <BreakChartSection visibleItems={visibleItems} />
          <div className="grid md:flex gap-3 w-full">
            <Card>
              <CardTitle>{data.card1.cardTitle}</CardTitle>
              <CardContent>
                <ProgressIndicator
                  iconSrc={data.card1.progress1Image.node.sourceUrl}
                  label={data.card1.progress1Label}
                  currentProgress={breakValue.value?.consistency}
                  improvedProgress={breakValue.value?.improvedConsistency}
                />
                <ProgressIndicator
                  iconSrc={data.card1.progress2Image.node.sourceUrl}
                  label={data.card1.progress2Label}
                  currentProgress={breakValue.value?.distance}
                  improvedProgress={breakValue.value?.improvedDistance}
                />
                <ProgressIndicator
                  iconSrc={data.card1.progress3Image.node.sourceUrl}
                  label={data.card1.progress3Label}
                  currentProgress={breakValue.value?.ballFlight}
                  improvedProgress={breakValue.value?.improvedBallFlight}
                />
              </CardContent>
            </Card>
            <Card>
              <CardTitle>{data.card2.cardTitle}</CardTitle>
              <CardContent className="items-center">
                <Image
                  unoptimized
                  width={132.52}
                  height={122.5}
                  src={data.card2.cardImage.node.sourceUrl}
                  alt="Determinate"
                  className="pointer-events-none"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="grid gap-4 md:gap-[72px] my-8">
        <div className="grid gap-4 md:gap-8">
          <h2 className="text-title md:text-xl font-medium text-accent">
            {data.pageContent.section2Title}
          </h2>
          <Separator />
        </div>
        <div className="grid md:flex gap-12">
          <video
            className="w-full h-auto md:max-w-[746px]"
            preload="none"
            autoPlay
            loop
            muted
            ref={videoRef}
          >
            <source
              src={data.pageContent.coachingVideo.node.mediaItemUrl}
              type="video/mp4"
            />
          </video>
          <ScrollBar percentage={scrollPercent} />
          <Accordion
            activeIndex={accordionIndex}
            onItemToggle={handleAccordionToggle}
          >
            <AccordionItem
              value="item-1"
              title={data.accordion.accordion1Title}
            >
              {data.accordion.accordion1Content}
            </AccordionItem>
            <AccordionItem
              value="item-2"
              title={data.accordion.accordion2Title}
            >
              {data.accordion.accordion2Content}
            </AccordionItem>
            <AccordionItem
              value="item-3"
              title={data.accordion.accordion3Title}
            >
              {data.accordion.accordion3Content}
            </AccordionItem>
          </Accordion>
        </div>
      </Section>
    </main>
  );
}
