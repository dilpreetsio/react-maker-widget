import styles from "./MakerWidget.module.css";
import { useState } from "react";
import Icon from "./Icons";

type Project = {
  name: string;
  description: string;
  link: string;
};

type MakerWidgetProps = {
  name?: string;
  avatar?: string;
  intro?: string;
  projects?: Project[];
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"];

const getColor = (name: string) => {
  const charCode = name.charCodeAt(0);
  const index = charCode % colors.length;
  return colors[index];
};

export function MakerWidget(props: MakerWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, avatar, projects, twitter, linkedin, github, website } = props;

  return (
    <div className={styles.makerWidget}>
      <div onClick={() => setIsExpanded(true)} className={styles.header}>
        {avatar && (
          <img
            className={styles.avatar}
            src={avatar}
            alt="maker widget avatar image"
          />
        )}
        Made by {name}
      </div>

      {isExpanded && (
        <div className={styles.content}>
          <div onClick={() => setIsExpanded(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.close}
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
          {avatar && (
            <div className={styles["avatar-container"]}>
              <img
                className={styles["avatar-lg"]}
                src={avatar}
                alt="maker widget avatar image"
              />
            </div>
          )}
          {name && (
            <div className={styles.intro}>
              This project is made by <br />
              <span className={`${styles.bold} ${styles["large-text"]}`}>
                {name}
              </span>
            </div>
          )}

          {projects && projects.length > 0 && (
            <div className={styles.projects}>
              <div className={styles["projects-header"]}>Other projects</div>
              {projects.map((project: Project) => (
                <a
                  key={project.name}
                  className={styles.project}
                  href={project.link}
                >
                  <div
                    className={styles["text-icon"]}
                    style={{
                      backgroundColor: getColor(project.name),
                    }}
                  >
                    {project.name[0]}
                  </div>
                  <div className={styles["project-desc"]}>
                    <div>{project.name}</div>
                    <div className={styles["small-text"]}>
                      {project.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className={styles.socials}>
            {twitter && (
              <a href={twitter} className={styles.icon}>
                <Icon type={"twitter"} />
              </a>
            )}
            {github && (
              <a href={github} className={styles.icon}>
                <Icon type={"github"} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className={styles.icon}>
                <Icon type={"linkedin"} />
              </a>
            )}
            {website && (
              <a href={website} className={styles.icon}>
                <Icon type={"website"} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
