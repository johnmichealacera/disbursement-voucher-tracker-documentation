# Disbursement Voucher Tracker Documentation

Comprehensive documentation website for the Disbursement Voucher Tracker system—a modern, web-based system for managing municipal government disbursement vouchers.

## 📚 About This Documentation

This documentation provides complete guides for all 12 user roles in the Disbursement Voucher Tracker system, including:

- **Getting Started Guides** - Introduction, first-time login, and user roles
- **Role-Based Tutorials** - Detailed guides for each user role (Requester, GSO, BAC, Secretary, Mayor, etc.)
- **Workflow Guides** - Step-by-step workflows for standard, GSO, and HR processes
- **Quick Start Guides** - 5-minute guides to get started quickly
- **Reference Materials** - Glossary, FAQ, troubleshooting, and status guide

## 🌐 Internationalization

This documentation supports **two languages**:
- **English** (default) - `/`
- **Bisaya/Cebuano** - `/ceb/`

Users can switch between languages using the locale dropdown in the navbar.

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 20.0 (required for Docusaurus 3.9.2)
- **npm** or **yarn**

### Installation

```bash
# Install dependencies
npm install
```

### Local Development

```bash
# Start development server (English locale)
npm run start

# Start development server (Bisaya locale)
npm run start -- --locale ceb
```

The site will be available at `http://localhost:3000` (or `http://localhost:3000/ceb/` for Bisaya).

**Note:** In development mode, only one locale can be served at a time. To test locale switching, you need to build the site (see below).

### Build for Production

```bash
# Build all locales
npm run build

# Build specific locale
npm run build -- --locale ceb
```

### Serve Production Build

```bash
npm run serve
```

This serves the built site locally. You can then test locale switching by navigating between `/` (English) and `/ceb/` (Bisaya).

## 📝 Documentation Status

### Completed Documentation

- ✅ **Getting Started** (3/3 complete)
  - Introduction to the System
  - First-Time Login
  - Understanding User Roles

- ✅ **Role-Based Guides** (2/12 complete)
  - Requester Guide
  - BAC Guide

- ✅ **Workflows** (1/3 complete)
  - Standard Workflow Guide

- ✅ **Quick Start Guides** (2/4 complete)
  - Quick Start: Requester
  - Quick Start: Reviewer

- ✅ **Reference Guides** (4/4 complete)
  - Glossary
  - FAQ
  - Troubleshooting Guide
  - Status Guide

### In Progress

- 🔄 **Placeholder Files** - 11 files exist but need completion
- ❌ **Missing Files** - 20+ documentation files need to be created

See [DOCUMENTATION_STATUS.md](./DOCUMENTATION_STATUS.md) for detailed status and next steps.

## 🌍 Translation Guide

For information on adding or updating Bisaya translations, see [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md).

### Translation Status

- ✅ **UI Elements** - Navbar, footer, and theme translations
- ✅ **Documentation Content** - All markdown files have Bisaya translations
- ✅ **Homepage** - React components use translation APIs
- ✅ **Sidebar Labels** - Category labels translated

## 🛠️ Development

### Project Structure

```
.
├── docs/                          # English documentation (markdown files)
├── i18n/
│   └── ceb/                       # Bisaya/Cebuano translations
│       ├── docusaurus-plugin-content-docs/
│       │   └── current/           # Translated markdown files
│       └── docusaurus-theme-classic/
│           └── *.json            # UI translations
├── src/
│   ├── pages/                     # React pages (homepage, etc.)
│   └── css/                       # Custom styles
├── static/                        # Static assets (images, etc.)
├── sidebars.ts                    # Sidebar configuration
└── docusaurus.config.ts          # Docusaurus configuration
```

### Key Configuration Files

- `docusaurus.config.ts` - Main configuration (i18n, theme, plugins)
- `sidebars.ts` - Documentation sidebar structure
- `i18n/ceb/` - Bisaya translation files

### Commands

```bash
# Generate translation files
npm run write-translations -- --locale ceb

# Clear Docusaurus cache
npm run clear

# Type checking
npm run typecheck
```

## 📊 Documentation Statistics

- **Total Documentation Files**: 21 markdown files
- **Fully Complete Tutorials**: 10
- **Placeholder Files**: 11
- **Files Not Yet Created**: 20+

## 🎯 Features

- ✅ **Multi-language Support** - English and Bisaya/Cebuano
- ✅ **Role-Based Organization** - Guides organized by user role
- ✅ **Progressive Disclosure** - Quick Start → Full Tutorials
- ✅ **Search Functionality** - Built-in search across all documentation
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Dark Mode** - Automatic theme switching support

## 📖 Documentation Sections

1. **Getting Started** - Introduction and setup guides
2. **Role-Based Guides** - Detailed tutorials for each user role
3. **Workflows** - Complete workflow documentation
4. **Features** - Feature-specific guides
5. **Quick Start Guides** - Fast-track learning
6. **Reference** - Glossary, FAQ, troubleshooting, status guide

## 🔗 Links

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus i18n Guide](https://docusaurus.io/docs/i18n/introduction)

## 📝 Notes

- All placeholder files include "Coming Soon" sections with links to related content
- Screenshot placeholders are mentioned throughout - add actual screenshots when available
- The structure supports comprehensive documentation for all 12 user roles

## 🤝 Contributing

When adding new documentation:

1. Add the English version to `docs/`
2. Run `npm run write-translations -- --locale ceb` to generate translation files
3. Translate the content in `i18n/ceb/docusaurus-plugin-content-docs/current/`
4. Update `sidebars.ts` if adding new sections
5. Test with `npm run build` to ensure everything works

---

**Built with [Docusaurus](https://docusaurus.io/)** - A modern static website generator.
