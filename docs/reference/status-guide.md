---
sidebar_position: 4
title: Status Guide
description: Complete guide to understanding all voucher statuses and their meanings
tags: [reference, status, workflow]
---

# Status Guide

Complete explanation of all voucher statuses in the Disbursement Voucher Tracker, including when they occur, what they mean, and what actions are available.

## Status Overview

Vouchers progress through different statuses as they move through the approval workflow. Understanding these statuses helps you know where your voucher is and what happens next.

## Status Types

### DRAFT

**What it means**: The voucher has been created but not yet submitted for review.

**When it occurs**:
- Requester, GSO, or HR user creates a voucher and clicks "Save as Draft"
- Voucher is saved but doesn't enter the approval workflow

**Who can see it**:
- The user who created it
- Administrators

**What actions are available**:
- ✅ Creator can edit the voucher
- ✅ Creator can submit it for review
- ✅ Creator can delete/cancel it (if allowed)
- ❌ No reviewers can see it yet
- ❌ No notifications are sent

**Visual indicator**: Gray badge with "DRAFT" text

**Next status**: PENDING (when submitted)

---

### PENDING

**What it means**: The voucher has been submitted and is awaiting initial review by the Secretary.

**When it occurs**:
- Requester, GSO, or HR user clicks "Submit for Review"
- Voucher enters the approval workflow
- Secretary receives notification

**Who can see it**:
- The user who created it
- Secretary (for review)
- Administrators
- Other roles may see it in lists (depending on permissions)

**What actions are available**:
- ✅ Secretary can review (Received → Reviewed → Forwarded)
- ❌ Creator cannot edit (unless returned)
- ❌ Other reviewers cannot act yet

**Visual indicator**: Yellow/Orange badge with "PENDING" text

**Next status**: VALIDATED (after Secretary completes review)

---

### VALIDATED

**What it means**: The Secretary has completed initial review and forwarded the voucher to the Mayor.

**When it occurs**:
- Secretary completes all three stages: RECEIVED → REVIEWED → FORWARDED
- Voucher moves to Mayor for approval

**Who can see it**:
- All users with appropriate permissions
- Mayor (for approval)
- Original creator

**What actions are available**:
- ✅ Mayor can approve (Received → Reviewed → Forwarded)
- ❌ Secretary cannot act further
- ❌ Creator cannot edit

**Visual indicator**: Blue badge with "VALIDATED" text

**Next status**: APPROVED (after Mayor approves)

---

### APPROVED

**What it means**: The Mayor has approved the voucher and it's proceeding through department reviews (Budget, Accounting, or BAC for GSO vouchers).

**When it occurs**:
- Mayor completes all three stages: RECEIVED → REVIEWED → FORWARDED
- Voucher moves to next department (Budget for Standard/HR, BAC for GSO)

**Who can see it**:
- All users with appropriate permissions
- Current reviewer (Budget, Accounting, BAC, or Treasury)
- Original creator

**What actions are available**:
- ✅ Current department reviewer can act
- ✅ Budget can review (for Standard/HR workflows)
- ✅ BAC can review (for GSO workflow)
- ✅ Accounting can review (after Budget/BAC)
- ❌ Previous reviewers cannot act further
- ❌ Creator cannot edit

**Visual indicator**: Green badge with "APPROVED" text

**Next status**: 
- Remains APPROVED through department reviews
- Changes to RELEASED (after Treasury releases payment)

---

### RELEASED

**What it means**: Treasury has released the payment. The voucher is complete.

**When it occurs**:
- Treasury completes all three steps: Check Issuance → Available → Released
- Payment has been made to the payee
- Workflow is complete

**Who can see it**:
- All users with appropriate permissions
- Original creator
- All reviewers

**What actions are available**:
- ✅ Can view voucher details
- ✅ Can view complete audit trail
- ❌ No further actions available
- ❌ Cannot be edited or cancelled

**Visual indicator**: Dark Green badge with "RELEASED" text

**Next status**: None (final status)

---

### CANCELLED

**What it means**: The voucher has been cancelled and will not proceed through the workflow.

**When it occurs**:
- Creator cancels a draft voucher
- Authorized user cancels a submitted voucher
- System cancellation (if configured)

**Who can see it**:
- All users with appropriate permissions
- Original creator
- Administrators

**What actions are available**:
- ✅ Can view voucher details
- ✅ Can view cancellation reason
- ❌ Cannot be edited
- ❌ Cannot be reactivated
- ❌ Cannot proceed in workflow

**Visual indicator**: Red badge with "CANCELLED" text

**Next status**: None (final status)

---

## Status Transitions

### Standard Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (can occur at any stage if authorized)
```

### Detailed Transition Path

1. **DRAFT**
   - Created by Requester/GSO/HR
   - Can be edited
   - Can be submitted → **PENDING**

2. **PENDING**
   - Submitted for review
   - Secretary reviews → **VALIDATED**

3. **VALIDATED**
   - Secretary completed review
   - Mayor approves → **APPROVED**

4. **APPROVED**
   - Mayor approved
   - Budget reviews → **APPROVED** (status remains)
   - Accounting reviews → **APPROVED** (status remains)
   - Treasury processes → **RELEASED**

5. **RELEASED**
   - Payment released
   - Final status

### GSO Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (can occur at any stage if authorized)
```

**Difference**: After APPROVED, voucher goes through BAC review before Budget, but status remains APPROVED.

### HR Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (can occur at any stage if authorized)
```

**Same as Standard**: No BAC review, goes directly to Budget after Mayor approval.

---

## Understanding Status in Context

### For Requesters

**Your vouchers will show**:
- **DRAFT**: You can still edit
- **PENDING**: Waiting for Secretary
- **VALIDATED**: Secretary reviewed, with Mayor
- **APPROVED**: In department reviews
- **RELEASED**: Payment made
- **CANCELLED**: Voucher cancelled

**What you can do**:
- Edit DRAFT vouchers
- View all your vouchers
- Track progress
- Cannot edit after PENDING

### For Reviewers

**Vouchers you see will be**:
- **PENDING**: If you're Secretary
- **VALIDATED**: If you're Mayor
- **APPROVED**: If you're Budget, Accounting, BAC, or Treasury

**What you can do**:
- Review vouchers at your stage
- Add comments
- Forward to next department
- Cannot review vouchers not at your stage

### For Administrators

**You can see**:
- All statuses
- All vouchers
- Complete audit trails
- System-wide statistics

**What you can do**:
- View any voucher
- Monitor system status
- Manage users and settings
- Cannot edit vouchers (unless also a reviewer)

---

## Status Badge Colors

Status badges use color coding for quick identification:

- **Gray**: DRAFT (not yet submitted)
- **Yellow/Orange**: PENDING (awaiting initial review)
- **Blue**: VALIDATED (Secretary reviewed)
- **Green**: APPROVED (Mayor approved, in reviews)
- **Dark Green**: RELEASED (payment made)
- **Red**: CANCELLED (voucher cancelled)

---

## Common Status Questions

### "Why is my voucher still PENDING?"

**Possible reasons**:
- Secretary hasn't reviewed yet
- Secretary is on leave
- High volume of vouchers
- System issue

**What to do**:
- Check approval progress
- Contact Secretary's office
- Wait for notification
- Contact administrator if stuck

### "What's the difference between VALIDATED and APPROVED?"

- **VALIDATED**: Secretary completed review, with Mayor
- **APPROVED**: Mayor approved, in department reviews (Budget, Accounting, etc.)

### "Can a RELEASED voucher be changed?"

No. Once RELEASED, the voucher is final. Payment has been made and the workflow is complete.

### "Why does my voucher show APPROVED but hasn't moved?"

**Possible reasons**:
- Still in department reviews (Budget, Accounting)
- Waiting for BAC review (GSO vouchers)
- Waiting for Treasury processing
- Check approval progress bar for current stage

### "Can I cancel an APPROVED voucher?"

Cancellation depends on:
- Your role and permissions
- System configuration
- Voucher stage
- Contact administrator for cancellation

---

## Status and Workflow Stages

### Status vs. Current Stage

**Status** is the overall state (DRAFT, PENDING, APPROVED, etc.)

**Current Stage** is where the voucher is in the workflow (Secretary, Mayor, Budget, etc.)

A voucher can be **APPROVED** status but at different stages:
- APPROVED at Budget stage
- APPROVED at Accounting stage
- APPROVED at Treasury stage

Check the **Approval Progress** bar to see the current stage.

---

## Best Practices

### For Requesters

1. ✅ Check status regularly
2. ✅ Understand what each status means
3. ✅ Monitor progress through approval progress bar
4. ✅ Don't worry if status stays APPROVED—check current stage

### For Reviewers

1. ✅ Act promptly when vouchers reach your stage
2. ✅ Understand status doesn't always change (APPROVED through multiple stages)
3. ✅ Check approval progress to see current stage
4. ✅ Complete all three stages to move voucher forward

### For All Users

1. ✅ Use status badges for quick identification
2. ✅ Check approval progress for detailed stage information
3. ✅ Review activity log for complete history
4. ✅ Understand status is different from current stage

---

## What's Next?

Now that you understand statuses:

1. **[Workflow Guides](../workflows/standard.md)** - See how statuses change in workflows
2. **[Approval Progress Guide](../features/approval-progress.md)** - Understand progress tracking
3. **[Activity Log Guide](../features/activity-log.md)** - See status changes in audit trail
4. **[FAQ](./faq.md)** - Common questions about statuses

:::tip Status Tracking
Use the approval progress bar to see not just the status, but the current stage and completion percentage.
:::

:::info Questions?
If you're unsure about a voucher's status:
- Check the approval progress bar
- Review the activity log
- Contact the current reviewer
- Ask your system administrator
:::

