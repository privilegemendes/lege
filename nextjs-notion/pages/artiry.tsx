import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Artiry = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://artiry.com');
  }, []);

  return <div>You are being redirected...</div>;
};

export default Artiry;
