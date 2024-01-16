import React, { useState } from 'react';
import './project.scss';
import ScrollCard from './scroll-banner/scroll-card/scroll-card';

import ScrollBanner from './scroll-banner/scroll-banner';

const response = await fetch('https://api.github.com/users/wsucklal/repos');
const json = await response.json()

const Project = () => {

  let projList = []
  //const [projList, setProjList ] = useState()
  // const [startProjlist, setStartProjlist ] = useState([])


  const [displayResult, setDisplayResult] = useState([])
  const [searchWord, setWord ] = useState("")
  const [type, setType] =  useState("all")

  json.forEach((p)=>{
    projList.push({name:p.name,url:p.svn_url,language:p.language, createdAt: p.created_at})
  })
  // const setStartProjlist = ()=>{
  //   let t = []
  //   projList.forEach((p)=>{
  //     t.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
  //   })
  //   return t 
  // }

//  useEffect(()=>{
//   setDisplayResult(setStartProjlist())
//   },);



  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indexes of the items to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = displayResult.slice(startIndex, endIndex);

    const totalPages = Math.ceil(displayResult.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

  const clearResult = (event) => {
    setWord('');
    setCurrentPage(1)
    document.getElementById("mySearch").value = ''
  };

  function filter(event, searchValue , keySearch) {
    let test2
    let array = projList
    let displayArray = []
    setWord(event.target.value);

    event ? searchValue = event.target.value : searchValue = searchWord
    keySearch = [type]
    type === 'all' ? keySearch = ['language', 'createdAt', 'name'] : keySearch = [type]

    // console.log(event.target.value)
    // console.log(1,keySearch,searchValue)
    // console.log(2,type,searchWord)

    //console.log("yes", keySearch)
    if(event !== null){
      if(event.target.value !== ''){
        test2 =  array.filter(item => {
          // Check each property of the object
          for (const key in item) {

            if (keySearch.includes(key)) {
              // Perform a case-insensitive search
              const propertyValue = String(item[key]).toLowerCase();
              const searchLower = searchValue.toLowerCase();
              if (propertyValue.includes(searchLower)) {
                return true;
              }
            }
          }
          // If none of the properties contain the search value, return false
          return false;
        });
        
        test2.forEach((p)=>{
            displayArray.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
        })
      }
      if(event.target.value === ''){
        setCurrentPage(1)
      }
    }

    setDisplayResult(displayArray)
  }
  
  function filterByDropdown(event, searchValue , keySearch) {
    setType(event.target.value);
    let test2
    let array = projList
    let displayArray = []

    event ? keySearch = event.target.value : keySearch = type
    searchValue = searchWord
    event.target.value === 'all' ? keySearch = ['language', 'createdAt', 'name'] : keySearch = [event.target.value]
    //console.log("yes", keySearch)
    // console.log(event.target.value)
    // console.log(1,keySearch,searchValue)
    // console.log(2,type,searchWord)

    if(event !== null){
      if(searchWord !== ''){
        test2 =  array.filter(item => {
          // Check each property of the object
          for (const key in item) {
            // If the property contains the search value, return true
            if (keySearch.includes(key)) {
              // Perform a case-insensitive search
              const propertyValue = String(item[key]).toLowerCase();
              const searchLower = searchValue.toLowerCase();
              if (propertyValue.includes(searchLower)) {
                return true;
              }
            }
          }
          // If none of the properties contain the search value, return false
          return false;
        });
        
        test2.forEach((p)=>{
            displayArray.push(<ScrollCard name={p.name} createdAt={p.createdAt} language = {p.language} url={p.url}></ScrollCard>)
        })
      }
    }

    setDisplayResult(displayArray)
  }


  return(
  <div id="Project" className="Project" data-testid="Project">
    <section className ="section fadeIn">
    <div className='project-panel'>
      <div className="project-header project-panel-ctnt">
        <div className="project-header-content">
          Projects
        </div>
      </div>
      <div className='project-panel-ctnt project-display-info'>
            These are a few of my projects that I've done over the years. They range from personal projects to projects I've done in school, covering a variety of coding languages. They all link to my github if you want to take a look at how I coded them.
        </div>
      <div className='project-panel-ctnt'>
        <div className='project-display-tech'>
        <div className='project-panel-ctnt project-scroll-banner'>
              <div div className='project-scroll-banner-ctnt'>
                {<ScrollBanner projects={projList}/>}
              </div>
        </div> 
          <div className='project-searchbar'>
            <input className="search-input" id="mySearch"type='search' placeholder='Search...' onChange={filter}/>
            <select className="dropdown" value={type} onChange={filterByDropdown}>
              <option value="all">Filter By</option>
              <option value="language">Language</option>
              <option value="createdAt">Created At</option>
              <option value="name">Name</option>
            </select>
          </div>
          {/* { (searchWord === '' && displayResult.length !== 0)&& 
            <div className="displayResults">
            {displayResult}{console.log(displayResult.length)}
            </div>
          } */}
          { (searchWord !== '' && displayResult.length !== 0)&& 
            <div className="displayResults">
            {currentItems}
            </div>
          }
          { (displayResult.length >= itemsPerPage)&& 
            <div className="resultsBar">
              <button onClick={clearResult} href=""className='clearResult'>Clear Results</button>
              <div className="pagination">
                  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <img alt="" className="imgLeft" src="/assets/images/dropdown.png"></img>                  
                  </button>
                <span> {currentPage}-{totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= displayResult.length}>
                <img alt="" className="imgRight" src="/assets/images/dropdown.png"></img>                  
                </button>
              </div>
            </div>
          }
          {searchWord !== '' && displayResult.length === 0 && 
            <div className="noresults">Sorry, No search results found! </div>
          }
          <div>         
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
);
}
Project.propTypes = {};

Project.defaultProps = {};

export default Project;
