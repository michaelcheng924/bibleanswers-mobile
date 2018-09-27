// GOSPEL
import gospel from "./gospel";

// BIBLE
import genesis12Plants from "./bible/genesis12Plants";
import problemOfEvil from "./bible/problemOfEvil";

// JESUS
import lucian from "./jesus/lucian";
import tacitus from "./jesus/tacitus";

// WORLDVIEW
import agnosticism from "./worldview/agnosticism";

const POSTS = [
  // GOSPEL
  gospel,

  // BIBLE
  genesis12Plants,
  problemOfEvil,

  // JESUS
  lucian,
  tacitus,

  // WORLDVIEW
  agnosticism
];

const POSTS_ORGANIZED = [
  {
    heading: "Defending the biblical worldview",
    categories: [
      {
        category: "Jesus",
        subcategories: [
          {
            subcategory: "Did Jesus exist?",
            posts: [tacitus, lucian]
          }
        ]
      }
    ]
  },
  {
    heading: "Problems with non-biblical worldviews",
    categories: [
      {
        category: "Agnosticism",
        posts: [agnosticism]
      }
    ]
  },
  {
    heading: "Practical Christian living",
    categories: []
  }
];

export default POSTS_ORGANIZED;
