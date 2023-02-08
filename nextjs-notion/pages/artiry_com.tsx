import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Artiry_com = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://artiry.com').then(r => console.log(r));
  }, [router]);

  return <div>You are being redirected...</div>;
};

export default Artiry_com;
