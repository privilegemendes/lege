import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Loading } from "@/components/Loading";

const Resume = () => {
  const router = useRouter();

  useEffect(() => {
		const redirect = setTimeout(() => {
			router.push('https://lege-dev-resume.vercel.app/');
		}, 100);

		return () => {
			clearTimeout(redirect);
		}
  }, [router]);

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (url === "/resume") {
				router.push("/");
			}
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router]);

  return<ArtiryRedirectContainer>
		<Loading/>
    </ArtiryRedirectContainer>
};

export default Resume;


const ArtiryRedirectContainer = styled.div
`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  isolation: isolate;
  background: hsl(210deg, 30%, 8%);
  height: 100vh;
`;
