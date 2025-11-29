---
sidebar_position: 1
title: Standard Workflow Guide
description: Complete step-by-step guide para sa standard (non-GSO, non-HR) disbursement workflow
tags: [workflows, standard, requester]
---

# Standard Workflow Guide

Ang **Standard Workflow** gigamit para sa regular office disbursements nga gihimo sa Requesters. Kining giya mag-walk through sa matag stage sa kompleto nga workflow gikan sa creation hangtod sa payment release.

## Workflow Overview

Ang Standard Workflow nagsunod sa maong sequence:

1. **Requester** naghimo og voucher → DRAFT o PENDING
2. **Secretary** Review: RECEIVED → REVIEWED → FORWARDED
3. **Mayor** Approval: RECEIVED → REVIEWED → FORWARDED
4. **Budget** Review: RECEIVED → REVIEWED → FORWARDED
5. **Accounting** Review: RECEIVED → REVIEWED → FORWARDED
6. **Treasury** Processing: Check Issuance → Available → Released

:::info Sequential Enforcement
Ang matag stage kinahanglan makompleto sa dili pa magsugod ang sunod. Ang sistema nag-enforce niini automatically—dili nimo ma-skip ang stages o magtrabaho out of order.
:::

## Stage 1: Requester Naghimo og Voucher

### Unsa ang Mahitabo

1. Ang **Requester** naglog-in sa sistema
2. Moadto sa **"Create Request"** page
3. Nagpuno sa voucher form:
   - Payee name ug address
   - Particulars (payment description)
   - Amount (sa Philippine Pesos)
   - Optional remarks
4. Nagpili:
   - **Save as Draft**: Ang voucher magpabilin sa DRAFT status, mahimo i-edit
   - **Submit for Review**: Ang voucher mahimong PENDING, mosulod sa workflow

### Status Human sa Creation

- **DRAFT**: Kung na-save isip draft (wala na-submit)
- **PENDING**: Kung na-submit para sa review

### Unsa ang Mahitabo Sunod

- Kung **DRAFT**: Ang voucher maghulat hangtod i-submit sa Requester
- Kung **PENDING**: Ang Secretary makadawat og notification

### Key Points

- ✅ Ang Requester makamodify sa DRAFT vouchers
- ✅ Kung PENDING na, ang Requester dili makamodify
- ✅ Ang Secretary automatically ma-notify kung na-submit ang voucher

---

## Stage 2: Secretary Review

### Unsa ang Mahitabo

1. Ang **Secretary** makadawat og notification para sa bag-ong voucher
2. Nag-abli sa voucher ug nag-review:
   - Payee information
   - Payment details
   - Amount ug particulars
   - Supporting documentation (kung aduna)
3. Nakompleto sa three-stage process:

#### Step 2.1: RECEIVED

- Ang Secretary i-click ang **"Received"** button
- Nag-acknowledge sa pagdawat sa voucher
- Optionally nag-add og comment: "Received for initial review"
- Ang aksyon na-record uban sa timestamp

#### Step 2.2: REVIEWED

- Ang Secretary i-click ang **"Reviewed"** button
- Nakompleto sa review sa voucher details
- Nag-add og review comments (recommended):
  - "Verified payee information"
  - "Amount ug particulars confirmed"
  - Bisan unsa nga concerns o observations
- Ang aksyon na-record uban sa timestamp

#### Step 2.3: FORWARDED

- Ang Secretary i-click ang **"Forwarded"** button
- Nag-forward sa voucher sa Mayor para sa approval
- Optionally nag-add og forwarding comment
- Ang aksyon na-record uban sa timestamp

### Status Human sa Secretary Review

- **VALIDATED**: Human sa Secretary makompleto sa tanan nga tulo ka stages
- Ang voucher mobalhin sa Mayor stage

### Unsa ang Mahitabo Sunod

- Ang Mayor makadawat og notification
- Ang voucher makita sa Mayor's pending approvals list

### Key Points

- ✅ Ang Secretary kinahanglan makompleto sa tanan nga tulo ka stages sa order
- ✅ Ang comments recommended para sa audit trail
- ✅ Ang voucher dili makapadayon hangtod i-forward sa Secretary

---

## Stage 3: Mayor Approval

### Unsa ang Mahitabo

1. Ang **Mayor** makadawat og notification para sa Secretary-reviewed voucher
2. Nag-abli sa voucher ug nag-review:
   - Ang tanan nga previous review information
   - Secretary's comments
   - Voucher details
3. Nakompleto sa three-stage approval:

#### Step 3.1: RECEIVED

- Ang Mayor i-click ang **"Received"** button
- Nag-acknowledge sa pagdawat gikan sa Secretary
- Ang aksyon na-record uban sa timestamp

#### Step 3.2: REVIEWED

- Ang Mayor i-click ang **"Reviewed"** button
- Nakompleto sa executive review
- Nag-add og approval comments:
  - "Reviewed ug verified"
  - "Approved para sa budget review"
  - Bisan unsa nga executive notes
- Ang aksyon na-record uban sa timestamp

#### Step 3.3: FORWARDED

- Ang Mayor i-click ang **"Forwarded"** button
- Nag-forward sa Budget office
- Ang aksyon na-record uban sa timestamp

### Status Human sa Mayor Approval

- **APPROVED**: Human sa Mayor makompleto sa tanan nga tulo ka stages
- Ang voucher mobalhin sa Budget stage

### Unsa ang Mahitabo Sunod

- Ang Budget office makadawat og notification
- Ang voucher makita sa Budget's pending reviews

### Key Points

- ✅ Ang Mayor adunay executive approval authority
- ✅ Para sa Standard workflow, ang voucher moagi diretso sa Budget (walay BAC)
- ✅ Ang Mayor's approval kinahanglan sa dili pa Budget review

---

## Stage 4: Budget Review

### Unsa ang Mahitabo

1. Ang **Budget** office makadawat og notification
2. Nag-abli sa voucher ug nag-review:
   - Budget allocation availability
   - Fund source verification
   - Budget compliance
3. Nakompleto sa three-stage review:

#### Step 4.1: RECEIVED

- Ang Budget staff i-click ang **"Received"** button
- Nag-acknowledge sa pagdawat
- Ang aksyon na-record uban sa timestamp

#### Step 4.2: REVIEWED

- Ang Budget staff i-click ang **"Reviewed"** button
- Nag-verify sa budget allocation
- Nag-add og budget comments:
  - "Funds available sa budget"
  - "Budget allocation verified"
  - Bisan unsa nga budget-related notes
- Ang aksyon na-record uban sa timestamp

#### Step 4.3: FORWARDED

- Ang Budget staff i-click ang **"Forwarded"** button
- Nag-forward sa Accounting
- Ang aksyon na-record uban sa timestamp

### Status Human sa Budget Review

- Ang voucher magpabilin sa **APPROVED** status
- Mobalhin sa Accounting stage

### Unsa ang Mahitabo Sunod

- Ang Accounting makadawat og notification
- Ang voucher makita sa Accounting's pending reviews

### Key Points

- ✅ Ang Budget nag-verify sa fund availability
- ✅ Kinahanglan i-confirm ang budget allocation sa dili pa magpadayon
- ✅ Ang voucher dili makapadayon kung kulang ang budget

---

## Stage 5: Accounting Review

### Unsa ang Mahitabo

1. Ang **Accounting** makadawat og notification
2. Nag-abli sa voucher ug nag-review:
   - Financial accuracy
   - Accounting compliance
   - Documentation completeness
3. Nakompleto sa three-stage review:

#### Step 5.1: RECEIVED

- Ang Accounting staff i-click ang **"Received"** button
- Nag-acknowledge sa pagdawat
- Ang aksyon na-record uban sa timestamp

#### Step 5.2: REVIEWED

- Ang Accounting staff i-click ang **"Reviewed"** button
- Nag-perform sa financial validation
- Nag-add og accounting comments:
  - "Financial information verified"
  - "Accounting compliance confirmed"
  - Bisan unsa nga accounting notes
- Ang aksyon na-record uban sa timestamp

#### Step 5.3: FORWARDED

- Ang Accounting staff i-click ang **"Forwarded"** button
- Nag-forward sa Treasury
- Ang aksyon na-record uban sa timestamp

### Status Human sa Accounting Review

- Ang voucher magpabilin sa **APPROVED** status
- Mobalhin sa Treasury stage

### Unsa ang Mahitabo Sunod

- Ang Treasury makadawat og notification
- Ang voucher makita sa Treasury's pending actions

### Key Points

- ✅ Ang Accounting nag-perform sa final financial validation
- ✅ Nagsiguro nga ang tanan nga financial requirements natagbo
- ✅ Last review stage sa dili pa payment processing

---

## Stage 6: Treasury Processing

### Unsa ang Mahitabo

Ang Treasury adunay **three-step process** (lahi sa three-stage review):

1. **Check Number Issuance**
2. **Available for Release**
3. **Released**

### Step 6.1: Check Number Issuance

1. Ang **Treasury** makadawat og notification
2. Nag-abli sa voucher
3. I-click ang **"Issue Check Number"** o **"Check Issuance"** button
4. Nag-enter sa check number:
   - Format: Sumala sa imong organization's check numbering system
   - Pananglitan: "CHK-2024-001234"
5. Nag-save sa check number
6. Ang aksyon na-record uban sa timestamp

### Step 6.2: Available for Release

1. Human sa check number gi-issue
2. Ang Treasury i-click ang **"Mark as Available"** o **"Available for Release"** button
3. Optionally nag-enter:
   - Release date
   - Recipient information
4. Ang aksyon na-record uban sa timestamp

### Step 6.3: Released

1. Kung gi-release na ang payment
2. Ang Treasury i-click ang **"Mark as Released"** o **"Released"** button
3. Nag-enter sa final release information:
   - Actual release date
   - Payment method (CASH, CHECK, E_TRANSFER)
   - Recipient confirmation
4. Ang aksyon na-record uban sa timestamp

### Status Human sa Treasury Processing

- **RELEASED**: Final status human sa payment gi-release
- Ang voucher kompleto na

### Unsa ang Mahitabo Sunod

- Ang Requester makadawat og notification nga gi-release na ang payment
- Ang voucher makita sa "Released" status para sa tanan nga users
- Ang proseso kompleto na

### Key Points

- ✅ Ang Treasury process lahi sa review stages
- ✅ Tulo ka distinct steps: Check Issuance → Available → Released
- ✅ Ang final step nakompleto sa tibuok workflow

---

## Pag-Sabot sa Sequential Enforcement

### Nganong Sequential?

Ang sistema nag-enforce sa sequential workflow aron masiguro:
- **Proper authorization**: Ang matag level kinahanglan mag-approve sa dili pa ang sunod
- **Compliance**: Walay stages ang mahimo ma-skip
- **Accountability**: Clear chain sa responsibility
- **Audit trail**: Kompleto nga record sa tanan nga aksyon

### Unsa ang Gipasabot Kini Para Kanimo

- ✅ Makabuhat ka lang kung ikaw na ang turn
- ✅ Makakita ka og "Awaiting previous review" kung ang voucher wala pa sa imong stage
- ✅ Makadawat ka og notifications kung moabot ang voucher sa imong stage
- ✅ Dili nimo ma-skip ang stages o magtrabaho ahead

### Button States

- **Enabled**: Ang voucher anaa sa imong stage, available ang aksyon
- **Disabled**: Ang voucher wala pa moabot sa imong stage, o nakalabay na
- **"Awaiting Previous Review"**: Wala pa makompleto ang previous stage

---

## Pagtan-aw sa Progress

### Approval Progress Bar

Ang matag voucher adunay progress bar nga nagpakita:
- **Current stage**: Kinsa ang departamento nga nag-review karon
- **Completed stages**: Green checkmarks para sa completed stages
- **Pending stages**: Gray indicators para sa upcoming stages
- **Progress percentage**: Unsa ka layo sa workflow
- **Timestamps**: Kanus-a nakompleto ang matag stage

### Activity Log

Ang activity log nagpakita:
- Ang tanan nga aksyon nga gihimo sa voucher
- Kinsa ang nag-perform sa matag aksyon
- Kanus-a nahitabo
- Comments nga gi-add sa matag stage

### Status Badges

Ang voucher status mausab sa tibuok workflow:
- **DRAFT**: Gihimo pero wala na-submit
- **PENDING**: Na-submit, naghulat sa Secretary
- **VALIDATED**: Nakompleto sa Secretary ang review
- **APPROVED**: Gi-approve sa Mayor, anaa sa department reviews
- **RELEASED**: Gi-release sa Treasury ang payment

---

## Timeline Expectations

### Typical Timeline

- **Requester Creation**: Immediate (kung na-submit)
- **Secretary Review**: 1-2 business days
- **Mayor Approval**: 1-3 business days
- **Budget Review**: 1-2 business days
- **Accounting Review**: 1-2 business days
- **Treasury Processing**: 1-3 business days

**Total**: Mga 5-12 business days gikan sa submission hangtod sa release

:::info Actual Timeline
Ang timeline nagkalain-lain base sa:
- Volume sa vouchers
- Urgency sa payment
- Department workload
- Approval requirements
:::

---

## Common Workflow Issues

### Issue: Na-Stuck ang Voucher sa Usa ka Stage

**Posible nga mga hinungdan**:
- Ang reviewer wala pa makompleto sa tanan nga tulo ka stages
- Ang reviewer naa sa leave
- Technical issue

**Solution**:
- Check ang activity log aron makita ang last action
- Kontak ang departamento sa maong stage
- Kontak ang administrator kung kinahanglan

### Issue: Dili Makita ang Next Button

**Posible nga mga hinungdan**:
- Wala pa makompleto ang previous stage
- Ang voucher anaa sa sayop nga stage
- Technical issue

**Solution**:
- Check ang approval progress bar
- I-verify nga nakompleto na ang previous stage
- I-refresh ang page
- Kontak ang administrator kung nagpadayon ang issue

### Issue: Dili Makadawat og Notification

**Posible nga mga hinungdan**:
- Notification system delay (auto-refreshes matag 30 seconds)
- Browser notification settings
- Account issue

**Solution**:
- Maghulat og 30 seconds para sa auto-refresh
- Manually i-refresh ang notifications
- Check ang notification bell badge
- Kontak ang administrator kung kinahanglan

---

## Best Practices

### Para sa Requesters

1. ✅ Pun-i ang tanan nga information completely
2. ✅ Specific sa particulars
3. ✅ I-double-check ang amounts sa dili pa i-submit
4. ✅ Monitor ang voucher progress

### Para sa Reviewers

1. ✅ I-review dayon kung na-notify
2. ✅ Kompletuhon ang tanan nga tulo ka stages sa order
3. ✅ I-add ang meaningful comments
4. ✅ I-forward dayon human sa review

### Para sa Treasury

1. ✅ I-issue ang check numbers accurately
2. ✅ I-mark available kung andam na
3. ✅ I-record ang release information completely
4. ✅ I-update ang status dayon

---

## Unsa ang Sunod?

Karon nga nasabtan mo na ang Standard Workflow:

1. **[GSO Workflow Guide](./gso.md)** - Pagkat-on bahin sa GSO workflow uban sa BAC review
2. **[HR Workflow Guide](./hr.md)** - Sabta ang HR-specific workflow
3. **[Approval Progress Guide](../features/approval-progress.md)** - Detailed progress tracking
4. **[Activity Log Guide](../features/activity-log.md)** - Pag-sabot sa audit trails

:::tip Practice
Sundon ang voucher pinaagi sa kompleto nga workflow aron makakita kung giunsa nag-function ang matag stage sa practice.
:::

:::info Questions?
- Check ang [FAQ](../reference/faq.md)
- Review ang [Troubleshooting Guide](../reference/troubleshooting.md)
- Kontak ang imong system administrator
:::

