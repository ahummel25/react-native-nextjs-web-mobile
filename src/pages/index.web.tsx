// @generated: @expo/next-adapter@2.1.41
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = (): null => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;

    if (pathname == '/') {
      router.push('/login');
    }
  }, [router]);

  return null;
};

export default Index;
