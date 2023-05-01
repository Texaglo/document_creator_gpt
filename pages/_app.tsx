import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => {
    if (typeof window !== 'undefined') {
      return import('react-modal');
    }
    return Promise.resolve({});
  },
  { ssr: false }
);
