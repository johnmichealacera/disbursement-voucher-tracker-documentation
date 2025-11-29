---
sidebar_position: 3
title: Understanding User Roles
description: Comprehensive guide to all 12 user roles, their permissions, and responsibilities
tags: [getting-started, roles, permissions]
---

# Understanding User Roles

The Disbursement Voucher Tracker supports **12 different user roles**, each with specific responsibilities and permissions. Understanding your role helps you know what you can do in the system.

## Role Overview

Every user in the system is assigned one or more roles. Your role determines:
- ✅ What actions you can perform
- ✅ Which vouchers you can view
- ✅ What menu options are available
- ✅ Which notifications you receive
- ✅ Your place in the approval workflow

## The 12 User Roles

### 1. REQUESTER

**Who**: Department staff members who need to request payments

**Responsibilities**:
- Create disbursement vouchers for regular office expenses
- Fill out payment details (payee, amount, particulars)
- Save vouchers as drafts or submit for review
- Track the status of vouchers they created

**Key Features**:
- Create simple vouchers (no line items)
- Use payee directory for quick selection
- View approval progress
- Receive notifications when vouchers are approved or need attention

**Workflow Position**: First step in Standard workflow

**Tutorial**: [Requester Guide](../roles/requester.md)

---

### 2. GSO (General Services Office)

**Who**: Staff in the General Services Office handling procurement

**Responsibilities**:
- Create procurement-related disbursement vouchers
- Add multiple line items with quantities and prices
- Use item directory and tags
- Assign custom voucher IDs
- Track procurement vouchers through BAC review

**Key Features**:
- Create vouchers with multiple items
- Use item directory with default prices
- Tag vouchers for categorization
- Specify source offices
- Custom ID assignment

**Workflow Position**: First step in GSO workflow (includes BAC review)

**Tutorial**: [GSO Guide](../roles/gso.md)

---

### 3. HR (Human Resources)

**Who**: Human Resources department staff

**Responsibilities**:
- Create HR-related disbursement vouchers
- Handle employee-related payments
- Track HR vouchers through approval process

**Key Features**:
- Create HR-specific vouchers
- Similar to Requester but for HR context
- No BAC review required (different from GSO)

**Workflow Position**: First step in HR workflow

**Tutorial**: [HR Guide](../roles/hr.md)

---

### 4. SECRETARY

**Who**: Secretary's office staff handling initial review

**Responsibilities**:
- Receive vouchers from Requesters, GSO, or HR
- Perform initial review and validation
- Route vouchers to appropriate next level (Mayor)
- Add review remarks

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- View all pending vouchers requiring secretary review
- Add comments during review
- Forward to Mayor for approval

**Workflow Position**: Second step in all workflows (after creation)

**Tutorial**: [Secretary Guide](../roles/secretary.md)

---

### 5. MAYOR

**Who**: Municipal Mayor or authorized executive

**Responsibilities**:
- Approve vouchers after Secretary review
- Make routing decisions (GSO vouchers go to BAC, others go to Budget)
- Add approval remarks
- Final executive approval before department reviews

**Key Features**:
- Three-stage approval: RECEIVED → REVIEWED → FORWARDED
- View all vouchers pending mayoral approval
- Route vouchers to appropriate departments
- Executive-level authorization

**Workflow Position**: Third step in all workflows (after Secretary)

**Tutorial**: [Mayor Guide](../roles/mayor.md)

---

### 6. BAC (Bids and Awards Committee)

**Who**: BAC members reviewing procurement vouchers

**Responsibilities**:
- Review GSO vouchers after Mayor approval
- Multiple members must review independently
- Add review comments
- Complete individual review process

**Key Features**:
- **Multi-reviewer system**: Multiple BAC members review (default: 3 required)
- Individual tracking: Each member has their own RECEIVED → REVIEWED → FORWARDED
- View other BAC members' progress
- "X out of Y approvers" status display
- Only for GSO workflow vouchers

**Workflow Position**: Fourth step in GSO workflow only (after Mayor)

**Tutorial**: [BAC Guide](../roles/bac.md)

---

### 7. BUDGET

**Who**: Budget office staff

**Responsibilities**:
- Review vouchers for budget allocation compliance
- Verify funds are available
- Add budget remarks
- Forward to Accounting after budget verification

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- Budget compliance checking
- View pending budget reviews
- Track budget-reviewed vouchers

**Workflow Position**: 
- Standard/HR workflow: After Mayor
- GSO workflow: After BAC

**Tutorial**: [Budget Guide](../roles/budget.md)

---

### 8. ACCOUNTING

**Who**: Accounting department staff

**Responsibilities**:
- Perform financial validation
- Verify accounting accuracy
- Add accounting remarks
- Forward to Treasury for payment processing

**Key Features**:
- Three-stage review: RECEIVED → REVIEWED → FORWARDED
- Financial validation
- View pending accounting reviews
- Track accounting-reviewed vouchers

**Workflow Position**: After Budget in all workflows

**Tutorial**: [Accounting Guide](../roles/accounting.md)

---

### 9. TREASURY

**Who**: Treasury department staff

**Responsibilities**:
- Process approved vouchers for payment
- Issue check numbers
- Mark vouchers as available for release
- Record final release of funds

**Key Features**:
- **Three-step process** (different from other reviewers):
  1. Check Number Issuance
  2. Available for Release
  3. Released
- Enter check numbers
- Record release dates and recipients
- Track payment methods (CASH, CHECK, E_TRANSFER)

**Workflow Position**: Final step in all workflows (after Accounting)

**Tutorial**: [Treasury Guide](../roles/treasury.md)

---

### 10. DEPARTMENT_HEAD

**Who**: Department heads with approval authority

**Responsibilities**:
- Level 1 approval for department vouchers
- Review and approve department-specific vouchers
- Add approval remarks

**Key Features**:
- Department-level approval authority
- View department-specific vouchers
- Add approval comments

**Workflow Position**: Varies by configuration

**Tutorial**: [Department Head Guide](../roles/department-head.md)

---

### 11. FINANCE_HEAD

**Who**: Finance department head

**Responsibilities**:
- Financial oversight and approval
- Review financial aspects of vouchers
- Add financial review remarks

**Key Features**:
- Financial oversight role
- View financial aspects of vouchers
- Add financial review comments

**Workflow Position**: Varies by configuration

**Tutorial**: [Finance Head Guide](../roles/finance-head.md)

---

### 12. ADMIN

**Who**: System administrators

**Responsibilities**:
- Manage all users (create, edit, activate/deactivate, delete)
- Manage directories (Payees, Tags, Items)
- Configure system settings (BAC required approvals, etc.)
- Monitor system-wide activity

**Key Features**:
- **User Management**: Full control over user accounts
- **Directory Management**: Manage payees, tags, and items
- **System Settings**: Configure application-wide settings
- **System Monitoring**: View system-wide statistics

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

- **BAC**: Requires multiple reviewers (configurable, default 3)
- **TREASURY**: Uses three-step process instead of three-stage review
- **GSO**: Can create vouchers with multiple line items
- **ADMIN**: Has access to all system management functions

## Switching Between Roles (Admin)

If you're an **ADMIN** user, you may have access to switch between roles for testing purposes. However, in normal operations, each user has a single assigned role.

:::info Role Assignment
Your role is assigned by a system administrator. If you believe your role is incorrect or you need additional permissions, contact your administrator.
:::

## What's Next?

Now that you understand roles:

1. **[Role-Based Tutorials](../roles/requester.md)** - Detailed guides for each role
2. **[Workflow Tutorials](../workflows/standard.md)** - Understand how vouchers flow through the system
3. **[Quick Start Guides](../quick-start/requester.md)** - 5-minute guides for your role

:::tip Find Your Tutorial
Use the navigation menu to find tutorials specific to your role. Each role has comprehensive guides covering all features available to you.
:::

:::info Questions About Your Role?
If you're unsure about your role or what you can do:
- Check with your system administrator
- Review the specific role tutorial
- See the [FAQ](../reference/faq.md) for common questions
:::

