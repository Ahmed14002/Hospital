import React from 'react';
import BloodRequest from './BloodRequest';
import RecentDonors from './RecentDonors';
import Date from './Date';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-9 pb-2">
      <BloodRequest />
      <div className="flex h-[380px] w-full flex-row gap-10">
        <RecentDonors />
        <Date />
      </div>
    </div>
  );
}
