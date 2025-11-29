import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration for Disbursement Voucher Tracker documentation
 * Organized by user needs: Getting Started → Role-Based Guides → Workflows → Features → Reference
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/first-login',
        'getting-started/user-roles',
      ],
    },
    {
      type: 'category',
      label: 'Role-Based Guides',
      items: [
        'roles/requester',
        'roles/gso',
        'roles/secretary',
        'roles/mayor',
        'roles/bac',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/standard',
        'workflows/gso',
        'workflows/hr',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Approval System',
          items: [
            'features/approval-progress',
            'features/activity-log',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Quick Start Guides',
      items: [
        'quick-start/requester',
        'quick-start/gso',
        'quick-start/reviewer',
        'quick-start/admin',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/faq',
        'reference/troubleshooting',
        'reference/status-guide',
      ],
    },
  ],
};

export default sidebars;
