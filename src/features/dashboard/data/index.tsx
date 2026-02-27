import { HardDriveUpload, UserRound, Users, UsersRound } from 'lucide-react';

import uk from '../../../assets/svgs/liechtenstein-flag-icon.svg';
import ngn from '../../../assets/svgs/spain-country-flag-icon.svg';
import db from '../../../assets/svgs/montenegro-flag-icon.svg';
import cs from '../../../assets/svgs/seychelles-flag-icon.svg';
import us from '../../../assets/svgs/spain-country-flag-icon.svg';

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

export const productivity_data = [
  { month: 'JAN', public: 25, anyoneWithLink: 43, withinOrg: 22 },
  { month: 'FEB', public: 33, anyoneWithLink: 60, withinOrg: 20 },
  { month: 'MAR', public: 32, anyoneWithLink: 46, withinOrg: 26 },
  { month: 'APR', public: 22, anyoneWithLink: 44, withinOrg: 21 },
  { month: 'MAY', public: 42, anyoneWithLink: 69, withinOrg: 26 },
  { month: 'JUN', public: 55, anyoneWithLink: 80, withinOrg: 43 },
  { month: 'JUL', public: 61, anyoneWithLink: 62, withinOrg: 52 },
  { month: 'AUG', public: 33, anyoneWithLink: 47, withinOrg: 20 },
  { month: 'SEP', public: 22, anyoneWithLink: 44, withinOrg: 21 },
  { month: 'OCT', public: 32, anyoneWithLink: 46, withinOrg: 19 },
  { month: 'NOV', public: 28, anyoneWithLink: 65, withinOrg: 40 },
  { month: 'DEC', public: 35, anyoneWithLink: 47, withinOrg: 20 },
];
export const country_data = [
  { country: 'United Kingdom', flagSrc: uk, percentage: 78 },
  { country: 'Spain', flagSrc: ngn, percentage: 61 },
  { country: 'UAE', flagSrc: db, percentage: 45 },
  { country: 'Canada', flagSrc: cs, percentage: 59 },
  { country: 'United States', flagSrc: us, percentage: 78 },
];
