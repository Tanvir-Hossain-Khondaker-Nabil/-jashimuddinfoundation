import React from 'react'
import InnerSilder from '../components/InnerSilder'
import Aboutwrapper from '../components/Aboutwrapper'
import ServiceWrapper from '../components/ServiceWrapper'
import Audio from '../components/Audio'
import PillingWrapper from '../components/PillingWrapper'
import UpcomingWrapper from '../components/UpcomingWrapper'
import PrayingWrapper from '../components/PrayingWrapper'
import PrayerWrapper from '../components/PrayerWrapper'
import TeamWrapper from '../components/TeamWrapper'
import CharityWrapper from '../components/CharityWrapper'
import TestimonialWrapper from '../components/TestimonialWrapper'
import GalleryWrapper from '../components/GalleryWrapper'
import Community from '../components/Community'
import Subcribed from '../components/Subcribed'

export default function Home() {
  return (
    <div>
        <InnerSilder/>
        <Aboutwrapper/>
        <ServiceWrapper/>
        <Audio/>

        <PillingWrapper/>
        <UpcomingWrapper/>
        <PrayingWrapper/>

        <PrayerWrapper/>
        <TeamWrapper/>

        <CharityWrapper/>
        <TestimonialWrapper/>

        <GalleryWrapper/>
        <Community/>
        <Subcribed/>
    </div>
  )
}
