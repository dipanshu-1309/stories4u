import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Index;
