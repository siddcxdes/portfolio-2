import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import { usePrefersReducedMotion } from '../../hooks';
import { skillsData } from '../../data';

const StyledSkillsSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 0;

  h2 {
    font-size: clamp(26px, 5vw, 32px);
    font-weight: 700;
    margin-bottom: 48px;
    color: var(--lightest-slate);
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: var(--green);
      margin: 16px auto 0;
      border-radius: 2px;
    }
  }
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  position: relative;
`;

const StyledSkillCategory = styled.div`
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 30px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--green);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);

    h3 {
      color: var(--green);
    }
  }
`;

const StyledCategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--lightest-slate);
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  transition: var(--transition);
  
  &::before {
    content: '▹';
    color: var(--green);
    margin-right: 8px;
    font-size: 14px;
  }
`;

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledSkillTag = styled.span`
  background: rgba(45, 212, 191, 0.05);
  color: var(--green);
  border: 1px solid rgba(45, 212, 191, 0.2);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  font-weight: 500;
  transition: var(--transition);
  cursor: default;

  &:hover {
    background: rgba(45, 212, 191, 0.15);
    border-color: var(--green);
    transform: translateY(-2px);
  }
`;

const StyledHighlightSection = styled.div`
  margin-top: 48px;
  padding: 30px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(45, 212, 191, 0.1) 100%);
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  text-align: center;
  backdrop-filter: blur(5px);

  h3 {
    color: var(--white);
    font-size: 1.3rem;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    color: var(--light-slate);
    font-size: 1.05rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Skills = () => {
  const revealTitle = useRef(null);
  const revealSkills = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    sr.reveal(revealTitle.current, srConfig());
    revealSkills.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [prefersReducedMotion]);

  const skillCategories = Object.values(skillsData);

  return (
    <StyledSkillsSection id="skills">
      <h2 ref={revealTitle}>Skills & Technologies</h2>
      <StyledSkillsGrid>
        {skillCategories.map((category, i) => (
          <StyledSkillCategory key={i} ref={el => (revealSkills.current[i] = el)}>
            <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
            <StyledTagList>
              {category.skills.map((skill, j) => (
                <StyledSkillTag key={j}>{skill}</StyledSkillTag>
              ))}
            </StyledTagList>
          </StyledSkillCategory>
        ))}
      </StyledSkillsGrid>
      <StyledHighlightSection ref={el => (revealSkills.current[skillCategories.length] = el)}>
        <h3>Specialized in AI/ML Engineering</h3>
        <p>
          Building intelligent systems with LLMs, RAG, computer vision, and ML pipelines.
          Exploring generative AI and multimodal applications.
        </p>
      </StyledHighlightSection>
    </StyledSkillsSection>
  );
};

export default Skills;