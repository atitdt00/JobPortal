import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const TopJobs = () => {

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }

  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="top-jobs">
          <h3>Top Latest Jobs</h3>
          <div className="job-container">
            {jobs &&
              jobs.map((element) => {
                return (
                  <div className="card" key={element._id}>
                    {element.hiringMultipleCandidates === "Yes" ? (
                      <p className="hiring- Multiple">
                        Hiring Multiple Candidates
                      </p>
                    ) : (
                      <p className="hiring">Hiring</p>
                    )}
                    <p className="title">{element.title}</p>
                    <Link></Link>
                    <p className="company">
                      <span>Company:</span>{element.companyName}
                    </p>
                    <p className="location">
                      <span>Location:</span>{element.location}
                    </p>
                    <p className="salary">
                      <span>Salary:</span> Rs. {element.salary}
                    </p>
                    <p className="posted">
                      <span>Posted On:</span>{" "}
                      {element.jobPostedOn.substring(0, 10)}
                    </p>
                    <div className="btn-wrapper">
                      <Link
                        className="btn"
                        to={`/post/application/${element._id}`}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default TopJobs;