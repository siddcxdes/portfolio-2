import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import { usePrefersReducedMotion } from '../../hooks';
import { skillsData } from '../../data';

const StyledSkillsSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 0;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 32px;
    color: var(--slate);
    text-align: left;
    letter-spacing: -0.5px;
  }
`;

const StyledSkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const StyledSkillCategory = styled.li`
  flex: 1 1 220px;
  min-width: 180px;
  background: var(--navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 6px;
  padding: 18px 20px;
  box-shadow: none;
  transition: border 0.2s;

  &:hover {
    border-color: var(--green);
  }
`;

const StyledCategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--green);
  margin-bottom: 10px;
  font-family: var(--font-mono);
  letter-spacing: 0.5px;
`;

const StyledSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSkillTag = styled.span`
  background: transparent;
  color: var(--slate);
  border: 1px solid var(--lightest-navy);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 0.95rem;
  font-family: var(--font-mono);
  font-weight: 400;
  transition: border 0.2s;
  cursor: default;

  &:hover {
    border-color: var(--green);
    color: var(--green);
  }
`;

const StyledHighlightSection = styled.div`
  margin-top: 32px;
  padding: 18px 20px;
  background: var(--navy);
  border-radius: 6px;
  border: 1px solid var(--lightest-navy);
  text-align: left;

  h3 {
    color: var(--green);
    font-size: 1.1rem;
    margin-bottom: 8px;
    font-family: var(--font-mono);
    font-weight: 500;
  }

  p {
    color: var(--slate);
    font-size: 1rem;
    margin: 0;
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
    <StyledSkillsSection id="skills" ref={revealTitle}>
      <h2>Skills & Technologies</h2>
      <StyledSkillsList>
        {skillCategories.map((category, i) => (
          <StyledSkillCategory key={i} ref={el => (revealSkills.current[i] = el)}>
            <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
            <StyledSkillsGrid>
              {category.skills.map((skill, j) => (
                <StyledSkillTag key={j}>{skill}</StyledSkillTag>
              ))}
            </StyledSkillsGrid>
          </StyledSkillCategory>
        ))}
      </StyledSkillsList>
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