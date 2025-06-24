"use client";

import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Phone, 
  Mail, 
  Calendar,
  TrendingUp,
  DollarSign,
  Target,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Footer from '@/components/Footer';

const CRM = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const leads = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Dubai Tech Solutions",
      email: "ahmed@dubaitech.ae",
      phone: "+971 50 123 4567",
      status: "Hot Lead",
      value: "$25,000",
      source: "LinkedIn",
      lastContact: "2 hours ago"
    },
    {
      id: 2,
      name: "Fatima Hassan",
      company: "Cairo Software Inc",
      email: "fatima@cairosoft.eg",
      phone: "+20 10 987 6543",
      status: "Qualified",
      value: "$15,000",
      source: "Website",
      lastContact: "1 day ago"
    },
    {
      id: 3,
      name: "James Okonkwo",
      company: "Lagos Logistics Ltd",
      email: "james@lagoslogistics.ng",
      phone: "+234 81 234 5678",
      status: "Follow Up",
      value: "$40,000",
      source: "Referral",
      lastContact: "3 days ago"
    }
  ];

  const deals = [
    {
      id: 1,
      company: "Riyadh Banking Solutions",
      value: "$75,000",
      stage: "Negotiation",
      probability: "80%",
      closeDate: "Dec 2024"
    },
    {
      id: 2,
      company: "Nairobi FinTech Hub",
      value: "$30,000",
      stage: "Proposal",
      probability: "60%",
      closeDate: "Jan 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot Lead': return 'bg-red-100 text-red-800';
      case 'Qualified': return 'bg-green-100 text-green-800';
      case 'Follow Up': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">CRM Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage your leads, deals, and customer relationships</p>
            </div>
            <Button className="bg-gradient-uzbek">
              <Plus className="w-4 h-4 mr-2" />
              Add New Lead
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Leads</p>
                    <p className="text-3xl font-bold">127</p>
                    <p className="text-sm text-green-600">+12% this month</p>
                  </div>
                  <Users className="w-8 h-8 text-primary-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Deals</p>
                    <p className="text-3xl font-bold">23</p>
                    <p className="text-sm text-blue-600">+5 this week</p>
                  </div>
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pipeline Value</p>
                    <p className="text-3xl font-bold">$425K</p>
                    <p className="text-sm text-green-600">+8% increase</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Win Rate</p>
                    <p className="text-3xl font-bold">67%</p>
                    <p className="text-sm text-green-600">Above average</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="leads" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="deals">Deals</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Leads Tab */}
            <TabsContent value="leads" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Recent Leads
                    </CardTitle>
                    <div className="flex space-x-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <Input
                          placeholder="Search leads..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-uzbek rounded-full flex items-center justify-center text-white font-semibold">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="font-semibold">{lead.name}</h3>
                            <p className="text-sm text-gray-600">{lead.company}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-500 flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {lead.email}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {lead.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(lead.status)}>
                            {lead.status}
                          </Badge>
                          <div className="text-right">
                            <p className="font-semibold">{lead.value}</p>
                            <p className="text-xs text-gray-500">{lead.lastContact}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Deals Tab */}
            <TabsContent value="deals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Active Deals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deals.map((deal) => (
                      <div key={deal.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{deal.company}</h3>
                          <p className="text-sm text-gray-600">Stage: {deal.stage}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">{deal.value}</p>
                          <p className="text-sm text-gray-600">{deal.probability} • {deal.closeDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2" />
                      Lead Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>LinkedIn</span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Website</span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Referrals</span>
                        <span className="font-semibold">25%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      This Month&apos;s Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>New Leads</span>
                        <span className="font-semibold text-green-600">+15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Deals Closed</span>
                        <span className="font-semibold text-blue-600">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Follow-ups</span>
                        <span className="font-semibold">127</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CRM;
