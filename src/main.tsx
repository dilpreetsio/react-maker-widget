import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MakerWidget } from "../lib/main";

const data = {
  header: "Dilpreet",
  avatar: "https://avatars.githubusercontent.com/u/12807846?v=4",
  twitter: "https://twitter.com/dilpreet",
  github: "https://github.com/dilpreetsio",
  linkedin: "",
  website: "https://dilpreetsio.com",
  projects: [
    {
      name: "Wowshot",
      description: "Create beautiful product videos",
      link: "https://wowshot.co",
      img: "",
    },
    {
      name: "Super designer",
      description: "A collection of design tools",
      link: "https://superdesigner.co",
      img: "",
    },
    {
      name: "Unicorn icons",
      description: "Animated icons for your next project",
      link: "https://unicornicons.com",
      img: "",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <h1>Maker widget demo</h1>
    </div>
    <MakerWidget
      name={"Dilpreet"}
      avatar={data.avatar}
      projects={data.projects}
      twitter={data.twitter}
      github={data.github}
      linkedin={data.linkedin}
      website={data.website}
    />
  </React.StrictMode>
);
