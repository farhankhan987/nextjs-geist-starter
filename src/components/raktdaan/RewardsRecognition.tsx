"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RewardsRecognition = () => {
  const rewards = [
    {
      id: 1,
      title: "Life Saver Certificate",
      description: "Awarded for 5 successful blood donations",
      earned: true,
      date: "2024-01-10",
      type: "Certificate",
      points: 500
    },
    {
      id: 2,
      title: "Community Hero Badge",
      description: "Recognition for emergency response donations",
      earned: true,
      date: "2024-01-05",
      type: "Badge",
      points: 300
    },
    {
      id: 3,
      title: "Monthly Champion",
      description: "Top donor of the month with 3 donations",
      earned: false,
      date: null,
      type: "Achievement",
      points: 750
    },
    {
      id: 4,
      title: "Social Impact Award",
      description: "Shared donation story that inspired 10+ new donors",
      earned: true,
      date: "2023-12-20",
      type: "Social",
      points: 400
    }
  ];

  const socialShoutouts = [
    {
      id: 1,
      platform: "Twitter",
      message: "🩸 Shoutout to Priya Singh for her 5th blood donation! A true life saver! #RaktDaan #BloodDonor",
      likes: 127,
      shares: 45
    },
    {
      id: 2,
      platform: "Instagram",
      message: "📸 Celebrating our community hero Vikram Kumar! Thank you for your emergency response donation! 🙏",
      likes: 89,
      shares: 23
    }
  ];

  const sponsorPerks = [
    {
      id: 1,
      sponsor: "HealthCare Plus",
      offer: "Free health checkup",
      validity: "Valid till March 2024",
      claimed: false
    },
    {
      id: 2,
      sponsor: "FitLife Gym",
      offer: "1 month free membership",
      validity: "Valid till February 2024",
      claimed: true
    },
    {
      id: 3,
      sponsor: "MediStore",
      offer: "20% discount on medicines",
      validity: "Valid till April 2024",
      claimed: false
    }
  ];

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-600">Rewards & Recognition</CardTitle>
        <CardDescription>
          Celebrating your contributions with certificates, social recognition, and exclusive perks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Digital Certificates & Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🏆 Your Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <div 
                key={reward.id} 
                className={`p-4 rounded-lg border-2 ${
                  reward.earned 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold ${
                    reward.earned ? 'text-green-700' : 'text-gray-500'
                  }`}>
                    {reward.title}
                  </h4>
                  <Badge variant={reward.earned ? "default" : "secondary"}>
                    {reward.points} pts
                  </Badge>
                </div>
                <p className={`text-sm mb-3 ${
                  reward.earned ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {reward.description}
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className={
                    reward.earned ? 'text-green-600 border-green-200' : 'text-gray-400 border-gray-200'
                  }>
                    {reward.type}
                  </Badge>
                  {reward.earned ? (
                    <div className="flex gap-2">
                      <span className="text-xs text-green-600">{reward.date}</span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Download
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">Not earned yet</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Shoutouts */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📱 Social Media Shoutouts</h3>
          <div className="space-y-4">
            {socialShoutouts.map((shoutout) => (
              <div key={shoutout.id} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {shoutout.platform}
                  </Badge>
                  <div className="flex gap-4 text-sm text-blue-600">
                    <span>❤️ {shoutout.likes}</span>
                    <span>🔄 {shoutout.shares}</span>
                  </div>
                </div>
                <p className="text-blue-700">{shoutout.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor-backed Perks */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🎁 Sponsor Perks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sponsorPerks.map((perk) => (
              <div 
                key={perk.id} 
                className={`p-4 rounded-lg border ${
                  perk.claimed 
                    ? 'bg-gray-50 border-gray-200' 
                    : 'bg-orange-50 border-orange-200'
                }`}
              >
                <h4 className={`font-semibold mb-2 ${
                  perk.claimed ? 'text-gray-500' : 'text-orange-700'
                }`}>
                  {perk.sponsor}
                </h4>
                <p className={`text-sm mb-2 ${
                  perk.claimed ? 'text-gray-500' : 'text-orange-600'
                }`}>
                  {perk.offer}
                </p>
                <p className={`text-xs mb-3 ${
                  perk.claimed ? 'text-gray-400' : 'text-orange-500'
                }`}>
                  {perk.validity}
                </p>
                <Button 
                  size="sm" 
                  disabled={perk.claimed}
                  className={perk.claimed ? '' : 'bg-orange-600 hover:bg-orange-700'}
                >
                  {perk.claimed ? 'Claimed' : 'Claim Now'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Points Summary */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Total Reward Points</h3>
            <p className="text-4xl font-bold text-red-700 mb-2">1,200</p>
            <p className="text-red-600 mb-4">Keep donating to earn more rewards!</p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="bg-white p-3 rounded border">
                <div className="font-semibold text-red-600">Next Milestone</div>
                <div className="text-gray-600">1,500 points</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-semibold text-red-600">Donations Made</div>
                <div className="text-gray-600">8 times</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsRecognition;
