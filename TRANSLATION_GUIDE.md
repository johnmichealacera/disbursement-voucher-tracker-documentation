# Bisaya Translation Guide

This guide explains how to add Bisaya (Cebuano) translations to the documentation.

## ✅ What's Already Configured

1. **i18n Configuration**: Added `ceb` (Cebuano/Bisaya) locale to `docusaurus.config.ts`
2. **Language Switcher**: Added locale dropdown in the navbar (top right, next to theme switcher)
3. **Locale Settings**: Configured with proper labels and language tags

## 🚀 How It Works

The language switcher will appear in the top right corner of the navbar, similar to the theme switcher. Users can click it to switch between English and Bisaya.

## 📝 Adding Translations

### Step 1: Generate Translation Files

Run this command to generate translation files for all your documentation:

```bash
npm run write-translations
```

This will create an `i18n/` folder with translation files for:
- Navigation labels
- Sidebar labels
- UI elements
- All your markdown files

### Step 2: Translate Content

After running `write-translations`, you'll find:

```
i18n/
  ceb/
    docusaurus-plugin-content-docs/
      current/
        [all your markdown files]
    docusaurus-theme-classic/
      [UI translations]
```

**To translate a document:**

1. Go to `i18n/ceb/docusaurus-plugin-content-docs/current/`
2. Find the corresponding `.md` file (same structure as `docs/`)
3. Translate the content to Bisaya
4. Keep the frontmatter (the `---` section at the top) - translate the values but keep the structure

**Example:**

**English** (`docs/getting-started/introduction.md`):
```markdown
---
title: Introduction
---

# Introduction

Welcome to the Disbursement Voucher Tracker...
```

**Bisaya** (`i18n/ceb/docusaurus-plugin-content-docs/current/getting-started/introduction.md`):
```markdown
---
title: Pasiuna
---

# Pasiuna

Maayong pag-abot sa Disbursement Voucher Tracker...
```

### Step 3: Translate UI Elements

Translate the UI labels in:
- `i18n/ceb/docusaurus-theme-classic/navbar.json` - Navigation labels
- `i18n/ceb/docusaurus-theme-classic/footer.json` - Footer labels
- Other JSON files in that folder

### Step 4: Test Your Translations

**Development (one locale at a time):**
```bash
# Test English
npm run start

# Test Bisaya
npm run start -- --locale ceb
```

**Production (all locales):**
```bash
npm run build
```

This builds both English and Bisaya versions. The site will automatically route:
- `/` → English (default)
- `/ceb/` → Bisaya

## 📋 Translation Checklist

- [ ] Run `npm run write-translations`
- [ ] Translate all markdown files in `i18n/ceb/docusaurus-plugin-content-docs/current/`
- [ ] Translate UI labels in `i18n/ceb/docusaurus-theme-classic/`
- [ ] Translate sidebar labels in `i18n/ceb/docusaurus-plugin-content-docs/current/sidebars.json`
- [ ] Test with `npm run start -- --locale ceb`
- [ ] Build and verify: `npm run build`

## 💡 Tips

1. **Start Small**: Begin with a few key pages (Introduction, Quick Start guides)
2. **Consistent Terminology**: Create a glossary of technical terms and their Bisaya translations
3. **Preserve Formatting**: Keep all markdown formatting, code blocks, and frontmatter structure
4. **Test Regularly**: Check translations in the browser as you go
5. **Incremental Approach**: You don't need to translate everything at once - untranslated pages will fall back to English

## 🔄 Updating Translations

When you add new documentation:

1. Add the new file to `docs/`
2. Run `npm run write-translations` again
3. Translate the new file in `i18n/ceb/`

## 📚 Resources

- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- [Translation Tutorial](https://docusaurus.io/docs/i18n/tutorial)

---

**Note**: The language switcher will appear automatically in the navbar once translations are added. Users can switch between languages seamlessly!

