import React from 'react';

const TableOfContents = () => {
  const sections = [
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'server-rules', title: 'Official Server Rules' },
    { id: 'specific-content', title: 'Specific Content References' },
    { id: 'final-notes', title: 'Final Notes' },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 text-left">
      <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
      <ul className="list-disc pl-5 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-blue-500 hover:underline">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
