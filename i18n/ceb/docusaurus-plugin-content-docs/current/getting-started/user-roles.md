---
sidebar_position: 3
title: Pag-Sabot sa User Roles
description: Komprehensibong giya sa tanan nga 12 ka user roles, ang ilang permissions, ug responsibilities
tags: [getting-started, roles, permissions]
---

# Pag-Sabot sa User Roles

Ang Disbursement Voucher Tracker nagsuporta sa **12 ka lain-laing user roles**, ang matag usa adunay specific responsibilities ug permissions. Ang pag-sabot sa imong role makatabang kanimo nga mahibaloan kung unsa ang mahimo nimo sa sistema.

## Role Overview

Ang matag user sa sistema gi-assign og usa o daghan pa nga roles. Ang imong role nag-determine:
- ✅ Unsa ang mga aksyon nga mahimo nimo
- ✅ Unsa ang mga vouchers nga makita nimo
- ✅ Unsa ang menu options nga available
- ✅ Unsa ang mga notifications nga madawat nimo
- ✅ Ang imong lugar sa approval workflow

## Ang 12 ka User Roles

### 1. REQUESTER

**Kinsa**: Department staff members nga nanginahanglan og request payments

**Responsibilities**:
- Paghimo og disbursement vouchers para sa regular office expenses
- Pagpuno sa payment details (payee, amount, particulars)
- Pag-save sa vouchers isip drafts o i-submit para sa review
- Pag-track sa status sa vouchers nga ilang gihimo

**Key Features**:
- Paghimo og simple vouchers (walay line items)
- Paggamit sa payee directory para sa quick selection
- Pagtan-aw sa approval progress
- Pagdawat og notifications kung ang vouchers gi-approve o nanginahanglan og atensyon

**Workflow Position**: Unang lakang sa Standard workflow

**Tutorial**: [Requester Guide](../roles/requester.md)

---

### 2. GSO (General Services Office)

**Kinsa**: Staff sa General Services Office nga nag-handle sa procurement

**Responsibilities**:
- Paghimo og procurement-related disbursement vouchers
- Pag-add og multiple line items uban sa quantities ug prices
- Paggamit sa item directory ug tags
- Pag-assign og custom voucher IDs
- Pag-track sa procurement vouchers pinaagi sa BAC review

**Key Features**:
- Paghimo og vouchers uban sa multiple items
- Paggamit sa item directory uban sa default prices
- Pag-tag sa vouchers para sa categorization
- Pag-specify sa source offices
- Custom ID assignment

**Workflow Position**: Unang lakang sa GSO workflow (apil ang BAC review)

**Tutorial**: [GSO Guide](../roles/gso.md)

---

### 3. HR (Human Resources)

**Kinsa**: Human Resources department staff

**Responsibilities**:
- Paghimo og HR-related disbursement vouchers
- Pag-handle sa employee-related payments
- Pag-track sa HR vouchers pinaagi sa approval process

**Key Features**:
- Paghimo og HR-specific vouchers
- Susama sa Requester pero para sa HR context
- Walay BAC review required (lahi sa GSO)

**Workflow Position**: Unang lakang sa HR workflow

**Tutorial**: [HR Guide](../roles/hr.md)

---

### 4. SECRETARY

**Kinsa**: Secretary's office staff nga nag-handle sa initial review

**Responsibilities**:
- Pagdawat sa vouchers gikan sa Requesters, GSO, o HR
- Pag-perform sa initial review ug validation
- Pag-route sa vouchers sa appropriate next level (Mayor)
- Pag-add og review remarks

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- Pagtan-aw sa tanan nga pending vouchers nga nanginahanglan og secretary review
- Pag-add og comments samtang nag-review
- Pag-forward sa Mayor para sa approval

**Workflow Position**: Ikaduhang lakang sa tanan nga workflows (human sa creation)

**Tutorial**: [Secretary Guide](../roles/secretary.md)

---

### 5. MAYOR

**Kinsa**: Municipal Mayor o authorized executive

**Responsibilities**:
- Pag-approve sa vouchers human sa Secretary review
- Paghimo og routing decisions (GSO vouchers moadto sa BAC, ang uban moadto sa Budget)
- Pag-add og approval remarks
- Final executive approval sa dili pa department reviews

**Key Features**:
- Three-stage approval: RECEIVED → REVIEWED → FORWARDED
- Pagtan-aw sa tanan nga vouchers pending mayoral approval
- Pag-route sa vouchers sa appropriate departments
- Executive-level authorization

**Workflow Position**: Ikatulong lakang sa tanan nga workflows (human sa Secretary)

**Tutorial**: [Mayor Guide](../roles/mayor.md)

---

### 6. BAC (Bids and Awards Committee)

**Kinsa**: BAC members nga nag-review sa procurement vouchers

**Responsibilities**:
- Pag-review sa GSO vouchers human sa Mayor approval
- Daghang members ang kinahanglan mag-review independently
- Pag-add og review comments
- Pag-complete sa individual review process

**Key Features**:
- **Multi-reviewer system**: Daghang BAC members ang nag-review (default: 3 required)
- Individual tracking: Ang matag member adunay ilang kaugalingong RECEIVED → REVIEWED → FORWARDED
- Pagtan-aw sa ubang BAC members' progress
- "X out of Y approvers" status display
- Para lamang sa GSO workflow vouchers

**Workflow Position**: Ikaupat nga lakang sa GSO workflow lang (human sa Mayor)

**Tutorial**: [BAC Guide](../roles/bac.md)

---

### 7. BUDGET

**Kinsa**: Budget office staff

**Responsibilities**:
- Pag-review sa vouchers para sa budget allocation compliance
- Pag-verify nga available ang funds
- Pag-add og budget remarks
- Pag-forward sa Accounting human sa budget verification

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- Budget compliance checking
- Pagtan-aw sa pending budget reviews
- Pag-track sa budget-reviewed vouchers

**Workflow Position**: 
- Standard/HR workflow: Human sa Mayor
- GSO workflow: Human sa BAC

**Tutorial**: [Budget Guide](../roles/budget.md)

---

### 8. ACCOUNTING

**Kinsa**: Accounting department staff

**Responsibilities**:
- Pag-perform sa financial validation
- Pag-verify sa accounting accuracy
- Pag-add og accounting remarks
- Pag-forward sa Treasury para sa payment processing

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- Financial validation
- Pagtan-aw sa pending accounting reviews
- Pag-track sa accounting-reviewed vouchers

**Workflow Position**: Human sa Budget sa tanan nga workflows

**Tutorial**: [Accounting Guide](../roles/accounting.md)

---

### 9. TREASURY

**Kinsa**: Treasury department staff

**Responsibilities**:
- Pag-process sa approved vouchers para sa payment
- Pag-issue og check numbers
- Pag-mark sa vouchers isip available para sa release
- Pag-record sa final release sa funds

**Key Features**:
- **Three-step process** (lahi sa ubang reviewers):
  1. Check Number Issuance
  2. Available for Release
  3. Released
- Pag-enter sa check numbers
- Pag-record sa release dates ug recipients
- Pag-track sa payment methods (CASH, CHECK, E_TRANSFER)

**Workflow Position**: Final lakang sa tanan nga workflows (human sa Accounting)

**Tutorial**: [Treasury Guide](../roles/treasury.md)

---

### 10. DEPARTMENT_HEAD

**Kinsa**: Department heads uban sa approval authority

**Responsibilities**:
- Level 1 approval para sa department vouchers
- Pag-review ug pag-approve sa department-specific vouchers
- Pag-add og approval remarks

**Key Features**:
- Department-level approval authority
- Pagtan-aw sa department-specific vouchers
- Pag-add og approval comments

**Workflow Position**: Nagkalain-lain base sa configuration

**Tutorial**: [Department Head Guide](../roles/department-head.md)

---

### 11. FINANCE_HEAD

**Kinsa**: Finance department head

**Responsibilities**:
- Financial oversight ug approval
- Pag-review sa financial aspects sa vouchers
- Pag-add og financial review remarks

**Key Features**:
- Financial oversight role
- Pagtan-aw sa financial aspects sa vouchers
- Pag-add og financial review comments

**Workflow Position**: Nagkalain-lain base sa configuration

**Tutorial**: [Finance Head Guide](../roles/finance-head.md)

---

### 12. ADMIN

**Kinsa**: System administrators

**Responsibilities**:
- Pag-manage sa tanan nga users (create, edit, activate/deactivate, delete)
- Pag-manage sa directories (Payees, Tags, Items)
- Pag-configure sa system settings (BAC required approvals, ug uban pa)
- Pag-monitor sa system-wide activity

**Key Features**:
- **User Management**: Full control sa user accounts
- **Directory Management**: Pag-manage sa payees, tags, ug items
- **System Settings**: Pag-configure sa application-wide settings
- **System Monitoring**: Pagtan-aw sa system-wide statistics

**Permissions**: Full system access

**Tutorial**: [Admin Guide](../roles/admin.md)

---

## Permissions by Role

### Viewing Permissions

| Role | Can View Own Vouchers | Can View All Vouchers | Can View Pending Reviews |
|------|----------------------|----------------------|-------------------------|
| REQUESTER | ✅ | ❌ | ❌ |
| GSO | ✅ | ❌ | ❌ |
| HR | ✅ | ❌ | ❌ |
| SECRETARY | ❌ | ✅ | ✅ (Secretary reviews) |
| MAYOR | ❌ | ✅ | ✅ (Mayor approvals) |
| BAC | ❌ | ✅ (GSO only) | ✅ (BAC reviews) |
| BUDGET | ❌ | ✅ | ✅ (Budget reviews) |
| ACCOUNTING | ❌ | ✅ | ✅ (Accounting reviews) |
| TREASURY | ❌ | ✅ | ✅ (Treasury actions) |
| DEPARTMENT_HEAD | ✅ (Dept only) | ❌ | ✅ (Dept reviews) |
| FINANCE_HEAD | ❌ | ✅ | ✅ (Finance reviews) |
| ADMIN | ✅ | ✅ | ✅ |

### Action Permissions

| Role | Create Voucher | Edit Draft | Review/Approve | Process Payment | Manage Users |
|------|---------------|------------|----------------|-----------------|--------------|
| REQUESTER | ✅ | ✅ (Own drafts) | ❌ | ❌ | ❌ |
| GSO | ✅ | ✅ (Own drafts) | ❌ | ❌ | ❌ |
| HR | ✅ | ✅ (Own drafts) | ❌ | ❌ | ❌ |
| SECRETARY | ❌ | ❌ | ✅ | ❌ | ❌ |
| MAYOR | ❌ | ❌ | ✅ | ❌ | ❌ |
| BAC | ❌ | ❌ | ✅ (GSO only) | ❌ | ❌ |
| BUDGET | ❌ | ❌ | ✅ | ❌ | ❌ |
| ACCOUNTING | ❌ | ❌ | ✅ | ❌ | ❌ |
| TREASURY | ❌ | ❌ | ❌ | ✅ | ❌ |
| DEPARTMENT_HEAD | ❌ | ❌ | ✅ (Dept) | ❌ | ❌ |
| FINANCE_HEAD | ❌ | ❌ | ✅ | ❌ | ❌ |
| ADMIN | ❌ | ❌ | ❌ | ❌ | ✅ |

## Role-Specific Features

### Workflow Participation

- **Standard Workflow**: REQUESTER → SECRETARY → MAYOR → BUDGET → ACCOUNTING → TREASURY
- **GSO Workflow**: GSO → SECRETARY → MAYOR → BAC (multiple) → BUDGET → ACCOUNTING → TREASURY
- **HR Workflow**: HR → SECRETARY → MAYOR → BUDGET → ACCOUNTING → TREASURY

### Special Requirements

- **BAC**: Nanginahanglan og daghang reviewers (configurable, default 3)
- **TREASURY**: Naggamit og three-step process imbes sa three-stage review
- **GSO**: Makahimo og vouchers uban sa multiple line items
- **ADMIN**: Adunay access sa tanan nga system management functions

## Switching Between Roles (Admin)

Kung ikaw usa ka **ADMIN** user, mahimo nga adunay ka access sa pag-switch sa taliwala sa roles para sa testing purposes. Bisan pa, sa normal operations, ang matag user adunay single assigned role.

:::info Role Assignment
Ang imong role gi-assign sa usa ka system administrator. Kung nagtuo ka nga sayop ang imong role o nanginahanglan ka og additional permissions, kontak ang imong administrator.
:::

## Unsa ang Sunod?

Karon nga nasabtan mo na ang roles:

1. **[Role-Based Tutorials](../roles/requester.md)** - Detailed guides para sa matag role
2. **[Workflow Tutorials](../workflows/standard.md)** - Sabta kung giunsa nag-flow ang mga vouchers sa sistema
3. **[Quick Start Guides](../quick-start/requester.md)** - 5-minuto nga mga giya para sa imong role

:::tip Find Your Tutorial
Gamita ang navigation menu aron makita ang tutorials specific sa imong role. Ang matag role adunay comprehensive guides nga nag-cover sa tanan nga features available kanimo.
:::

:::info Questions About Your Role?
Kung dili ka sigurado bahin sa imong role o kung unsa ang mahimo nimo:
- Check sa imong system administrator
- Review ang specific role tutorial
- Tan-awa ang [FAQ](../reference/faq.md) para sa common questions
:::

