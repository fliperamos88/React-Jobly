import { Jobly } from '../../helpers/requestApi';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';
import JobCard from '../Jobs/JobCard';

const UserApplications = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const location = useLocation();
  const [jobList, setJobList] = useState([]);
  const [applicationList, setApplicationList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await Jobly.getOne('users', username);
        setJobList(data.User.job_applications);
      } catch {
        navigate(`/`);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchApplications = async () => {
      const { data } = await Jobly.getAll('applications');
      const appMap = data.Applications.map((value) => {
        return value.username + '-' + value.job_id;
      });
      setApplicationList(appMap);
    };
    fetchApplications();
  }, []);

  const removeHandle = (id) => {
    setJobList((prevState) => prevState.filter((value) => value.id !== id));
  };

  return (
    <div className="background-list-applications">
      <div>
        <h2 className="page-title">Your job applications</h2>
        {jobList.length === 0 && (
          <div className="alert-messages-container">
            You have no applications at the moment
          </div>
        )}
        <div className="applications-list-container">
          {jobList.map((job) => {
            return (
              <JobCard
                job={job}
                key={uuidv4()}
                applicationList={applicationList}
                removeHandle={removeHandle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserApplications;
