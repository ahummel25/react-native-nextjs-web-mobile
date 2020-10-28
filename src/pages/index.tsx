// @generated: @expo/next-adapter@2.1.41
import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const Index: FC<Record<string, unknown>> = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;

    if (pathname == '/') {
      router.push('/login');
    }
  });
  return <></>;
};

export default Index;
