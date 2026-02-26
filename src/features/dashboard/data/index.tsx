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
