import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'PlanDox Software',
    Svg: require('../../static/img/plandox.svg').default,
    description: (
      <>
       Projeto com ênfase na otimização dos Parâmetros de Qualidade do Biodiesel 
       com o uso de aprendizado de máquina.
      </>
    ),
  },
  {
    title: 'PlanDox API',
    Svg: require('../../static/img/api_log.svg').default,
    description: (
      <>
        Descrição da PlanDox API
      </>
    ),
  },
  // {
  //   title: 'Powered by DARTi Lab',
  //   Svg: require('../../static/img/logo_darti.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, link,title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg  className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 >{title}</h3>
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
