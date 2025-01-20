import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 320px;
    /* border: 0.5px solid #777;
    border-radius: 4px; */
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
  }
    }
  }
  /* Styles for Tabs */
  .tabs {
    display: flex;
    margin-top: 44px;
    border-bottom: 2px solid var(--gray-1);
  }

  .tab {
    flex: 1;
    text-align: center;
    align-content: center;
    padding: 12px;
    font-size: 16px;
    font-family: 'Poppins Medium';
    cursor: pointer;
    background-color: #fff;
    color: var(--gray-1);
    border-radius: 5px;
    position: relative;
  }

  .active {
    background-color: var(--deep-dark);
    color: var(--gray-1);
    border: 1px solid #fff;
  }

  .noItemsMessage {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.6rem;
    color: #777;
  }
  @media only screen and (max-width: 768px) {
    .tabs {
      margin-top: 20px;
    }
    .tab {
      font-size: 12px; /* Adjusted font size for mobile */
      padding: 10px;
    }
  })
`;

const Projects = () => {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  const [activeTab, setActiveTab] = useState('Websites');

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Websites') {
      setProjectsData(ProjectsInfo.filter((item) => item.category === 'Websites'));
    } else {
      setProjectsData(ProjectsInfo.filter((item) => item.category === tabName));
    }
    setSearchText(''); // Reset search text when changing tabs
  };  

  const noItemsMessage = "No items to display for this category.";

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="projects i have ever done"
          />
          {/* Tabs */}
          <div className="tabs">
            <div
              className={`tab ${activeTab === 'Websites' ? 'active' : ''}`}
              onClick={() => handleTabClick('Websites')}
            >
              Websites
            </div>
            <div
              className={`tab ${activeTab === 'Mini Apps' ? 'active' : ''}`}
              onClick={() => handleTabClick('Mini Apps')}
            >
              Mini Apps
            </div>
            <div
              className={`tab ${activeTab === 'UI Design' ? 'active' : ''}`}
              onClick={() => handleTabClick('UI Design')}
            >
              UI Design
            </div>
            <div
              className={`tab ${activeTab === 'PRD' ? 'active' : ''}`}
              onClick={() => handleTabClick('PRD')}
            >
              PRD
            </div>
          </div>

          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>

          {/* Projects */}
          <div className="projects__allItems">
            {projectsData.length === 0 ? (
              <p className="noItemsMessage">{noItemsMessage}</p>
            ) : (
              projectsData.map((item) => (
                <ProjectItem
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                />
              ))
            )}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
};

export default Projects;