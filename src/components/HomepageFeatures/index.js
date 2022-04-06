import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Accessible',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Spent hours looking for resources? Now you don't have to.
                Find them all here, in one place.
            </>
        ),
    },
    {
        title: 'Project Based',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Tired of reading PowerPoints and documentation? Here, all activities are
                project based, so you can get the experience that <b>you</b> need.
            </>
        ),
    },
    {
        title: 'Intuitive',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
