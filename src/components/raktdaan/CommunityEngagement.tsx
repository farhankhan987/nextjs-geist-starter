"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CommunityEngagement = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Blood Donation Drive - Delhi University",
      date: "2024-01-25",
      time: "10:00 AM - 4:00 PM",
      location: "DU North Campus",
      participants: 45,
      target: 100,
      type: "Drive"
    },
    {
      id: 2,
      title: "Awareness Workshop - Corporate Offices",
      date: "2024-01-28",
      time: "2:00 PM - 5:00 PM",
      location: "Cyber City, Gurgaon",
      participants: 23,
      target: 50,
      type: "Workshop"
    },
    {
      id: 3,
      title: "Youth Volunteer Training",
      date: "2024-02-02",
      time: "9:00 AM - 1:00 PM",
      location: "Red Cross Society",
      participants: 12,
      target: 30,
      type: "Training"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Priya Singh", donations: 12, points: 1800, badge: "🥇" },
    { rank: 2, name: "Vikram Kumar", donations: 10, points: 1500, badge: "🥈" },
    { rank: 3, name: "Meera Joshi", donations: 8, points: 1200, badge: "🥉" },
    { rank: 4, name: "Rahul Sharma", donations: 7, points: 1050, badge: "" },
    { rank: 5, name: "Anita Gupta", donations: 6, points: 900, badge: "" }
  ];

  const challenges = [
    {
      id: 1,
      title: "January Challenge",
      description: "Donate blood twice this month",
      progress: 50,
      reward: "500 bonus points",
      deadline: "2024-01-31",
      active: true
    },
    {
      id: 2,
      title: "Referral Champion",
      description: "Refer 5 new donors to the platform",
      progress: 60,
      reward: "Digital certificate + 750 points",
      deadline: "2024-02-15",
      active: true
    },
    {
      id: 3,
      title: "Emergency Hero",
      description: "Respond to 3 emergency calls",
      progress: 33,
      reward: "Special recognition badge",
      deadline: "2024-02-28",
      active: true
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Drive': return 'bg-red-100 text-red-800';
      case 'Workshop': return 'bg-blue-100 text-blue-800';
      case 'Training': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-600">Community Engagement</CardTitle>
        <CardDescription>
          Join our youth-driven community through events, challenges, and gamified experiences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Upcoming Community Events */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                    </div>
                  </div>
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Participants:</span>
                    <div className="flex items-center gap-1">
                      <Progress value={(event.participants / event.target) * 100} className="w-20" />
                      <span className="text-sm font-medium text-green-600">
                        {event.participants}/{event.target}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Join Event
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Leaderboard */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🏆 Community Leaderboard</h3>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.rank} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{user.badge || `#${user.rank}`}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.donations} donations</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">{user.points}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gamification Challenges */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🎮 Active Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-700 mb-2">{challenge.title}</h4>
                <p className="text-sm text-purple-600 mb-3">{challenge.description}</p>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-600">Progress</span>
                    <span className="text-purple-700 font-medium">{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-purple-600">Reward:</span>
                    <span className="text-purple-700 font-medium">{challenge.reward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-600">Deadline:</span>
                    <span className="text-purple-700">{challenge.deadline}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-3 bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">🌟 Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-green-600">2,847</p>
              <p className="text-sm text-gray-600">Active Donors</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-blue-600">15,632</p>
              <p className="text-sm text-gray-600">Lives Saved</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-purple-600">89</p>
              <p className="text-sm text-gray-600">Events Organized</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-orange-600">156</p>
              <p className="text-sm text-gray-600">Youth Volunteers</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityEngagement;
