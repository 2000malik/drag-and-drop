import { HardDriveUpload, UserRound, Users, UsersRound } from 'lucide-react';

export const cloudSummaryCards = [
  {
    title: 'Users',
    icon: <UserRound size={17} />,
    value: '3,836',
    percentageChange: 15,
    isNegative: true,
  },
  {
    title: 'Groups',
    icon: <UsersRound size={17} />,
    value: '316',
    percentageChange: 23,
    isNegative: false,
  },
  {
    title: 'Uploads',
    icon: <HardDriveUpload size={17} />,
    value: '3,16',
    percentageChange: 23,
    isNegative: false,
  },
  {
    title: 'Department',
    icon: <Users size={17} />,
    value: '3,16',
    percentageChange: 23,
    isNegative: true,
  },
];

export const storage_chart_data = [
  { name: 'Files', value: 20, color: '#9B27AF' },
  { name: 'Folders', value: 15, color: '#F5A623' },
  { name: 'Videos', value: 18, color: '#7CB342' },
  { name: 'Miscellaneous', value: 7, color: '#3F51B5' },
  { name: 'Apps', value: 12, color: '#4FC3F7' },
  { name: 'Audios', value: 8, color: '#EF5350' },
  { name: 'Available Space', value: 20, color: '#E0E0E0' },
];
