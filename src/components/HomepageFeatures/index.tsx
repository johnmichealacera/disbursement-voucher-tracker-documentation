import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  titleId: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Role Workflow',
    titleId: 'homepage.feature.multiRoleWorkflow.title',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepage.feature.multiRoleWorkflow"
        description="Homepage feature description for multi-role workflow">
        Supports 12 different user roles with specific permissions and workflows.
        From requesters to approvers, each role has clear responsibilities and
        step-by-step guides.
      </Translate>
    ),
  },
  {
    title: 'Complete Tracking',
    titleId: 'homepage.feature.completeTracking.title',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepage.feature.completeTracking"
        description="Homepage feature description for complete tracking">
        Real-time tracking of voucher status from creation to release. View
        approval progress, activity logs, and current reviewer information at
        any time.
      </Translate>
    ),
  },
  {
    title: 'Comprehensive Documentation',
    titleId: 'homepage.feature.comprehensiveDocs.title',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepage.feature.comprehensiveDocs"
        description="Homepage feature description for comprehensive documentation">
        Detailed guides for every role and workflow, available in English and
        Bisaya. Quick start guides, troubleshooting tips, and reference
        materials to help you succeed.
      </Translate>
    ),
  },
];

function Feature({title, titleId, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {titleId === 'homepage.feature.multiRoleWorkflow.title' && (
            <Translate
              id="homepage.feature.multiRoleWorkflow.title"
              description="Homepage feature title for Multi-Role Workflow">
              Multi-Role Workflow
            </Translate>
          )}
          {titleId === 'homepage.feature.completeTracking.title' && (
            <Translate
              id="homepage.feature.completeTracking.title"
              description="Homepage feature title for Complete Tracking">
              Complete Tracking
            </Translate>
          )}
          {titleId === 'homepage.feature.comprehensiveDocs.title' && (
            <Translate
              id="homepage.feature.comprehensiveDocs.title"
              description="Homepage feature title for Comprehensive Documentation">
              Comprehensive Documentation
            </Translate>
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
