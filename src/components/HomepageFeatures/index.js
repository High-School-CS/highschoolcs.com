import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Accessible',
        Svg: require('@site/static/img/accessible.svg').default,
        description: (
            <>
                All the resources <b>you</b> will need to jump start your CS career,
                all in one place. Tutorials, articles, projects, and much much more.
            </>
        ),
    },
    {
        title: 'Project Based',
        Svg: require('@site/static/img/project_based.svg').default,
        description: (
            <>
                Skill isn't everything. Here, you can find guided projects that will
                give <b>you</b> the experiences that you need to succeed.
            </>
        ),
    },
    {
        title: 'Intuitive',
        Svg: require('@site/static/img/intuitive.svg').default,
        description: (
            <>
                No fancy terms. No jargon. Just the basics. We exist to
                give <b>you</b> the start you need to succeed. All in
                simple English.
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
            <br/>
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
