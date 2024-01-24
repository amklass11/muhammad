// App.js

import React, { useState, useEffect } from "react";
import jsonData from "./data.json";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("");
  const allCategories = Array.from(
    new Set(jsonData.map((item) => item.category))
  );


  const resultsPerPage = 10;
  useEffect(() => {
    const filtered = jsonData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterOption === "" || item.keywords.includes(filterOption))
    );
    setFilteredResults(filtered);
  }, [searchTerm, filterOption]);

  const handleSearch = () => {
  
  };


  const renderResults = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    return filteredResults.slice(startIndex, endIndex).map((result) => (
      <div key={result.id} className="result-item">
        <a href={result.link} className="result-title">
          {result.title}
        </a>
        <p className="result-summary">{result.summary}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="header">
        <img
          src="https://www.ncbi.nlm.nih.gov/coreutils/nwds/img/logos/AgencyLogo.svg"
          alt="Logo"
          className="logo"
        />

        <button className="login-button">Login</button>
      </div>
      <div className="Logo-search-area">
        <div className="company-logo">
          <img
            src="https://cdn.ncbi.nlm.nih.gov/pubmed/3e4cfc65-2ab1-4120-b309-62dc21bfd9c1/core/images/pubmed-logo-blue.svg"
            alt="Company Logo"
            className="company-logo-image"
          />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      <div className="search-results">
      

        <div className="main-container">
          <div className="filter-options">
            <p className="result-count">{filteredResults.length} Results</p>
            <p className="page-number">Page {currentPage}</p>
          </div>

          <div className="results">{renderResults()}</div>

          <div className="border">
            <p className="result-count">{filteredResults.length} Results</p>
            <button onClick={handleSearch} className="search-button">
              Show more Results
            </button>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="resource">
          <div>
            NCBI Literature Resources
          </div>
          <div>
          
            <ul>
              <a>
                <li>MeSH</li>
              </a>
              <a>
                <li>Bookshelf</li>
              </a>
              <a>
                <li>PMC</li>
              </a>
              <a>
                <li>Disclaimer</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-section">
        <strong>FOLLOW NCBI</strong>

      </div>

      <div className="contact">
      <img
          src="./assets/twitter.png"
          alt="Twitter Logo"
          className="logo"
        />
        <img
          src="./assets/github.png"
          alt="GitHub Logo"
          className="logo"
        />
        <img
          src="./facebook.png"
          alt="Facebook Logo"
          className="logo"
        />
        <img
          src="./assets/linkedin.png"
          alt="LinkedIn Logo"
          className="logo"
        />
        <img
          src="./assets/wifi.png"
          alt="WiFi Logo"
          className="logo"
        />

      </div>
      <div className="footer">
        <span>Connect with NLM</span>
        <div></div>
        <ul className="footer-list">
          <a><li className="white">National Library of Medicine</li></a>
          <a><li className="white">8600 Rockville Pike</li></a>
          <a><li className="white">Bethesda, MD 20894</li></a>
          <a><li className="white">Web Policies</li></a>
          <a><li className="white">FOIA</li></a>
          <a><li className="white">FOIA</li></a>
          <a><li className="white">HHS Vulnerability Disclosure</li></a>
          <a><li className="white">Help</li></a>
          <a><li className="white">Accessibility</li></a>
          <a><li className="white">Careers</li></a>
        </ul>
        

      </div>
      
    </>
  );
};

export default App;
