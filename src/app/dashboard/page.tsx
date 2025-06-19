"use client";

import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/ui/animated-counter';

const Dashboard = () => {
  const recentActivity = [
    {
      id: 1,
      action: "New lead from Dubai Tech Solutions",
      time: "2 minutes ago",
      type: "lead"
    },
    {
      id: 2,
      action: "Deal closed with Cairo Software Inc",
      time: "1 hour ago",
      type: "deal"
    },
    {
      id: 3,
      action: "Demo scheduled with Lagos Logistics",
      time: "3 hours ago",
      type: "demo"
    },
    {
      id: 4,
      action: "New vendor onboarded: UzbekSoft",
      time: "5 hours ago",
      type: "vendor"
    }
  ];

  const topPerformers = [
    { name: "Sarah Ahmed", deals: 12, revenue: "$145K" },
    { name: "Michael Johnson", deals: 9, revenue: "$98K" },
    { name: "Fatima Al-Zahra", deals: 8, revenue: "$87K" }
  ];

  const regionalStats = [
    { region: "UAE", leads: 45, deals: 12, value: "$180K" },
    { region: "Saudi Arabia", leads: 38, deals: 8, value: "$120K" },
    { region: "Egypt", leads: 32, deals: 6, value: "$85K" },
    { region: "Nigeria", leads: 28, deals: 5, value: "$75K" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
          </div>

          {/* Key Metrics */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold">
                      $<AnimatedCounter end={425} />K
                    </p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      +12.5% from last month
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Leads</p>
                    <p className="text-3xl font-bold">
                      <AnimatedCounter end={127} />
                    </p>
                    <div className="flex items-center text-blue-600 text-sm mt-1">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      +8 new this week
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                    <p className="text-3xl font-bold">
                      <AnimatedCounter end={67} />%
                    </p>
                    <div className="flex items-center text-green-600 text-sm mt-1">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      +3.2% improvement
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Global Reach</p>
                    <p className="text-3xl font-bold">
                      <AnimatedCounter end={8} />
                    </p>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Globe className="w-4 h-4 mr-1" />
                      MEA Countries
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'lead' ? 'bg-blue-500' :
                        activity.type === 'deal' ? 'bg-green-500' :
                        activity.type === 'demo' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-uzbek rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {performer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{performer.name}</p>
                          <p className="text-xs text-gray-500">{performer.deals} deals</p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">{performer.revenue}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regional Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Regional Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {regionalStats.map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{stat.region}</h3>
                      <Badge variant="outline">{stat.deals} deals</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Leads: {stat.leads}</span>
                        <span className="font-medium">{stat.value}</span>
                      </div>
                      <Progress value={(stat.deals / 15) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6" />
                  <span>Add Lead</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>View Reports</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <MessageSquare className="w-6 h-6" />
                  <span>Contact Support</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Eye className="w-6 h-6" />
                  <span>Marketplace</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
