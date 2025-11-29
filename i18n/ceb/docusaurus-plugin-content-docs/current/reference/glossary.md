---
sidebar_position: 1
title: Glossary of Terms
description: Definitions sa key terms nga gigamit sa Disbursement Voucher Tracker
tags: [reference, glossary, definitions]
---

# Glossary of Terms

Definitions sa key terms ug concepts nga gigamit sa Disbursement Voucher Tracker system.

## A

### Activity Log
Usa ka chronological record sa tanan nga aksyon nga gihimo sa voucher, apil ang kinsa ang nag-perform sa matag aksyon, kanus-a nahitabo, ug bisan unsa nga comments nga gi-add. Gitawag usab og audit trail.

### Admin
Usa ka user role uban sa full system access, apil ang user management, directory management, ug system settings configuration.

### Amount
Ang payment amount sa Philippine Pesos (₱) nga gispecify sa disbursement voucher.

### Approval Progress
Usa ka visual representation (progress bar) nga nagpakita kung unsa ka layo ang voucher nag-progress pinaagi sa approval workflow, apil ang completed stages ug current stage.

### Audit Trail
Tan-awa ang **Activity Log**.

---

## B

### BAC (Bids and Awards Committee)
Usa ka committee nga nag-review sa procurement-related vouchers. Ang BAC members kinahanglan mag-review sa GSO vouchers independently, uban sa daghang members nga required (default: 3).

### Budget
Usa ka user role nga responsable sa pag-review sa vouchers aron ma-verify ang budget allocation ug fund availability sa dili pa moagi ang vouchers sa Accounting.

### Budget Review
Ang stage sa workflow diin ang Budget office nag-verify nga available ang funds ug properly allocated para sa disbursement.

---

## C

### Check Number
Usa ka unique identifier nga gi-assign sa check kung ang Treasury nag-issue og payment. Gi-enter during sa Treasury "Check Issuance" step.

### Comments
Text nga gi-add sa reviewers during sa review process aron ma-document ang findings, observations, o decisions. Gi-store sa activity log.

### Create Request
Ang page diin ang users (Requesters, GSO, HR) naghimo og bag-ong disbursement vouchers.

---

## D

### Dashboard
Ang home page nga makita sa users human sa pag-login, nagpakita sa statistics, pending items, ug recent activity relevant sa ilang role.

### Department Head
Usa ka user role uban sa department-level approval authority para sa vouchers sulod sa ilang department.

### Directory
Usa ka collection sa pre-configured entries nga gigamit sa voucher creation:
- **Payee Directory**: Lista sa approved payees
- **Tag Directory**: Categories para sa GSO vouchers
- **Item Directory**: Items uban sa default prices ug units

### Disbursement Voucher
Usa ka opisyal nga dokumento nga nag-authorize sa payment gikan sa gobyerno nga pondo. Naglangkob sa payee information, payment amount, particulars, ug approval signatures.

### Draft
Usa ka voucher status nga nag-indicate nga ang voucher gihimo na pero wala pa na-submit para sa review. Ang Draft vouchers mahimo i-edit.

---

## F

### Finance Head
Usa ka user role uban sa financial oversight responsibilities, nag-review sa financial aspects sa vouchers.

### Forwarded
Ang ikatulong stage sa review process, nag-indicate nga ang reviewer nakompleto na sa ilang review ug gi-forward ang voucher sa sunod nga departamento sa workflow.

---

## G

### GSO (General Services Office)
Usa ka user role nga responsable sa paghimo og procurement-related disbursement vouchers uban sa multiple line items, tags, ug source offices.

### GSO Workflow
Ang specialized workflow para sa procurement vouchers nga naglangkob sa BAC review: GSO → Secretary → Mayor → BAC → Budget → Accounting → Treasury.

---

## H

### HR (Human Resources)
Usa ka user role nga responsable sa paghimo og HR-related disbursement vouchers.

### HR Workflow
Ang workflow para sa HR vouchers: HR → Secretary → Mayor → Budget → Accounting → Treasury (walay BAC review).

---

## I

### Item Directory
Usa ka directory sa items nga gigamit sa GSO voucher creation, apil ang default prices, units (piece, box, ug uban pa), ug item descriptions.

---

## M

### Mayor
Usa ka user role uban sa executive approval authority, nag-review sa vouchers human sa Secretary review ug nag-route kanila sa appropriate departments.

### Multi-Reviewer System
Ang BAC review system diin daghang committee members ang kinahanglan mag-review sa vouchers independently, uban sa matag member's actions nga tracked separately.

---

## N

### Notification
Usa ka alert nga gipadala sa users kung kinahanglan ang aksyon sa voucher. Gipakita sa notification bell (🔔) uban sa badge count.

### Notification Bell
Ang icon sa top navigation nga nagpakita sa notifications. Nagpakita og red badge uban sa count sa unread notifications.

---

## P

### Particulars
Usa ka required field sa voucher creation nga nag-describe kung para sa unsa ang payment. Kinahanglan specific ug clear.

### Payee
Ang tawo o entity nga makadawat sa payment. Gipili gikan sa Payee Directory o gi-add pinaagi sa Quick Add.

### Payee Directory
Usa ka directory sa approved payees nga mahimo pilion kung naghimo og vouchers, nagsiguro sa consistency ug accuracy.

### Pending
Usa ka voucher status nga nag-indicate nga ang voucher na-submit na ug naghulat sa review sa workflow.

---

## R

### Received
Ang unang stage sa review process, nag-indicate nga ang reviewer nag-acknowledge na sa pagdawat sa voucher.

### Released
Ang final status sa voucher human sa Treasury nag-release sa payment. Mao usab ang final step sa Treasury processing.

### Remarks
Optional comments nga gi-add sa vouchers during sa creation o review aron maghatag og additional context o information.

### Requester
Usa ka user role para sa department staff nga naghimo og regular office disbursement vouchers (non-procurement, non-HR).

### Reviewed
Ang ikaduhang stage sa review process, nag-indicate nga ang reviewer nakompleto na sa ilang review sa voucher.

### Review Buttons
Mga buttons nga gigamit sa reviewers aron mag-progress pinaagi sa three-stage review: Received, Reviewed, Forwarded.

---

## S

### Secretary
Usa ka user role nga responsable sa initial review ug routing sa vouchers human sila gihimo.

### Sequential Enforcement
Ang system requirement nga ang matag workflow stage kinahanglan makompleto sa dili pa magsugod ang sunod nga stage. Naglikay sa pag-skip sa stages o pagtrabaho out of order.

### Source Office
Para sa GSO vouchers, ang office o departamento nga mao ang source o origin sa procurement request.

### Standard Workflow
Ang workflow para sa regular office vouchers: Requester → Secretary → Mayor → Budget → Accounting → Treasury (walay BAC review).

### Status
Ang current state sa voucher sa sistema:
- **DRAFT**: Gihimo pero wala na-submit
- **PENDING**: Na-submit, naghulat sa review
- **VALIDATED**: Nakompleto sa Secretary ang review
- **APPROVED**: Gi-approve sa Mayor, anaa sa department reviews
- **RELEASED**: Gi-release sa Treasury ang payment
- **CANCELLED**: Gi-cancel sa authorized user

### Status Badge
Usa ka visual indicator (colored badge) nga nagpakita sa current status sa voucher.

---

## T

### Tag
Usa ka category label nga gigamit sa GSO vouchers para sa organization ug filtering. Gipili gikan sa Tag Directory.

### Tag Directory
Usa ka directory sa tags nga gigamit aron ma-categorize ang GSO vouchers.

### Three-Stage Process
Ang review process nga gigamit sa kadaghanan sa reviewers: RECEIVED → REVIEWED → FORWARDED. Ang matag stage kinahanglan makompleto sa order.

### Three-Step Process
Ang Treasury processing method: Check Issuance → Available for Release → Released. Lahi sa three-stage review process.

### Treasury
Usa ka user role nga responsable sa pag-process sa approved vouchers para sa payment, apil ang check number issuance ug payment release.

---

## U

### User Role
Usa ka designation nga nag-determine kung unsa ang mahimo sa user sa sistema. Adunay 12 ka lain-laing roles: REQUESTER, GSO, HR, SECRETARY, MAYOR, BAC, BUDGET, ACCOUNTING, TREASURY, DEPARTMENT_HEAD, FINANCE_HEAD, ADMIN.

---

## V

### Validated
Usa ka voucher status nga nag-indicate nga ang Secretary nakompleto na sa initial review ug gi-forward ang voucher sa Mayor.

### Voucher
Tan-awa ang **Disbursement Voucher**.

### Voucher ID
Usa ka unique identifier nga gi-assign sa matag voucher. Ang GSO vouchers mahimo adunay custom IDs nga gi-assign during sa creation.

---

## W

### Workflow
Ang sequence sa stages nga moagi ang voucher gikan sa creation hangtod sa payment release. Adunay tulo ka workflows: Standard, GSO, ug HR.

### Workflow Stage
Usa ka step sa approval workflow diin ang specific department o role nag-perform sa ilang review o aksyon.

---

## Additional Terms

### Quick Add
Usa ka feature nga nagtugot sa users aron mag-add og bag-ong entries (payees, items, tags) on the fly during sa voucher creation, walay pag-adto sa directory management.

### X out of Y Approvers
Usa ka status display para sa BAC review nga nagpakita kung pila ka BAC members ang nakompleto na sa review gikan sa total required (pananglitan, "2 out of 3 approvers").

---

:::info Need More Definitions?
Kung makasinati ka og term nga wala gi-define dinhi, check ang role-specific tutorials o kontak ang imong system administrator.
:::

