# react-maker-widget

A simple widget to display the information of the maker

## How to use?

Install

```
npm i react-maker-widget
```

Example

```
import { MakerWidget } from "react-maker-widget";

const data = {
  name: "Dilpreet",
  avatar: "https://avatars.githubusercontent.com/u/12807846?v=4",
  twitter: "https://twitter.com/dilpreet",
  github: "",
  linkedin: "",
  website: "",
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

function example() {
  return (
    <div>
      <MakerWidget
        name={data.name}
        avatar={data.avatar}
        projects={data.projects}
        twitter={data.twitter}
        github={data.github}
        linkedin={data.linkedin}
        website={data.website}
      />
    </div>
    )
}
```

## Properties

| propery  | description              |
| -------- | ------------------------ |
| name     | name of the maker        |
| avatar   | a link of maker's avatar |
| twitter  | twitter link             |
| linkedin | linkedin link            |
| github   | github link              |
| website  | website link             |
| projects | An object of projects    |

### Project object structure

```
projects: [
  {
    name: "Name of the project",
    description: "Description of the project",
    link: "Link of the project",
    img: "Promo image of the project",
  },
  ...
]
```

## License

MIT © [dilpreetsio](https://github.com/dilpreetsio)
