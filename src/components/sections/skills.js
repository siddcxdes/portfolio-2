import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../config';
import sr from '../../utils/sr';
import { usePrefersReducedMotion } from '../../hooks';
import { skillsData } from '../../data';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    display: flex;
    flex-direction: column;
  }
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSkillCategory = styled.div`
  position: relative;
  background-color: var(--light-navy);
  border-radius: 8px;
  padding: 28px;
  transition: var(--transition);
  border: 1px solid var(--lightest-navy);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
    border-color: var(--green);

    .category-title {
      color: var(--green);
    }

    .category-icon {
      transform: scale(1.1);
      color: var(--green);
    }
  }
`;

const StyledCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledCategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--green-tint) 0%, rgba(139, 92, 246, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  transition: var(--transition);
  border: 1px solid rgba(45, 212, 191, 0.2);

  &::before {
    content: '◆';
    color: var(--green);
    font-size: 18px;
    font-weight: bold;
  }
`;

const StyledCategoryTitle = styled.h3`
  font-size: var(--fz-xl);
  font-weight: 600;
  color: var(--lightest-slate);
  margin: 0;
  transition: var(--transition);
`;

const StyledSkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSkillItem = styled.li`
  position: relative;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--slate);
  transition: var(--transition);

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--green);
    font-size: var(--fz-md);
    line-height: 16px;
  }

  &:hover {
    color: var(--lightest-slate);
    padding-left: 24px;
  }
`;



const Skills = () => {
  const revealContainer = useRef(null);
  const revealSkills = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    sr.reveal(revealContainer.current, srConfig());
    revealSkills.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [prefersReducedMotion]);

  const skillCategories = Object.values(skillsData);

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills & Technologies</h2>

      <div className="inner">
        <StyledSkillsGrid>
          {skillCategories.map((category, i) => (
            <StyledSkillCategory key={i} ref={el => (revealSkills.current[i] = el)}>
              <StyledCategoryHeader>
                <StyledCategoryIcon className="category-icon" />
                <StyledCategoryTitle className="category-title">
                  {category.title}
                </StyledCategoryTitle>
              </StyledCategoryHeader>
              <StyledSkillsList>
                {category.skills.map((skill, j) => (
                  <StyledSkillItem key={j}>{skill}</StyledSkillItem>
                ))}
              </StyledSkillsList>
            </StyledSkillCategory>
          ))}
        </StyledSkillsGrid>

      </div>
    </StyledSkillsSection>
  );
};

export default Skills;