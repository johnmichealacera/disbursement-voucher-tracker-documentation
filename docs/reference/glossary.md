---
sidebar_position: 1
title: Glossary of Terms
description: Definitions of key terms used in the Disbursement Voucher Tracker
tags: [reference, glossary, definitions]
---

# Glossary of Terms

Definitions of key terms and concepts used in the Disbursement Voucher Tracker system.

## A

### Activity Log
A chronological record of all actions taken on a voucher, including who performed each action, when it happened, and any comments added. Also called an audit trail.

### Admin
A user role with full system access, including user management, directory management, and system settings configuration.

### Amount
The payment amount in Philippine Pesos (₱) specified in a disbursement voucher.

### Approval Progress
A visual representation (progress bar) showing how far a voucher has progressed through the approval workflow, including completed stages and current stage.

### Audit Trail
See **Activity Log**.

---

## B

### BAC (Bids and Awards Committee)
A committee that reviews procurement-related vouchers. BAC members must review GSO vouchers independently, with multiple members required (default: 3).

### Budget
A user role responsible for reviewing vouchers to verify budget allocation and fund availability before vouchers proceed to Accounting.

### Budget Review
The stage in the workflow where the Budget office verifies that funds are available and properly allocated for the disbursement.

---

## C

### Check Number
A unique identifier assigned to a check when Treasury issues payment. Entered during the Treasury "Check Issuance" step.

### Comments
Text added by reviewers during the review process to document findings, observations, or decisions. Stored in the activity log.

### Create Request
The page where users (Requesters, GSO, HR) create new disbursement vouchers.

---

## D

### Dashboard
The home page users see after logging in, showing statistics, pending items, and recent activity relevant to their role.

### Department Head
A user role with department-level approval authority for vouchers within their department.

### Directory
A collection of pre-configured entries used in voucher creation:
- **Payee Directory**: List of approved payees
- **Tag Directory**: Categories for GSO vouchers
- **Item Directory**: Items with default prices and units

### Disbursement Voucher
An official document authorizing payment from government funds. Contains payee information, payment amount, particulars, and approval signatures.

### Draft
A voucher status indicating the voucher has been created but not yet submitted for review. Draft vouchers can be edited.

---

## F

### Finance Head
A user role with financial oversight responsibilities, reviewing financial aspects of vouchers.

### Forwarded
The third stage in the review process, indicating a reviewer has completed their review and forwarded the voucher to the next department in the workflow.

---

## G

### GSO (General Services Office)
A user role responsible for creating procurement-related disbursement vouchers with multiple line items, tags, and source offices.

### GSO Workflow
The specialized workflow for procurement vouchers that includes BAC review: GSO → Secretary → Mayor → BAC → Budget → Accounting → Treasury.

---

## H

### HR (Human Resources)
A user role responsible for creating HR-related disbursement vouchers.

### HR Workflow
The workflow for HR vouchers: HR → Secretary → Mayor → Budget → Accounting → Treasury (no BAC review).

---

## I

### Item Directory
A directory of items used in GSO voucher creation, including default prices, units (piece, box, etc.), and item descriptions.

---

## M

### Mayor
A user role with executive approval authority, reviewing vouchers after Secretary review and routing them to appropriate departments.

### Multi-Reviewer System
The BAC review system where multiple committee members must review vouchers independently, with each member's actions tracked separately.

---

## N

### Notification
An alert sent to users when action is required on a voucher. Displayed in the notification bell (🔔) with a badge count.

### Notification Bell
The icon in the top navigation that displays notifications. Shows a red badge with the count of unread notifications.

---

## P

### Particulars
A required field in voucher creation describing what the payment is for. Should be specific and clear.

### Payee
The person or entity receiving payment. Selected from the Payee Directory or added via Quick Add.

### Payee Directory
A directory of approved payees that can be selected when creating vouchers, ensuring consistency and accuracy.

### Pending
A voucher status indicating the voucher has been submitted and is awaiting review in the workflow.

---

## R

### Received
The first stage in the review process, indicating a reviewer has acknowledged receipt of the voucher.

### Released
The final status of a voucher after Treasury has released payment. Also the final step in Treasury processing.

### Remarks
Optional comments added to vouchers during creation or review to provide additional context or information.

### Requester
A user role for department staff who create regular office disbursement vouchers (non-procurement, non-HR).

### Reviewed
The second stage in the review process, indicating a reviewer has completed their review of the voucher.

### Review Buttons
Buttons used by reviewers to progress through the three-stage review: Received, Reviewed, Forwarded.

---

## S

### Secretary
A user role responsible for initial review and routing of vouchers after they are created.

### Sequential Enforcement
The system requirement that each workflow stage must complete before the next stage can begin. Prevents skipping stages or working out of order.

### Source Office
For GSO vouchers, the office or department that is the source or origin of the procurement request.

### Standard Workflow
The workflow for regular office vouchers: Requester → Secretary → Mayor → Budget → Accounting → Treasury (no BAC review).

### Status
The current state of a voucher in the system:
- **DRAFT**: Created but not submitted
- **PENDING**: Submitted, awaiting review
- **VALIDATED**: Secretary completed review
- **APPROVED**: Mayor approved, in department reviews
- **RELEASED**: Treasury released payment
- **CANCELLED**: Cancelled by authorized user

### Status Badge
A visual indicator (colored badge) showing the current status of a voucher.

---

## T

### Tag
A category label used in GSO vouchers for organization and filtering. Selected from the Tag Directory.

### Tag Directory
A directory of tags used to categorize GSO vouchers.

### Three-Stage Process
The review process used by most reviewers: RECEIVED → REVIEWED → FORWARDED. Each stage must be completed in order.

### Three-Step Process
The Treasury processing method: Check Issuance → Available for Release → Released. Different from the three-stage review process.

### Treasury
A user role responsible for processing approved vouchers for payment, including check number issuance and payment release.

---

## U

### User Role
A designation that determines what a user can do in the system. There are 12 different roles: REQUESTER, GSO, HR, SECRETARY, MAYOR, BAC, BUDGET, ACCOUNTING, TREASURY, DEPARTMENT_HEAD, FINANCE_HEAD, ADMIN.

---

## V

### Validated
A voucher status indicating the Secretary has completed initial review and forwarded the voucher to Mayor.

### Voucher
See **Disbursement Voucher**.

### Voucher ID
A unique identifier assigned to each voucher. GSO vouchers can have custom IDs assigned during creation.

---

## W

### Workflow
The sequence of stages a voucher goes through from creation to payment release. There are three workflows: Standard, GSO, and HR.

### Workflow Stage
A step in the approval workflow where a specific department or role performs their review or action.

---

## Additional Terms

### Quick Add
A feature allowing users to add new entries (payees, items, tags) on the fly during voucher creation, without going to directory management.

### X out of Y Approvers
A status display for BAC review showing how many BAC members have completed review out of the total required (e.g., "2 out of 3 approvers").

---

:::info Need More Definitions?
If you encounter a term not defined here, check the role-specific tutorials or contact your system administrator.
:::

