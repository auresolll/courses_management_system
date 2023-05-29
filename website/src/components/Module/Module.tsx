import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Module.module.scss";

interface ModuleProps {}

const Module: FC<ModuleProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Module}>
      <div className={styles.Module__Content}>
        <h1 className={styles.Module__Heading}>
          Introduction to Server-Side JavaScript
        </h1>

        <ul className={styles.Module__List__Info}>
          <li className={styles.Module__List__Info__Item}>
            <i className="ri-play-circle-line"></i>
            <span>
              <b>41 min</b> of videos left
            </span>
          </li>
          <li className={styles.Module__List__Info__Item}>
            <i className="ri-book-open-line"></i>
            <span>
              <b>41 min</b> of readings left
            </span>
          </li>
          <li className={styles.Module__List__Info__Item}>
            <i className="ri-file-list-line"></i>
            <span>
              <b>1</b> graded assessment left
            </span>
          </li>
        </ul>

        <div
          className={styles.Module__Desc}
          dangerouslySetInnerHTML={{ __html: paraText }}
        />
      </div>
      <div className={styles.Module__Videos}>
        <ul className={styles.Module__Videos__List}>
          {[1, 2, 3, 4, 5].map((item) => (
            <li
              className={styles.Module__Videos__List__Item}
              onClick={() => {
                const PATH = `../lectures/${item}`;
                navigate(PATH);
              }}
            >
              <i className="ri-play-circle-line"></i>
              <div>
                <p>What is Back End Development?</p>
                <small>Video • 7 min</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const paraText = `
    <p>
      You may already be familiar with JavaScript, but did you know there is a
      server-side JavaScript framework? Discover how Node.js is used on the back
      end to develop rich, dynamic web applications by importing external
      modules and using node package manager (NPM). Get hands-on experience
      using Node.js to build your own simple web server.
    </p>
    <h3>Learning Objectives</h3>
    <hr />
    <ul>
      <li>Explain the components of the backend of a web application.</li>
      <li>Describe the role of Node.js for server-side scripting.</li>
      <li>Differentiate between import and require statements.</li>
      <li>
        Explain the differences between client-side JavaScript and server-side
        JavaScript.
      </li>
      <li>Explain the purpose of the Node.js JavaScript framework.</li>
      <li>Write a simple web server with Node.js.</li>
      <li>Export functions and properties from a module.</li>
      <li>Differentiate among core, local, and third-party modules.</li>
      <li>Compare and contrast a local NPM install to a global NPM install.</li>
      <li>Use npm to manage Node.js packages in your Node.js application.</li>
    </ul>
    `;
export default Module;
