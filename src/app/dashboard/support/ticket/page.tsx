"use client";

import { useState } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { TableDateSvg } from "@/components/icons/TableDateSvg";
import { TableFilter2Svg } from "@/components/icons/TableFilter2Svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/avatar";
import { SmileyIconSvg } from "@/components/icons/SmileyIconSvg";
import { AttachIconSvg } from "@/components/icons/AttachIconSvg";
import { SendIconSvg } from "@/components/icons/SendIconSvg";

interface User {
  id: string;
  name: string;
  type: 'Consumer' | 'Business' | 'Rider' | 'Ambassador';
  avatar?: string;
}

interface Ticket {
  id: string;
  user: User;
  subject: string;
  message: string;
  status: 'New' | 'Resolved';
  createdAt: string;
  ticketNumber: string;
}

const mockTickets: Ticket[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Justice Adam',
      type: 'Consumer',
      avatar: '/images/avatars/justice.jpg'
    },
    subject: 'Wallet Issue',
    message: 'Requesting for withdrawal from my wallet and its...',
    status: 'New',
    createdAt: '2024-02-20T15:30:00Z',
    ticketNumber: '234789453411008764'
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Yakoyo',
      type: 'Business',
      avatar: '/images/avatars/yakoyo.jpg'
    },
    subject: 'Payment Issue',
    message: 'Requesting for withdrawal from my wallet and its...',
    status: 'New',
    createdAt: '2024-02-20T15:30:00Z',
    ticketNumber: '234789453411008764'
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Elon Musk',
      type: 'Rider',
      avatar: '/images/avatars/elon.jpg'
    },
    subject: 'Wallet Issue',
    message: 'Requesting for withdrawal from my wallet and its...',
    status: 'New',
    createdAt: '2024-02-20T15:30:00Z',
    ticketNumber: '234789453411008764'
  },
  {
    id: '4',
    user: {
      id: '4',
      name: 'Kemikal',
      type: 'Ambassador',
      avatar: '/images/avatars/kemikal.jpg'
    },
    subject: 'Wallet Issue',
    message: 'Requesting for withdrawal from my wallet and its...',
    status: 'New',
    createdAt: '2024-02-20T15:30:00Z',
    ticketNumber: '234789453411008764'
  }
];

interface Message {
    id: string;
    ticketId: string;
    content: string;
    sender: 'user' | 'admin';
    timestamp: string;
    attachments?: {
      type: 'image' | 'file';
      url: string;
    }[];
  }
  
  const mockMessages: Message[] = [
    {
      id: '1',
      ticketId: '1',
      content: 'Hello, Good Day sir, are you free to initiate?',
      sender: 'admin',
      timestamp: '2024-02-20T09:41:00Z'
    },
    {
      id: '2',
      ticketId: '1',
      content: "Alright, let's proceed",
      sender: 'user',
      timestamp: '2024-02-20T09:42:00Z'
    },
    {
      id: '3',
      ticketId: '1',
      content: 'Hope the refund has gone through',
      sender: 'user',
      timestamp: '2024-02-20T09:43:00Z'
    }
  ];

export default function TicketPage() {
  const [activeTab, setActiveTab] = useState<'New' | 'Resolved' | 'All'>('New');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [message, setMessage] = useState('');

  return (
    <div className="h-full bg-[#F5F5F5]">
      {/* Header Card */}
      <div className="bg-white rounded-[5px] border-b border-[#F0F1F3] w-full mb-6">
        <div className="w-full px-4 md:px-[22px] py-[16.5px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
            {/* Tabs - Left aligned */}
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('New')}
                className={`py-2 relative whitespace-nowrap ${
                  activeTab === 'New'
                    ? 'text-black font-bold after:content-[""] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:mx-auto after:w-full after:h-[2px] after:bg-black'
                    : 'text-[#858D9D]'
                }`}
              >
                New Tickets
              </button>
              <button
                onClick={() => setActiveTab('Resolved')}
                className={`py-2 relative whitespace-nowrap ${
                  activeTab === 'Resolved'
                    ? 'text-black font-bold after:content-[""] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:mx-auto after:w-full after:h-[2px] after:bg-black'
                    : 'text-[#858D9D]'
                }`}
              >
                Resolved Tickets
              </button>
              <button
                onClick={() => setActiveTab('All')}
                className={`py-2 relative whitespace-nowrap ${
                  activeTab === 'All'
                    ? 'text-black font-bold after:content-[""] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:mx-auto after:w-full after:h-[2px] after:bg-black'
                    : 'text-[#858D9D]'
                }`}
              >
                All Tickets
              </button>
            </div>

            {/* Search and Filters - Right aligned */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <div className="relative flex-1 md:flex-none">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-[300px] pl-10 pr-4 py-2 rounded-[4px] border border-[#E6E6E6] bg-[#FAFAFA] placeholder:text-[#858D9D]"
                />
                <TableSearchSvg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#858D9D]" />
              </div>
              <div className="flex gap-4">
                <button className="flex-1 md:flex-none px-6 py-2 rounded-[7.348px] border border-[#E0E2E7] bg-white flex items-center justify-center gap-2">
                  <TableDateSvg />
                  <span className="text-[#858D9D]">Date</span>
                </button>
                <button className="flex-1 md:flex-none px-6 py-2 rounded-[7.348px] border border-[#E0E2E7] bg-white flex items-center justify-center gap-2">
                  <TableFilter2Svg />
                  <span className="text-[#858D9D]">Tags</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-120px)] px-6">
        {/* Ticket List */}
        <div className="w-full max-w-[450px] space-y-3">
          {mockTickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`h-[140px] bg-white cursor-pointer
                ${selectedTicket?.id === ticket.id 
                  ? 'border-[0.86px] border-[#F45309] bg-[#FFF5F5]' 
                  : 'border border-transparent'
                }
                rounded-[8.627px] shadow-[0px_1.725px_3.451px_0px_rgba(0,0,0,0.05)]
                hover:border-[#F45309] hover:bg-[#FFF5F5]
                transition-colors duration-200
              `}
              onClick={() => setSelectedTicket(ticket)}
            >
              <div className="h-full p-[14.666px_10.352px] flex flex-col gap-[8.627px]">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-black focus:ring-black"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <Avatar className="w-10 h-10 rounded-[5px]">
                    <AvatarImage src={ticket.user.avatar} />
                    <AvatarFallback>{ticket.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[15px] font-medium text-black">
                          {ticket.user.name}
                        </span>
                        <span className="text-[13px] text-[#858D9D]">
                          {ticket.user.type}
                        </span>
                      </div>
                      <span className="text-[13px] text-[#858D9D] whitespace-nowrap">
                        7h
                      </span>
                    </div>
                    <p className="text-[15px] text-black mt-2 font-medium line-clamp-2">
                      {ticket.message}
                    </p>
                    <p className="text-[13px] text-[#858D9D] mt-1">
                      Ticket No: {ticket.ticketNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 ml-6">
          {selectedTicket ? (
            <div className="h-full flex flex-col bg-white rounded-[10px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-[#F0F1F3]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedTicket.user.avatar} />
                      <AvatarFallback>{selectedTicket.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-[15px] font-medium">{selectedTicket.user.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] text-[#858D9D]">{selectedTicket.user.type}</span>
                        <span className="text-[13px] text-[#858D9D]">
                          Ticket No: {selectedTicket.ticketNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] font-medium">05-20-2024</p>
                    <p className="text-[13px] text-[#858D9D]">3:31 am</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="text-center">
                  <span className="bg-[#F5F5F5] text-[13px] text-[#858D9D] px-3 py-1 rounded-full">Today</span>
                </div>
                {mockMessages
                  .filter(msg => msg.ticketId === selectedTicket.id)
                  .map(message => (
                    <div key={message.id} className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${
                        message.sender === 'admin' 
                          ? 'bg-black text-white rounded-[10px] rounded-br-none' 
                          : 'bg-[#F5F5F5] rounded-[10px] rounded-bl-none'
                        } p-3 max-w-[70%]`}
                      >
                        <p>{message.content}</p>
                        {message.attachments && (
                          <div className="mt-2 grid grid-cols-2 gap-2">
                            {message.attachments.map((attachment, index) => (
                              <img 
                                key={index}
                                src={attachment.url}
                                alt=""
                                className="rounded-[5px] w-full h-[100px] object-cover"
                              />
                            ))}
                          </div>
                        )}
                        <span className="text-[11px] text-[#858D9D] mt-1 block">09:41</span>
                      </div>
                    </div>
                  ))}
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t border-[#F0F1F3]">
                <div className="flex items-center gap-2 px-4 py-2 border border-[#E0E2E7] rounded-[10px]">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-50 rounded-full">
                      <AttachIconSvg />
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-full">
                      <SmileyIconSvg />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="We requested a withdrawal for you?"
                    className="flex-1 outline-none text-[15px]"
                  />
                  <button className="bg-black text-white p-2 rounded-full">
                    <SendIconSvg />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-[#858D9D]">
              Select a ticket to view the conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}