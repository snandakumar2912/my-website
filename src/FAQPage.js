import React from 'react';

function FAQPage() {
  const faqs = [
    {
      question: 'What is this platform about?',
      answer: 'This platform allows users to store and share agricultural data collected from IoT sensors securely.',
    },
    {
      question: 'How can I view the data?',
      answer: 'You can view data by navigating to the Data Viewer page from the menu.',
    },
    {
      question: 'Who can use this platform?',
      answer: 'This platform is intended for researchers and farmers interested in analyzing agricultural data.',
    },
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;