import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import { usePrefersReducedMotion } from '../../hooks';
import { skillsData } from '../../data';

const StyledSkillsSection = styled.section`
  max-width: 1000px;

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }
`;

const StyledSkillCategory = styled.div`
  background: var(--light-navy);
  border-radius: 8px;
  padding: 25px;
  border: 1px solid var(--lightest-navy);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    border-color: var(--green);
  }
`;

const StyledCategoryTitle = styled.h3`
  color: var(--green);
  font-size: var(--fz-lg);
  font-weight: 600;
  margin-bottom: 15px;
  font-family: var(--font-mono);
  position: relative;
  padding-left: 20px;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--green);
    font-size: var(--fz-lg);
  }
`;

const StyledSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledSkillTag = styled.span`
  background: var(--navy);
  color: var(--slate);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  font-weight: 500;
  border: 1px solid var(--lightest-navy);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: default;

  &:hover {
    background: var(--green);
    color: var(--navy);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
  }
`;

const StyledHighlightSection = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 30px;
  background: linear-gradient(135deg, var(--navy) 0%, var(--light-navy) 100%);
  border-radius: 12px;
  border: 1px solid var(--green);

  h3 {
    color: var(--green);
    font-size: var(--fz-xl);
    margin-bottom: 20px;
    font-family: var(--font-mono);
  }

  p {
    color: var(--slate);
    font-size: var(--fz-lg);
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
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealSkills.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, [prefersReducedMotion]);

  const skillCategories = Object.values(skillsData);

  return (
    <StyledSkillsSection id="skills" ref={revealTitle}>
      <h2 className="numbered-heading">Skills & Technologies</h2>

      <div className="skills-container">
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
      </div>

      <StyledHighlightSection ref={el => (revealSkills.current[skillCategories.length] = el)}>
        <h3>Specialized in AI/ML Engineering</h3>
        <p>
          Passionate about building intelligent systems with expertise in LLMs, RAG systems, 
          computer vision, and end-to-end machine learning pipelines. Always exploring the 
          latest in generative AI and multimodal applications.
        </p>
      </StyledHighlightSection>
    </StyledSkillsSection>
  );
};

export default Skills;