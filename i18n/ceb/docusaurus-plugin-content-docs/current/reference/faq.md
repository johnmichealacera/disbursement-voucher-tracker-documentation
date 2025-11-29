---
sidebar_position: 2
title: Frequently Asked Questions (FAQ)
description: Common questions ug answers bahin sa Disbursement Voucher Tracker
tags: [reference, faq, help]
---

# Frequently Asked Questions (FAQ)

Pangitaa ang mga tubag sa common questions bahin sa paggamit sa Disbursement Voucher Tracker.

## General Questions

### Unsa ang Disbursement Voucher Tracker?

Ang Disbursement Voucher Tracker usa ka web-based system para sa paghimo, pag-review, pag-approve, ug pag-track sa disbursement vouchers sa municipal government operations. Kini nag-digitize sa paper-based voucher process ug naghatag og real-time tracking ug notifications.

### Kinsa ang makagamit sa sistema?

Ang sistema gidesinyo para sa municipal government employees uban sa lain-laing roles:
- Requesters (department staff)
- GSO ug HR staff
- Reviewers (Secretary, Mayor, Budget, Accounting)
- BAC members
- Treasury staff
- Administrators

### Kinahanglan ba og special software aron magamit?

Walay special software ang kinahanglan. Kinahanglan lang nimo:
- Web browser (Chrome, Firefox, Edge, o Safari)
- Internet connection
- Login credentials gikan sa imong administrator

### Secure ba ang akong data?

Oo. Ang sistema naggamit og secure encryption ug role-based access control. Ang authorized users lang ang makakita ug makamodify sa vouchers base sa ilang role ug permissions.

---

## Login ug Access

### Nakalimtan ko ang akong password. Unsa ang akong buhaton?

Kontak ang imong system administrator. Mahimo nila i-reset ang imong password ug maghatag kanimo og bag-ong login credentials.

### Dili ko makalog-in. Unsa ang problema?

Common issues:
- **Sayop nga username o password**: I-double-check ang imong credentials, siguroha nga off ang Caps Lock
- **Account inactive**: Kontak ang administrator—ang imong account mahimong kinahanglan og activation
- **Browser issue**: Sulayi ang lain nga browser o i-clear ang cache
- **Internet connection**: Check ang imong connection

### Makagamit ba ko sa sistema gikan sa balay?

Oo, kung ang imong organization nagtugot og remote access. Kinahanglan nimo ang internet connection ug ang imong login credentials. Check sa imong administrator bahin sa remote access policies.

### Nganong dili nako makita ang ubang menu options?

Ang menu options role-based. Makita nimo lang ang options available sa imong role. Normal kini ug nagsiguro nga makagamit ka lang sa features nga gina-authorize kanimo.

---

## Paghimo og Vouchers

### Makasave ba ko og voucher ug makompleto sa ulahi?

Oo! I-click ang **"Save as Draft"** aron ma-save ang imong trabaho. Mahimo nimo mobalik sa ulahi aron i-edit ug i-submit.

### Unsa ang kalainan sa "Save as Draft" ug "Submit for Review"?

- **Save as Draft**: Nag-save sa voucher pero wala magsugod sa approval process. Mahimo nimo i-edit sa ulahi.
- **Submit for Review**: Nagsugod sa approval workflow. Ang voucher mahimong PENDING ug dili nimo ma-edit (gawas kung gi-return).

### Makamodify ba ko og voucher human sa pag-submit?

Dili, kung na-submit na (PENDING status), dili nimo ma-edit. Kung kinahanglan og changes, mahimo nga kinahanglan nimo i-cancel (kung gitugot) ug himoa ang bag-ong voucher.

### Unsa kung nakahimo ko og sayop sa draft voucher?

Mahimo nimo i-edit ang draft vouchers bisan kanus-a. Ablihi ang voucher ug i-click ang **"Edit"** aron makahimo og changes.

### Giunsa nako pag-add og payee nga wala sa directory?

Kung makakita ka og **"Quick Add"** o **"Add New"** option, mahimo nimo i-add ang payees on the fly. Kung wala, kontak ang imong administrator aron i-add ang payee sa directory.

### Unsa ang information nga kinahanglan aron makahimo og voucher?

Required fields:
- Payee name (gikan sa directory)
- Payee address
- Particulars (payment description)
- Amount

Optional fields:
- Remarks
- Reference number

---

## Review ug Approval

### Giunsa nako mahibaloan kung adunay vouchers nga kinahanglan nako i-review?

Makadawat ka og notifications (bell icon 🔔) kung ang vouchers nanginahanglan sa imong review. Ang notifications auto-refresh matag 30 seconds.

### Unsa ang gipasabot sa RECEIVED, REVIEWED, ug FORWARDED?

Kini ang tulo ka stages sa review:
- **RECEIVED**: Ikaw nag-acknowledge sa pagdawat sa voucher
- **REVIEWED**: Ikaw nakompleto sa imong review
- **FORWARDED**: Ikaw nag-forward sa sunod nga departamento

Kinahanglan nimo kompletuhon ang tanan nga tulo sa order.

### Makalaktaw ba ko og stage?

Dili. Ang sistema nagkinahanglan nga kompletuhon nimo ang RECEIVED → REVIEWED → FORWARDED sa order. Kini nagsiguro sa proper tracking ug accountability.

### Nganong disabled ang akong review button?

Posible nga mga rason:
- Ang voucher wala pa moabot sa imong stage (wala pa makompleto ang previous stage)
- Ang voucher nakalabay na sa imong stage
- Ang voucher gi-cancel

Check ang approval progress bar aron makita ang current stage.

### Unsa ka dugay ang akong pag-review?

I-review dayon kung na-notify. Typical timeline:
- Secretary: 1-2 business days
- Mayor: 1-3 business days
- Budget/Accounting: 1-2 business days each

### Unsa ang akong isulat sa review comments?

Specific ug professional:
- ✅ "Verified payee information ug amount"
- ✅ "Budget allocation confirmed, funds available"
- ❌ Likayi ang vague comments sama sa "OK" o "Looks good"

---

## BAC Review

### Pila ka BAC members ang kinahanglan mag-review?

Default mao ang 3 ka BAC members, pero configurable kini sa administrator. Makita nimo ang "X out of Y approvers" status.

### Kinahanglan ba ko maghulat sa ubang BAC members?

Dili! Ang matag BAC member nag-review independently. Mahimo nimo kompletuhon ang imong review (RECEIVED → REVIEWED → FORWARDED) sa imong kaugalingong pace. Ang voucher mobalhin sa unahan human lang makompleto sa tanan nga required members.

### Makakita ba ko sa progress sa ubang BAC members?

Oo! Check ang approval progress bar ug activity log aron makita:
- Kinsa ang mga members nga nag-review na
- Ang ilang current stage
- Ang timestamps sa ilang mga aksyon

### Nganong GSO vouchers lang ang makita nako para sa BAC review?

Ang BAC review para lang sa procurement vouchers nga gihimo sa GSO. Ang regular office vouchers (gikan sa Requesters) ug HR vouchers dili moagi sa BAC.

---

## Treasury Processing

### Unsa ang kalainan sa Treasury ug ubang reviewers?

Ang Treasury naggamit og **three-step process** imbes sa three-stage review:
1. Check Number Issuance
2. Available for Release
3. Released

### Kanus-a ko mag-issue og check number?

I-issue ang check number kung andam ka na mag-prepare sa check. Kini ang unang lakang sa Treasury processing.

### Unsa kung wala pa nako ang check number?

Mahimo ka maghulat hangtod naa na ang check number sa dili pa i-click ang "Issue Check Number." Ang voucher magpabilin sa Treasury stage hangtod makompleto nimo ang mga steps.

### Makamark ba ko og voucher isip released sa dili pa gihatag ang check?

Dili. Mark lang isip **"Released"** kung gi-release na ang payment sa payee. Kini ang final step ug kinahanglan mag-reflect sa actual payment.

---

## Status ug Progress

### Unsa ang gipasabot sa status badges?

- **DRAFT**: Gihimo pero wala pa na-submit
- **PENDING**: Na-submit, naghulat sa review
- **VALIDATED**: Nakompleto sa Secretary ang review
- **APPROVED**: Gi-approve sa Mayor, anaa sa department reviews
- **RELEASED**: Gi-release sa Treasury ang payment
- **CANCELLED**: Gi-cancel sa authorized user

### Giunsa nako pag-check sa voucher progress?

Ablihi ang bisan unsa nga voucher ug tan-awa ang **Approval Progress** bar. Kini nagpakita:
- Current stage
- Completed stages
- Progress percentage
- Timestamps

### Nganong na-stuck ang akong voucher sa usa ka stage?

Posible nga mga rason:
- Ang reviewer wala pa makompleto sa tanan nga tulo ka stages
- Ang reviewer naa sa leave
- Technical issue

Check ang activity log aron makita ang last action, unya kontak ang departamento sa maong stage.

### Unsa ka dugay ang tibuok proseso?

Kasagaran 5-12 business days gikan sa submission hangtod sa release, depende sa:
- Department workload
- Urgency
- Approval requirements

---

## Notifications

### Unsa ka kanunay ang pag-update sa notifications?

Ang notifications auto-refresh matag 30 seconds. Mahimo usab nimo manually i-refresh pinaagi sa pag-click sa notification bell.

### Dili ko makadawat og notifications. Ngano?

Posible nga mga rason:
- Walay vouchers karon nga nanginahanglan sa imong aksyon
- Browser notification settings
- Account notification preferences

Sulayi ang pag-refresh sa notification bell o kontak ang administrator.

### Makapalikong ba ko sa notifications?

Ang notifications importante para sa workflow. Kung kinahanglan nimo i-adjust ang notification settings, kontak ang imong administrator.

---

## Technical Issues

### Dili ma-load ang page. Unsa ang akong buhaton?

1. Check ang imong internet connection
2. Sulayi ang pag-refresh sa page (F5 o Ctrl+R)
3. Clear ang browser cache
4. Sulayi ang lain nga browser
5. Kontak ang administrator kung nagpadayon ang issue

### Dili nag-function ang mga buttons. Unsa ang problema?

1. Check kung enabled ang button (dili grayed out)
2. I-verify nga ang voucher anaa sa imong stage
3. Sulayi ang pag-refresh sa page
4. Check ang browser console para sa errors
5. Kontak ang administrator kung kinahanglan

### Dili ma-load ang data. Unsa ang akong buhaton?

1. Check ang internet connection
2. I-refresh ang page
3. Clear ang browser cache
4. Sulayi ang lain nga browser
5. Kontak ang administrator

### Hinay ang sistema. Normal ba kini?

Ang system performance nagdepende sa:
- Internet connection speed
- Number sa users
- Server load

Kung kanunay hinay, kontak ang administrator.

---

## Admin Questions

### Giunsa nako pag-add og bag-ong user?

Isip admin, moadto sa **User Management**, i-click ang **"Create User"**, pun-i ang form uban sa role ug department, unya i-save.

### Giunsa nako pag-change sa BAC required approvals?

Moadto sa **System Settings**, pangitaa ang **"BAC Required Approvals"**, i-change ang number, ug i-save.

### Makadelete ba ko og user?

Oo, pero pag-amping. Ang sistema magpakita og safety checks sa dili pa deletion. Hunahunaa ang pag-deactivate imbes sa pag-delete.

### Giunsa nako pag-add og items sa directory?

Moadto sa **Directory Management** → **Items**, i-click ang **"Add Item"**, i-enter ang item details uban sa default price ug unit, unya i-save.

---

## Workflow Questions

### Unsa ang kalainan sa Standard, GSO, ug HR workflows?

- **Standard**: Regular office vouchers (Requester) → Walay BAC review
- **GSO**: Procurement vouchers → Apil ang BAC review
- **HR**: HR-related vouchers → Walay BAC review

### Makacancel ba ko og voucher?

Ang cancellation nagdepende sa:
- Voucher status
- Imong role
- System permissions

Ang Draft vouchers kasagaran makacancel. Ang Submitted vouchers mahimong kinahanglan og admin approval.

### Unsa ang mahitabo kung gi-reject ang voucher?

Kung gi-reject ang voucher (kung enabled kini nga feature), mahimo nga ma-return sa Requester o ma-cancel, depende sa system configuration.

---

## Aduna Pa Bay Pangutana?

Kung ang imong pangutana wala matubag dinhi:

1. Check ang [Troubleshooting Guide](./troubleshooting.md)
2. Review ang role-specific tutorials sa [Role-Based Guides](../roles/requester.md)
3. Kontak ang imong system administrator
4. Check sa imong department supervisor

:::info Need Immediate Help?
Kontak ang imong system administrator para sa urgent issues o mga pangutana nga wala sakop sa documentation.
:::

