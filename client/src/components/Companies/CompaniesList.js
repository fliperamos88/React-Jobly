import { useState, useEffect, useContext } from 'react';
import { Jobly } from '../../helpers/requestApi';
import CompanyCard from './CompanyCard';
import { v4 as uuidv4 } from 'uuid';
import FilterForm from '../Forms/FilterForm';
import axios from 'axios';
import {
  FilterContext,
  FilterHandlerContext,
} from '../../helpers/filterProvider';

const CompaniesList = () => {
  const [compList, setCompList] = useState([]);
  const filter = useContext(FilterContext);
  const setFilter = useContext(FilterHandlerContext);

  const searchHandler = async (term) => {
    const { data } = await Jobly.getAll('companies', term);
    setFilter(true);
    setCompList(data.Companies);
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      if (!filter) {
        const { data } = await Jobly.getAll('companies');
        setCompList(data.Companies);
      }
    };
    fetchCompanies();
  }, [filter]);

  return (
    <>
      <div className="background-list-companies">
        <h2 className="page-title">List of Companies</h2>
        <div className="search-form-container">
          <div>
            <FilterForm
              searchHandler={searchHandler}
              placeholder="Filter by company name"
            />
          </div>
          <div className="filter-results-container">
            <span style={{ marginRight: '8px' }}>
              {' '}
              N. of results: {compList.length}
            </span>
            {filter && (
              <button className="btn btn-dark" onClick={() => setFilter(false)}>
                Remover filter
              </button>
            )}
          </div>
        </div>
        <div class="company-list-container">
          {compList.map((company) => (
            <CompanyCard company={company} key={uuidv4()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CompaniesList;
