import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to ready",
    Svg: require("../../static/learn.svg").default,
    description: (
      <>Read all the notes from Akshay Saini's Namaste Javascript Series</>
    ),
  },
  {
    title: "Focus on main topics",
    Svg: require("../../static/concepts.svg").default,
    description: <>Easy to focus documentation with option to search topics</>,
  },
  {
    title: "Dev updates",
    Svg: require("../../static/programmer.svg").default,
    description: <>I will try to update the docs on regular basis.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
