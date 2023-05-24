import { useState } from "react";
import axios from "axios";
import "./Project.css";

export const Project = ({ project }) => {
  const [submission, setSubmission] = useState("");

  const handleInput = (e) => {
    setSubmission(e.target.value);
  };

  const onSubmit = (e) => {
    axios
      .post("https://django-hackathon-owluminati.onrender.com/", {
        link: submission
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      {project.headings.map((heading) => {
        return (
          <div className="heading-container">
            {!heading.isLink && <div className="heading">{heading.name}</div>}
            {heading.isLink && (
              <a className="heading" href={heading.link} target="_blank">
                {heading.name}
              </a>
            )}

            <div className="description">{heading.description}</div>
          </div>
        );
      })}
      <div className="input-container">
        <div className="heading"> Project Submission </div>
        <input
          type="text"
          className="input"
          value={submission}
          onChange={handleInput}
        />

        <button className="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
