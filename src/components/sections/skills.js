import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import { usePrefersReducedMotion } from '../../hooks';
import { skillsData } from '../../data';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
  }
`;

const StyledSkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 140px;
  background: var(--light-navy);
  padding: 15px;
  border-radius: 6px;
  border: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:hover {
    background: var(--lightest-navy);
    transform: translateY(-2px);
  }
`;

const StyledSkillsTitle = styled.h3`
  font-size: var(--fz-xl);
  font-weight: 600;
  color: var(--lightest-slate);
  margin-bottom: 12px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 16px;
    background: var(--green);
    border-radius: 2px;
  }
`;

const StyledSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledSkillItem = styled.li`
  background: var(--light-navy);
  color: var(--slate);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  border: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:hover {
    background: var(--lightest-navy);
    color: var(--lightest-slate);
    transform: translateY(-1px);
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

  const skillCategories = [
    { title: 'Languages', skills: skillsData.languages },
    { title: 'ML/DL', skills: skillsData.ml_dl },
    { title: 'Generative AI', skills: skillsData.generative_ai },
    { title: 'Multimodal AI', skills: skillsData.multimodal_ai },
    { title: 'Data Science', skills: skillsData.data_science },
    { title: 'Libraries & Tools', skills: skillsData.libraries_tools },
  ];

  return (
    <StyledSkillsSection id="skills" ref={revealTitle}>
      <h2 className="numbered-heading">Skills & Technologies</h2>

      <div className="inner">
        {skillCategories.map((category, i) => (
          <StyledSkillsGrid key={i} ref={el => (revealSkills.current[i] = el)}>
            <StyledSkillsTitle>{category.title}</StyledSkillsTitle>
            <StyledSkillsList>
              {category.skills.map((skill, j) => (
                <StyledSkillItem key={j}>{skill}</StyledSkillItem>
              ))}
            </StyledSkillsList>
          </StyledSkillsGrid>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
