import React, { useState } from 'react';

type TabOption = 'all' | 'todo' | 'inProgress' | 'completed';

const Tabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>('all');

  const getTabClasses = (tab: TabOption) =>
    `flex items-center gap-1 px-4 py-2 cursor-pointer ${
      selectedTab === tab
        ? 'border-b-2 border-primaryColor rounded-t-lg text-primaryColor'
        : 'text-gray-500 dark:text-gray-200'
    }`;

  return (
    <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
      <div
        className={getTabClasses('all')}
        onClick={() => setSelectedTab('all')}
      >
        <span>All Tasks</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-gray-600">23</div>
      </div>
      <div
        className={getTabClasses('todo')}
        onClick={() => setSelectedTab('todo')}
      >
        <span>To do</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-darkComponentAccent dark:text-gray-300">
          3
        </div>
      </div>
      <div
        className={getTabClasses('inProgress')}
        onClick={() => setSelectedTab('inProgress')}
      >
        <span>In Progress</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-darkComponentAccent dark:text-gray-300">
          6
        </div>
      </div>
      <div
        className={getTabClasses('completed')}
        onClick={() => setSelectedTab('completed')}
      >
        <span>Completed</span>
        <div className="px-2 rounded-md bg-gray-100 dark:bg-darkComponentAccent dark:text-gray-300">
          14
        </div>
      </div>
    </div>
  );
};

export default Tabs;
