---
sidebar_position: 4
title: Status Guide
description: Complete guide sa pag-sabot sa tanan nga voucher statuses ug ang ilang mga gipasabot
tags: [reference, status, workflow]
---

# Status Guide

Complete explanation sa tanan nga voucher statuses sa Disbursement Voucher Tracker, apil ang kanus-a sila mahitabo, unsa ang ilang gipasabot, ug unsa ang available nga mga aksyon.

## Status Overview

Ang mga vouchers nag-progress pinaagi sa lain-laing statuses samtang nag-agay sila sa approval workflow. Ang pag-sabot sa maong mga statuses makatabang kanimo nga mahibaloan kung asa ang imong voucher ug unsa ang mahitabo sunod.

## Status Types

### DRAFT

**Unsa ang gipasabot**: Ang voucher gihimo na pero wala pa na-submit para sa review.

**Kanus-a mahitabo**:
- Ang Requester, GSO, o HR user naghimo og voucher ug i-click ang "Save as Draft"
- Ang voucher na-save pero wala mosulod sa approval workflow

**Kinsa ang makakita**:
- Ang user nga naghimo niini
- Administrators

**Unsa ang available nga mga aksyon**:
- ✅ Ang creator makamodify sa voucher
- ✅ Ang creator makasubmit niini para sa review
- ✅ Ang creator makadelete/cancel niini (kung gitugot)
- ❌ Walay reviewers ang makakita pa
- ❌ Walay notifications ang gipadala

**Visual indicator**: Gray badge uban sa "DRAFT" text

**Sunod nga status**: PENDING (kung na-submit)

---

### PENDING

**Unsa ang gipasabot**: Ang voucher na-submit na ug naghulat sa initial review sa Secretary.

**Kanus-a mahitabo**:
- Ang Requester, GSO, o HR user i-click ang "Submit for Review"
- Ang voucher mosulod sa approval workflow
- Ang Secretary makadawat og notification

**Kinsa ang makakita**:
- Ang user nga naghimo niini
- Secretary (para sa review)
- Administrators
- Ang ubang roles mahimo makakita niini sa lists (depende sa permissions)

**Unsa ang available nga mga aksyon**:
- ✅ Ang Secretary makareview (Received → Reviewed → Forwarded)
- ❌ Ang creator dili makamodify (gawas kung gi-return)
- ❌ Ang ubang reviewers dili makabuhat pa

**Visual indicator**: Yellow/Orange badge uban sa "PENDING" text

**Sunod nga status**: VALIDATED (human sa Secretary makompleto sa review)

---

### VALIDATED

**Unsa ang gipasabot**: Ang Secretary nakompleto na sa initial review ug gi-forward ang voucher sa Mayor.

**Kanus-a mahitabo**:
- Ang Secretary nakompleto sa tanan nga tulo ka stages: RECEIVED → REVIEWED → FORWARDED
- Ang voucher mobalhin sa Mayor para sa approval

**Kinsa ang makakita**:
- Ang tanan nga users uban sa appropriate permissions
- Mayor (para sa approval)
- Original creator

**Unsa ang available nga mga aksyon**:
- ✅ Ang Mayor makap-approve (Received → Reviewed → Forwarded)
- ❌ Ang Secretary dili na makabuhat
- ❌ Ang creator dili makamodify

**Visual indicator**: Blue badge uban sa "VALIDATED" text

**Sunod nga status**: APPROVED (human sa Mayor mag-approve)

---

### APPROVED

**Unsa ang gipasabot**: Ang Mayor nag-approve na sa voucher ug nagpadayon sa department reviews (Budget, Accounting, o BAC para sa GSO vouchers).

**Kanus-a mahitabo**:
- Ang Mayor nakompleto sa tanan nga tulo ka stages: RECEIVED → REVIEWED → FORWARDED
- Ang voucher mobalhin sa sunod nga departamento (Budget para sa Standard/HR, BAC para sa GSO)

**Kinsa ang makakita**:
- Ang tanan nga users uban sa appropriate permissions
- Current reviewer (Budget, Accounting, BAC, o Treasury)
- Original creator

**Unsa ang available nga mga aksyon**:
- ✅ Ang current department reviewer makabuhat
- ✅ Ang Budget makareview (para sa Standard/HR workflows)
- ✅ Ang BAC makareview (para sa GSO workflow)
- ✅ Ang Accounting makareview (human sa Budget/BAC)
- ❌ Ang previous reviewers dili na makabuhat
- ❌ Ang creator dili makamodify

**Visual indicator**: Green badge uban sa "APPROVED" text

**Sunod nga status**: 
- Magpabilin nga APPROVED pinaagi sa department reviews
- Mausab ngadto sa RELEASED (human sa Treasury mag-release sa payment)

---

### RELEASED

**Unsa ang gipasabot**: Ang Treasury nag-release na sa payment. Ang voucher kompleto na.

**Kanus-a mahitabo**:
- Ang Treasury nakompleto sa tanan nga tulo ka steps: Check Issuance → Available → Released
- Ang payment nahimo na sa payee
- Ang workflow kompleto na

**Kinsa ang makakita**:
- Ang tanan nga users uban sa appropriate permissions
- Original creator
- Ang tanan nga reviewers

**Unsa ang available nga mga aksyon**:
- ✅ Makakita sa voucher details
- ✅ Makakita sa complete audit trail
- ❌ Walay dugang nga aksyon available
- ❌ Dili makamodify o ma-cancel

**Visual indicator**: Dark Green badge uban sa "RELEASED" text

**Sunod nga status**: Walay (final status)

---

### CANCELLED

**Unsa ang gipasabot**: Ang voucher gi-cancel na ug dili na moagi sa workflow.

**Kanus-a mahitabo**:
- Ang creator nag-cancel sa draft voucher
- Ang authorized user nag-cancel sa submitted voucher
- System cancellation (kung configured)

**Kinsa ang makakita**:
- Ang tanan nga users uban sa appropriate permissions
- Original creator
- Administrators

**Unsa ang available nga mga aksyon**:
- ✅ Makakita sa voucher details
- ✅ Makakita sa cancellation reason
- ❌ Dili makamodify
- ❌ Dili ma-reactivate
- ❌ Dili makapadayon sa workflow

**Visual indicator**: Red badge uban sa "CANCELLED" text

**Sunod nga status**: Walay (final status)

---

## Status Transitions

### Standard Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (mahimo mahitabo sa bisan unsa nga stage kung authorized)
```

### Detailed Transition Path

1. **DRAFT**
   - Gihimo sa Requester/GSO/HR
   - Mahimo i-edit
   - Mahimo i-submit → **PENDING**

2. **PENDING**
   - Na-submit para sa review
   - Ang Secretary nag-review → **VALIDATED**

3. **VALIDATED**
   - Ang Secretary nakompleto sa review
   - Ang Mayor nag-approve → **APPROVED**

4. **APPROVED**
   - Gi-approve sa Mayor
   - Ang Budget nag-review → **APPROVED** (ang status magpabilin)
   - Ang Accounting nag-review → **APPROVED** (ang status magpabilin)
   - Ang Treasury nag-process → **RELEASED**

5. **RELEASED**
   - Gi-release ang payment
   - Final status

### GSO Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (mahimo mahitabo sa bisan unsa nga stage kung authorized)
```

**Kalainan**: Human sa APPROVED, ang voucher moagi sa BAC review sa dili pa Budget, pero ang status magpabilin nga APPROVED.

### HR Workflow Status Flow

```
DRAFT → PENDING → VALIDATED → APPROVED → RELEASED
  ↓
CANCELLED (mahimo mahitabo sa bisan unsa nga stage kung authorized)
```

**Susama sa Standard**: Walay BAC review, moagi diretso sa Budget human sa Mayor approval.

---

## Pag-Sabot sa Status sa Context

### Para sa Requesters

**Ang imong vouchers magpakita**:
- **DRAFT**: Mahimo pa nimo i-edit
- **PENDING**: Naghulat sa Secretary
- **VALIDATED**: Gi-review sa Secretary, uban sa Mayor
- **APPROVED**: Anaa sa department reviews
- **RELEASED**: Nahimo na ang payment
- **CANCELLED**: Gi-cancel ang voucher

**Unsa ang mahimo nimo**:
- I-edit ang DRAFT vouchers
- Tan-awa ang tanan nga imong vouchers
- Track ang progress
- Dili makamodify human sa PENDING

### Para sa Reviewers

**Ang vouchers nga makita nimo mahimong**:
- **PENDING**: Kung ikaw ang Secretary
- **VALIDATED**: Kung ikaw ang Mayor
- **APPROVED**: Kung ikaw ang Budget, Accounting, BAC, o Treasury

**Unsa ang mahimo nimo**:
- I-review ang vouchers sa imong stage
- I-add ang comments
- I-forward sa sunod nga departamento
- Dili makareview sa vouchers nga wala sa imong stage

### Para sa Administrators

**Makita nimo**:
- Ang tanan nga statuses
- Ang tanan nga vouchers
- Complete audit trails
- System-wide statistics

**Unsa ang mahimo nimo**:
- Tan-awa ang bisan unsa nga voucher
- Monitor ang system status
- Manage ang users ug settings
- Dili makamodify sa vouchers (gawas kung reviewer usab)

---

## Status Badge Colors

Ang status badges naggamit og color coding para sa quick identification:

- **Gray**: DRAFT (wala pa na-submit)
- **Yellow/Orange**: PENDING (naghulat sa initial review)
- **Blue**: VALIDATED (gi-review sa Secretary)
- **Green**: APPROVED (gi-approve sa Mayor, anaa sa reviews)
- **Dark Green**: RELEASED (nahimo na ang payment)
- **Red**: CANCELLED (gi-cancel ang voucher)

---

## Common Status Questions

### "Nganong PENDING pa gihapon ang akong voucher?"

**Posible nga mga rason**:
- Ang Secretary wala pa mag-review
- Ang Secretary naa sa leave
- Daghan ang vouchers
- System issue

**Unsa ang buhaton**:
- Check ang approval progress
- Kontak ang Secretary's office
- Maghulat sa notification
- Kontak ang administrator kung na-stuck

### "Unsa ang kalainan sa VALIDATED ug APPROVED?"

- **VALIDATED**: Nakompleto sa Secretary ang review, uban sa Mayor
- **APPROVED**: Gi-approve sa Mayor, anaa sa department reviews (Budget, Accounting, ug uban pa)

### "Makamodify ba ang RELEASED voucher?"

Dili. Kung RELEASED na, ang voucher final na. Ang payment nahimo na ug ang workflow kompleto na.

### "Nganong APPROVED ang akong voucher pero wala pa mobalhin?"

**Posible nga mga rason**:
- Anaa pa sa department reviews (Budget, Accounting)
- Naghulat sa BAC review (GSO vouchers)
- Naghulat sa Treasury processing
- Check ang approval progress bar para sa current stage

### "Makacancel ba ko og APPROVED voucher?"

Ang cancellation nagdepende sa:
- Imong role ug permissions
- System configuration
- Voucher stage
- Kontak ang administrator para sa cancellation

---

## Status ug Workflow Stages

### Status vs. Current Stage

Ang **Status** mao ang overall state (DRAFT, PENDING, APPROVED, ug uban pa)

Ang **Current Stage** mao ang dapit sa voucher sa workflow (Secretary, Mayor, Budget, ug uban pa)

Ang voucher mahimo nga **APPROVED** status pero sa lain-laing stages:
- APPROVED sa Budget stage
- APPROVED sa Accounting stage
- APPROVED sa Treasury stage

Check ang **Approval Progress** bar aron makita ang current stage.

---

## Best Practices

### Para sa Requesters

1. ✅ Check ang status kanunay
2. ✅ Sabta kung unsa ang gipasabot sa matag status
3. ✅ Monitor ang progress pinaagi sa approval progress bar
4. ✅ Ayaw kabalaka kung ang status magpabilin nga APPROVED—check ang current stage

### Para sa Reviewers

1. ✅ Magbuhat dayon kung ang vouchers moabot sa imong stage
2. ✅ Sabta nga ang status dili kanunay mausab (APPROVED pinaagi sa daghang stages)
3. ✅ Check ang approval progress aron makita ang current stage
4. ✅ Kompletuhon ang tanan nga tulo ka stages aron mobalhin ang voucher

### Para sa Tanan nga Users

1. ✅ Gamit ang status badges para sa quick identification
2. ✅ Check ang approval progress para sa detailed stage information
3. ✅ Review ang activity log para sa complete history
4. ✅ Sabta nga ang status lahi sa current stage

---

## Unsa ang Sunod?

Karon nga nasabtan mo na ang statuses:

1. **[Workflow Guides](../workflows/standard.md)** - Tan-awa kung giunsa mausab ang statuses sa workflows
2. **[Approval Progress Guide](../features/approval-progress.md)** - Sabta ang progress tracking
3. **[Activity Log Guide](../features/activity-log.md)** - Tan-awa ang status changes sa audit trail
4. **[FAQ](./faq.md)** - Common questions bahin sa statuses

:::tip Status Tracking
Gamita ang approval progress bar aron makita dili lang ang status, pero ang current stage ug completion percentage.
:::

:::info Questions?
Kung dili ka sigurado bahin sa status sa voucher:
- Check ang approval progress bar
- Review ang activity log
- Kontak ang current reviewer
- Pangutana sa imong system administrator
:::

