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
    margin: 0 0 20px 4px;
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
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 800;
    color: var(--white);
    font-family: var(--font-sans);
    margin: 0;
    line-height: 1.1;
    letter-spacing: -2px;
  }

  .cursor {
    display: inline-block;
    width: 6px;
    height: 1em;
    background: var(--green);
    margin-left: 8px;
    animation: ${blink} 1s step-end infinite;
  }

  h3 {
    margin-top: 5px;
    font-size: clamp(30px, 6vw, 60px);
    font-weight: 800;
    background: linear-gradient(to right, var(--slate) 0%, var(--light-slate) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    letter-spacing: -1px;
  }

  p {
    margin: 30px 0 0;
    max-width: 560px;
    font-size: var(--fz-lg);
    line-height: 1.6;
    color: var(--slate);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    font-size: var(--fz-md);
    padding: 18px 28px;
    background: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    border-radius: 4px;
    transition: var(--transition);
    
    &:hover {
      background: rgba(45, 212, 191, 0.1);
      box-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
      transform: translateY(-3px);
    }
  }
`;

const TYPING_SPEED = 80;

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
      setShowCursor(true); // Keep cursor blinking after typing
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
      <span className="cursor" />
    </h2>
  );
  const three = <h3 className="big-heading">I build intelligent AI systems.</h3>;
  const four = (
    <>
      <p>
        I'm an AI/ML Engineer specializing in Large Language Models, RAG, multimodal AI, and Data Science.
        Focused on building scalable, intelligent systems that solve real-world problems.
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