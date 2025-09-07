import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export const FAQ = () => {
  // Question "04" ouverte par défaut
  const [openItem, setOpenItem] = useState('04');

  const faqItems = [
    {
      id: '01',
      number: '01',
      question: 'How do I create an account on the job board?',
      answer:
        'To create an account, navigate to the sign-up page, fill in your details including name, email, and password, then verify your email address through the confirmation link sent to your inbox.',
    },
    {
      id: '02',
      number: '02',
      question: 'How do I apply for a job through the platform?',
      answer:
        "Browse available positions, click on a job listing that interests you, review the details, and click the 'Apply Now' button. Follow the prompts to submit your resume and any required information.",
    },
    {
      id: '03',
      number: '03',
      question: 'How can I track the status of my job applications?',
      answer:
        "Log into your account, navigate to the 'My Applications' section in your dashboard where you can see all your submitted applications and their current status.",
    },
    {
      id: '04',
      number: '04',
      question: 'How do I search for jobs effectively?',
      answer:
        'Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.',
    },
    {
      id: '05',
      number: '05',
      question:
        'Is there a cost to use the job board, and what features are free?',
      answer:
        'Basic job searching and application features are free for all users. Premium features like profile highlighting, early access to new listings, and advanced analytics require a subscription.',
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Séparer les items en deux colonnes indépendantes
  const col1 = faqItems.filter((_, i) => i % 2 === 0);
  const col2 = faqItems.filter((_, i) => i % 2 !== 0);

  return (
    <div className="max-w-5xl mx-auto mt-[90px] mb-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center arsenal-sc-regular">
        Frequently asked Questions
      </h1>

      {/* Deux colonnes indépendantes */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Colonne 1 */}
        <div className="flex-1 space-y-4">
          {col1.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl transition-all shadow-sm border  hover:shadow-[0_8px_20px_rgba(0,50,150,0.2)] transition duration-300 hover:border-2 border-white hover:bg-[rgba(0,50,150,0.2)] ${
                openItem === item.id
                  ? 'shadow-[0_8px_20px_rgba(0,50,150,0.2)] border-2 border-wwhite bg-[rgba(0,50,150,0.2)]'
                  : 'bg-white border-gray-100'
              }`}
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      openItem === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <span className="font-medium text-sm">{item.number}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {item.question}
                  </h3>
                </div>
                <button
                  className={`${
                    openItem === item.id ? 'text-blue-500' : 'text-blue-400'
                  }`}
                >
                  {openItem === item.id ? <X size={18} /> : <Plus size={18} />}
                </button>
              </div>
              {openItem === item.id && (
                <div className="px-6 pb-6 pt-0 ml-14">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Colonne 2 */}
        <div className="flex-1 space-y-4">
          {col2.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl transition-all shadow-sm border  hover:shadow-[0_8px_20px_rgba(0,50,150,0.2)] transition duration-300 hover:border-2 border-white hover:bg-[rgba(0,50,150,0.2)] ${
                openItem === item.id
                  ? 'shadow-[0_8px_20px_rgba(0,50,150,0.2)] border-2 border-white bg-[rgba(0,50,150,0.2)]'
                  : 'bg-white border-gray-100'
              }`}
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      openItem === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <span className="font-medium text-sm">{item.number}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {item.question}
                  </h3>
                </div>
                <button
                  className={`${
                    openItem === item.id ? 'text-blue-500' : 'text-blue-400'
                  }`}
                >
                  {openItem === item.id ? <X size={18} /> : <Plus size={18} />}
                </button>
              </div>
              {openItem === item.id && (
                <div className="px-6 pb-6 pt-0 ml-14">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
