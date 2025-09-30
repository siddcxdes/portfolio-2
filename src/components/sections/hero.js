import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '../../utils';
import { usePrefersReducedMotion } from '../../hooks';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: clamp(40px, 8vw, 80px); // <-- set a large, responsive size
    font-weight: 700;
    color: var(--lightest-slate);
    font-family: var(--font-sans);
    margin: 0;
    min-height: 3.2rem;
    letter-spacing: -1px;
  }

  .cursor {
    display: inline-block;
    width: 1ch;
    background: none;
    color: var(--green);
    font-weight: 700;
    font-size: inherit; 
    line-height: 1;
    margin-left: 2px;
    animation: ${blink} 1s steps(1) infinite;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const TYPING_SPEED = 80; // ms per character

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const fullName = 'Sidheshwar Sharma.';

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedName(fullName);
      setShowCursor(true);
      return;
    }

    let timeout;
    if (isMounted && typedName.length < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, TYPING_SPEED);
    } else if (typedName.length === fullName.length) {
      setShowCursor(true);
    }
    return () => clearTimeout(timeout);
  }, [isMounted, typedName, prefersReducedMotion, fullName]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>Hi, my name is</h1>;
  const two = (
    <h2>
      {typedName}
      <span className="cursor">{showCursor ? '|' : ''}</span>
    </h2>
  );
  const three = <h3 className="big-heading">I build intelligent AI systems.</h3>;
  const four = (
    <>
      <p>
        I'm an AI/ML Engineer specializing in Large Language Models, RAG, multimodal AI, and Data Science. 
        Currently, I'm focused on building intelligent systems that solve real-world problems as a freelancer.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="mailto:sidheshwarsharma77@gmail.com"
      target="_blank"
      rel="noreferrer">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;