---
sidebar_position: 1
title: Standard Workflow Guide
description: Complete step-by-step guide for the standard (non-GSO, non-HR) disbursement workflow
tags: [workflows, standard, requester]
---

# Standard Workflow Guide

The **Standard Workflow** is used for regular office disbursements created by Requesters. This guide walks you through each stage of the complete workflow from creation to payment release.

## Workflow Overview

The Standard Workflow follows this sequence:

1. **Requester** creates voucher → DRAFT or PENDING
2. **Secretary** Review: RECEIVED → REVIEWED → FORWARDED
3. **Mayor** Approval: RECEIVED → REVIEWED → FORWARDED
4. **Budget** Review: RECEIVED → REVIEWED → FORWARDED
5. **Accounting** Review: RECEIVED → REVIEWED → FORWARDED
6. **Treasury** Processing: Check Issuance → Available → Released

:::info Sequential Enforcement
Each stage must complete before the next begins. The system enforces this automatically—you cannot skip stages or work out of order.
:::

## Stage 1: Requester Creates Voucher

### What Happens

1. **Requester** logs into the system
2. Navigates to **"Create Request"** page
3. Fills out voucher form:
   - Payee name and address
   - Particulars (payment description)
   - Amount (in Philippine Pesos)
   - Optional remarks
4. Chooses to:
   - **Save as Draft**: Voucher remains in DRAFT status, can be edited
   - **Submit for Review**: Voucher becomes PENDING, enters workflow

### Status After Creation

- **DRAFT**: If saved as draft (not submitted)
- **PENDING**: If submitted for review

### What Happens Next

- If **DRAFT**: Voucher waits until Requester submits it
- If **PENDING**: Secretary receives notification

### Key Points

- ✅ Requester can edit DRAFT vouchers
- ✅ Once PENDING, Requester cannot edit
- ✅ Secretary is automatically notified when voucher is submitted

---

## Stage 2: Secretary Review

### What Happens

1. **Secretary** receives notification for new voucher
2. Opens voucher and reviews:
   - Payee information
   - Payment details
   - Amount and particulars
   - Supporting documentation (if any)
3. Completes three-stage process:

#### Step 2.1: RECEIVED

- Secretary clicks **"Received"** button
- Acknowledges receipt of voucher
- Optionally adds comment: "Received for initial review"
- Action recorded with timestamp

#### Step 2.2: REVIEWED

- Secretary clicks **"Reviewed"** button
- Completes review of voucher details
- Adds review comments (recommended):
  - "Verified payee information"
  - "Amount and particulars confirmed"
  - Any concerns or observations
- Action recorded with timestamp

#### Step 2.3: FORWARDED

- Secretary clicks **"Forwarded"** button
- Forwards voucher to Mayor for approval
- Optionally adds forwarding comment
- Action recorded with timestamp

### Status After Secretary Review

- **VALIDATED**: After Secretary completes all three stages
- Voucher moves to Mayor stage

### What Happens Next

- Mayor receives notification
- Voucher appears in Mayor's pending approvals list

### Key Points

- ✅ Secretary must complete all three stages in order
- ✅ Comments are recommended for audit trail
- ✅ Voucher cannot proceed until Secretary forwards

---

## Stage 3: Mayor Approval

### What Happens

1. **Mayor** receives notification for Secretary-reviewed voucher
2. Opens voucher and reviews:
   - All previous review information
   - Secretary's comments
   - Voucher details
3. Completes three-stage approval:

#### Step 3.1: RECEIVED

- Mayor clicks **"Received"** button
- Acknowledges receipt from Secretary
- Action recorded with timestamp

#### Step 3.2: REVIEWED

- Mayor clicks **"Reviewed"** button
- Completes executive review
- Adds approval comments:
  - "Reviewed and verified"
  - "Approved for budget review"
  - Any executive notes
- Action recorded with timestamp

#### Step 3.3: FORWARDED

- Mayor clicks **"Forwarded"** button
- Forwards to Budget office
- Action recorded with timestamp

### Status After Mayor Approval

- **APPROVED**: After Mayor completes all three stages
- Voucher moves to Budget stage

### What Happens Next

- Budget office receives notification
- Voucher appears in Budget's pending reviews

### Key Points

- ✅ Mayor has executive approval authority
- ✅ For Standard workflow, voucher goes directly to Budget (no BAC)
- ✅ Mayor's approval is required before Budget review

---

## Stage 4: Budget Review

### What Happens

1. **Budget** office receives notification
2. Opens voucher and reviews:
   - Budget allocation availability
   - Fund source verification
   - Budget compliance
3. Completes three-stage review:

#### Step 4.1: RECEIVED

- Budget staff clicks **"Received"** button
- Acknowledges receipt
- Action recorded with timestamp

#### Step 4.2: REVIEWED

- Budget staff clicks **"Reviewed"** button
- Verifies budget allocation
- Adds budget comments:
  - "Funds available in budget"
  - "Budget allocation verified"
  - Any budget-related notes
- Action recorded with timestamp

#### Step 4.3: FORWARDED

- Budget staff clicks **"Forwarded"** button
- Forwards to Accounting
- Action recorded with timestamp

### Status After Budget Review

- Voucher remains **APPROVED** status
- Moves to Accounting stage

### What Happens Next

- Accounting receives notification
- Voucher appears in Accounting's pending reviews

### Key Points

- ✅ Budget verifies fund availability
- ✅ Must confirm budget allocation before proceeding
- ✅ Voucher cannot proceed if budget is insufficient

---

## Stage 5: Accounting Review

### What Happens

1. **Accounting** receives notification
2. Opens voucher and reviews:
   - Financial accuracy
   - Accounting compliance
   - Documentation completeness
3. Completes three-stage review:

#### Step 5.1: RECEIVED

- Accounting staff clicks **"Received"** button
- Acknowledges receipt
- Action recorded with timestamp

#### Step 5.2: REVIEWED

- Accounting staff clicks **"Reviewed"** button
- Performs financial validation
- Adds accounting comments:
  - "Financial information verified"
  - "Accounting compliance confirmed"
  - Any accounting notes
- Action recorded with timestamp

#### Step 5.3: FORWARDED

- Accounting staff clicks **"Forwarded"** button
- Forwards to Treasury
- Action recorded with timestamp

### Status After Accounting Review

- Voucher remains **APPROVED** status
- Moves to Treasury stage

### What Happens Next

- Treasury receives notification
- Voucher appears in Treasury's pending actions

### Key Points

- ✅ Accounting performs final financial validation
- ✅ Ensures all financial requirements are met
- ✅ Last review stage before payment processing

---

## Stage 6: Treasury Processing

### What Happens

Treasury has a **three-step process** (different from the three-stage review):

1. **Check Number Issuance**
2. **Available for Release**
3. **Released**

### Step 6.1: Check Number Issuance

1. **Treasury** receives notification
2. Opens voucher
3. Clicks **"Issue Check Number"** or **"Check Issuance"** button
4. Enters check number:
   - Format: As per your organization's check numbering system
   - Example: "CHK-2024-001234"
5. Saves check number
6. Action recorded with timestamp

### Step 6.2: Available for Release

1. After check number is issued
2. Treasury clicks **"Mark as Available"** or **"Available for Release"** button
3. Optionally enters:
   - Release date
   - Recipient information
4. Action recorded with timestamp

### Step 6.3: Released

1. When payment is actually released
2. Treasury clicks **"Mark as Released"** or **"Released"** button
3. Enters final release information:
   - Actual release date
   - Payment method (CASH, CHECK, E_TRANSFER)
   - Recipient confirmation
4. Action recorded with timestamp

### Status After Treasury Processing

- **RELEASED**: Final status after payment is released
- Voucher is complete

### What Happens Next

- Requester receives notification that payment is released
- Voucher appears in "Released" status for all users
- Process is complete

### Key Points

- ✅ Treasury process is different from review stages
- ✅ Three distinct steps: Check Issuance → Available → Released
- ✅ Final step completes the entire workflow

---

## Understanding Sequential Enforcement

### Why Sequential?

The system enforces sequential workflow to ensure:
- **Proper authorization**: Each level must approve before next
- **Compliance**: No stages can be skipped
- **Accountability**: Clear chain of responsibility
- **Audit trail**: Complete record of all actions

### What This Means for You

- ✅ You can only act when it's your turn
- ✅ You'll see "Awaiting previous review" if voucher isn't at your stage yet
- ✅ You'll receive notifications when voucher reaches your stage
- ✅ You cannot skip stages or work ahead

### Button States

- **Enabled**: Voucher is at your stage, action is available
- **Disabled**: Voucher hasn't reached your stage yet, or has already passed
- **"Awaiting Previous Review"**: Previous stage hasn't completed

---

## Viewing Progress

### Approval Progress Bar

Every voucher has a progress bar showing:
- **Current stage**: Which department is currently reviewing
- **Completed stages**: Green checkmarks for completed stages
- **Pending stages**: Gray indicators for upcoming stages
- **Progress percentage**: How far through the workflow
- **Timestamps**: When each stage was completed

### Activity Log

The activity log shows:
- All actions taken on the voucher
- Who performed each action
- When it happened
- Comments added at each stage

### Status Badges

Voucher status changes throughout workflow:
- **DRAFT**: Created but not submitted
- **PENDING**: Submitted, awaiting Secretary
- **VALIDATED**: Secretary completed review
- **APPROVED**: Mayor approved, in department reviews
- **RELEASED**: Treasury released payment

---

## Timeline Expectations

### Typical Timeline

- **Requester Creation**: Immediate (when submitted)
- **Secretary Review**: 1-2 business days
- **Mayor Approval**: 1-3 business days
- **Budget Review**: 1-2 business days
- **Accounting Review**: 1-2 business days
- **Treasury Processing**: 1-3 business days

**Total**: Approximately 5-12 business days from submission to release

:::info Actual Timeline
Timeline varies based on:
- Volume of vouchers
- Urgency of payment
- Department workload
- Approval requirements
:::

---

## Common Workflow Issues

### Issue: Voucher Stuck at a Stage

**Possible causes**:
- Reviewer hasn't completed all three stages
- Reviewer is on leave
- Technical issue

**Solution**:
- Check activity log to see last action
- Contact the department at that stage
- Contact administrator if needed

### Issue: Can't See Next Button

**Possible causes**:
- Previous stage hasn't completed
- Voucher is at wrong stage
- Technical issue

**Solution**:
- Check approval progress bar
- Verify previous stage is complete
- Refresh page
- Contact administrator if issue persists

### Issue: Notification Not Received

**Possible causes**:
- Notification system delay (auto-refreshes every 30 seconds)
- Browser notification settings
- Account issue

**Solution**:
- Wait 30 seconds for auto-refresh
- Manually refresh notifications
- Check notification bell badge
- Contact administrator if needed

---

## Best Practices

### For Requesters

1. ✅ Fill out all information completely
2. ✅ Be specific in particulars
3. ✅ Double-check amounts before submitting
4. ✅ Monitor voucher progress

### For Reviewers

1. ✅ Review promptly when notified
2. ✅ Complete all three stages in order
3. ✅ Add meaningful comments
4. ✅ Forward promptly after review

### For Treasury

1. ✅ Issue check numbers accurately
2. ✅ Mark available when ready
3. ✅ Record release information completely
4. ✅ Update status promptly

---

## What's Next?

Now that you understand the Standard Workflow:

1. **[GSO Workflow Guide](./gso.md)** - Learn about GSO workflow with BAC review
2. **[HR Workflow Guide](./hr.md)** - Understand HR-specific workflow
3. **[Approval Progress Guide](../features/approval-progress.md)** - Detailed progress tracking
4. **[Activity Log Guide](../features/activity-log.md)** - Understanding audit trails

:::tip Practice
Follow a voucher through the complete workflow to see how each stage works in practice.
:::

:::info Questions?
- Check the [FAQ](../reference/faq.md)
- Review [Troubleshooting Guide](../reference/troubleshooting.md)
- Contact your system administrator
:::

