---
sidebar_position: 3
title: Troubleshooting Guide
description: Solutions sa common issues ug problems sa Disbursement Voucher Tracker
tags: [reference, troubleshooting, help]
---

# Troubleshooting Guide

Solutions sa common issues nga mahimo nimo makasinati samtang nagagamit sa Disbursement Voucher Tracker.

## Login Problems

### Issue: Dili Makalog-In

**Symptoms**:
- Error message: "Invalid username or password"
- Ang page dili ma-load human sa pag-enter sa credentials
- Gi-redirect balik sa login page

**Solutions**:

1. **Check ang Imong Credentials**
   - I-verify nga tama ang username (case-sensitive)
   - I-verify nga tama ang password (case-sensitive)
   - Siguroha nga wala enabled ang Caps Lock
   - Check para sa extra spaces sa wala/tuya sa username o password

2. **Clear ang Browser Cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data
   - Edge: Settings → Privacy → Clear browsing data
   - Sulayi ang pag-login pag-usab

3. **Sulayi ang Lain nga Browser**
   - Kung naggamit ka og Chrome, sulayi ang Firefox o Edge
   - Kung naggamit ka og Firefox, sulayi ang Chrome o Edge
   - Kini makatabang aron ma-identify ang browser-specific issues

4. **Check ang Internet Connection**
   - I-verify nga adunay ka internet access
   - Sulayi ang pag-access sa ubang websites
   - Check kung nag-function ang network sa imong organization

5. **Kontak ang Administrator**
   - Ang imong account mahimong inactive
   - Ang password mahimong kinahanglan i-reset
   - Ang account mahimong na-lock

---

### Issue: "Account is Inactive" Error

**Symptoms**:
- Error message kung nag-sulay og log in
- Dili ma-access ang sistema

**Solutions**:

1. **Kontak ang System Administrator**
   - Ang imong account kinahanglan i-activate
   - Ang Administrator makap-activate sa imong account
   - Mahimong kinahanglan i-verify ang imong role ug permissions

2. **Check sa Imong Supervisor**
   - I-confirm nga dapat active ang imong account
   - I-verify ang imong role assignment
   - Siguroha nga gina-authorize ka sa paggamit sa sistema

---

## Permission Errors

### Issue: "Permission Denied" o "Access Denied"

**Symptoms**:
- Error message kung nag-sulay og perform sa aksyon
- Ang button disabled o dili makita
- Dili ma-access ang ubang pages

**Solutions**:

1. **I-verify ang Imong Role**
   - Check ang imong user profile aron ma-confirm ang imong role
   - Siguroha nga adunay ka correct role para sa aksyon
   - Kontak ang administrator kung sayop ang role

2. **Check ang Action Requirements**
   - Ang ubang aksyon nanginahanglan og specific voucher status
   - I-verify nga ang voucher anaa sa correct stage
   - Check kung nakompleto na ang previous stages

3. **Kontak ang Administrator**
   - Ang imong role mahimong kinahanglan permission adjustment
   - Ang system permissions mahimong kinahanglan i-update
   - I-verify nga gina-authorize ka para sa aksyon

---

## Button Dili Nag-Function

### Issue: Ang Button Disabled (Grayed Out)

**Symptoms**:
- Ang button makita pero dili ma-click
- Ang button grayed out
- Walay response kung i-click

**Solutions**:

1. **Check ang Voucher Status**
   - I-verify nga ang voucher anaa sa imong stage
   - Check ang approval progress bar
   - Siguroha nga nakompleto na ang previous stages

2. **Kompletuhon ang Previous Stages**
   - Kung makakita ka og "Received" button, i-click una
   - Kompletuhon ang RECEIVED sa dili pa REVIEWED
   - Kompletuhon ang REVIEWED sa dili pa FORWARDED

3. **Check para sa "Awaiting Previous Review"**
   - Ang voucher mahimong wala pa moabot sa imong stage
   - Maghulat sa previous department aron makompleto
   - Check ang notifications para sa updates

4. **I-refresh ang Page**
   - I-press ang F5 o Ctrl+R aron i-refresh
   - Ang button state mahimong ma-update human sa refresh
   - Sulayi pag-usab human ma-reload ang page

---

### Issue: Ang Button Click Walay Epekto

**Symptoms**:
- Ang button makita enabled
- Ang pag-click walay epekto
- Walay error message nga makita

**Solutions**:

1. **Check ang Browser Console**
   - I-press ang F12 aron ma-ablihan ang developer tools
   - Tan-awa ang error messages sa Console tab
   - I-note ang bisan unsa nga errors ug kontak ang administrator

2. **Sulayi ang Lain nga Browser**
   - Ang browser mahimong adunay compatibility issues
   - Sulayi ang Chrome, Firefox, o Edge
   - Tan-awa kung nagpadayon ang issue

3. **Clear ang Browser Cache**
   - Ang daang cached files mahimong makahimo og issues
   - Clear ang cache ug cookies
   - Sulayi pag-usab

4. **I-disable ang Browser Extensions**
   - Ang ad blockers o extensions mahimong makasamok
   - Sulayi ang pag-disable sa extensions temporarily
   - I-test kung nag-function ang button

5. **Kontak ang Administrator**
   - Mahimong system issue
   - I-provide ang details bahin sa imong gibuhat
   - I-apil ang browser ug error information

---

## Missing Notifications

### Issue: Dili Makadawat og Notifications

**Symptoms**:
- Ang notification bell walay bag-ong notifications
- Ang expected notifications dili makita
- Ang badge count zero

**Solutions**:

1. **Maghulat sa Auto-Refresh**
   - Ang notifications nag-refresh matag 30 seconds
   - Maghulat og gamay ug check pag-usab
   - Ang badge count dapat ma-update automatically

2. **Manually I-refresh**
   - I-click ang notification bell
   - I-close ug i-reopen ang notification panel
   - I-refresh ang tibuok page (F5)

3. **Check ang Notification Settings**
   - I-verify nga ang browser nagtugot sa notifications
   - Check ang browser notification permissions
   - Siguroha nga dili blocked ang notifications

4. **I-verify ang Voucher Status**
   - Check kung ang voucher anaa sa imong stage
   - I-verify nga ikaw ang correct reviewer
   - Check ang approval progress bar

5. **Check ang Uban nga Notifications**
   - Tan-awa kung nag-function ang ubang notifications
   - I-verify nga nag-function ang notification system
   - Kontak ang administrator kung system-wide issue

---

### Issue: Dili Makita ang Notification Bell

**Symptoms**:
- Ang notification bell icon nawala
- Dili makita ang notification area

**Solutions**:

1. **Check ang Navigation Bar**
   - Ang notification bell anaa sa top-right navigation
   - Pangitaa ang bell icon (🔔)
   - Mahimong nakatago sa small screens

2. **Check ang Browser Zoom**
   - Ang zoom level mahimong magtago sa elements
   - I-reset ang zoom ngadto sa 100% (Ctrl+0)
   - Check kung makita ang bell

3. **Sulayi ang Lain nga Screen Size**
   - I-resize ang browser window
   - Check kung makita ang bell
   - Mahimong responsive design issue

4. **Kontak ang Administrator**
   - Mahimong configuration issue
   - Ang notification feature mahimong disabled
   - I-verify sa administrator

---

## Progress Bar Dili Ma-Update

### Issue: Ang Progress Bar Nagpakita og Sayop nga Information

**Symptoms**:
- Ang progress bar dili mag-reflect sa current status
- Ang stages nagpakita isip incomplete kung nakompleto na
- Sayop ang percentage

**Solutions**:

1. **I-refresh ang Page**
   - Ang progress ma-update kung ma-load ang page
   - I-press ang F5 o Ctrl+R
   - Check kung ma-update ang progress

2. **Check ang Activity Log**
   - I-verify ang actual actions nga gihimo
   - I-compare sa progress bar
   - Tan-awa kung adunay discrepancy

3. **Maghulat og Gamay**
   - Ang progress mahimong ma-update human sa delay
   - Ang sistema mahimong nag-process
   - Check pag-usab sulod sa pipila ka seconds

4. **Clear ang Browser Cache**
   - Ang cached data mahimong magpakita og daang progress
   - Clear ang cache ug reload
   - Ang progress dapat ma-update

5. **Kontak ang Administrator**
   - Mahimong system issue
   - Ang progress calculation mahimong kinahanglan i-fix
   - I-report ang discrepancy

---

## Data Dili Ma-Load

### Issue: Dili Ma-Load ang Voucher List

**Symptoms**:
- Ang page nagpakita og "Loading..." indefinitely
- Ang list walay sulod kung dili dapat
- Error message bahin sa data loading

**Solutions**:

1. **Check ang Internet Connection**
   - I-verify nga adunay ka internet access
   - Check ang connection stability
   - Sulayi ang pag-access sa ubang websites

2. **I-refresh ang Page**
   - I-press ang F5 o Ctrl+R
   - Maghulat sa page aron ma-reload
   - Check kung ma-load ang data

3. **Check ang Filters**
   - Ang applied filters mahimong walay results
   - Clear ang tanan nga filters
   - Sulayi ang pag-search walay filters

4. **Sulayi ang Lain nga Browser**
   - Ang browser mahimong adunay loading issues
   - Sulayi ang Chrome, Firefox, o Edge
   - Tan-awa kung ma-load ang data

5. **Clear ang Browser Cache**
   - Ang cached data mahimong corrupted
   - Clear ang cache ug cookies
   - Reload ang page

6. **Kontak ang Administrator**
   - Mahimong server issue
   - Database connection problem
   - System maintenance in progress

---

### Issue: Dili Ma-Load ang Voucher Details

**Symptoms**:
- Ang pag-click sa voucher nagpakita og loading spinner
   - Blank ang details page
   - Error message kung nag-abli sa voucher

**Solutions**:

1. **I-refresh ang Page**
   - I-press ang F5 o Ctrl+R
   - Sulayi ang pag-abli sa voucher pag-usab
   - Maghulat sa details aron ma-load

2. **Check kung Exist ang Voucher**
   - I-verify nga tama ang voucher ID
   - Ang voucher mahimong gi-delete
   - Check kung adunay ka permission aron makakita

3. **Sulayi ang Lain nga Browser**
   - Browser compatibility issue
   - Sulayi ang alternative browser
   - Tan-awa kung ma-load ang details

4. **Clear ang Browser Cache**
   - Ang cached data mahimong corrupted
   - Clear ang cache
   - Sulayi pag-usab

5. **Kontak ang Administrator**
   - Mahimong system issue
   - Ang voucher data mahimong corrupted
   - I-report ang problema

---

## Workflow Issues

### Issue: Na-Stuck ang Voucher sa Usa ka Stage

**Symptoms**:
- Ang voucher wala nag-progress sulod sa mga adlaw
- Ang current reviewer wala nagbuhat
- Ang workflow daw nahunong

**Solutions**:

1. **Check ang Activity Log**
   - Tan-awa ang last action nga gihimo
   - I-identify kung asa ang stage nga na-stuck
   - I-note kung kanus-a nahitabo ang last action

2. **Kontak ang Current Reviewer**
   - Kontak ang departamento sa current stage
   - Pangutana bahin sa review status
   - I-verify kung available ang reviewer

3. **Check ang Reviewer Availability**
   - Ang reviewer mahimong naa sa leave
   - Ang departamento mahimong kulang sa staff
   - Kontak ang department supervisor

4. **Kontak ang Administrator**
   - Ang Administrator makacheck sa system status
   - Mahimong kinahanglan i-escalate
   - Makap-verify sa workflow status

---

### Issue: Dili Makita ang Next Button

**Symptoms**:
- Ang expected button dili makita
- Disabled ang button
- "Awaiting Previous Review" message

**Solutions**:

1. **Check ang Approval Progress**
   - I-verify nga nakompleto na ang previous stages
   - Check kung ang voucher anaa sa imong stage
   - Review ang workflow sequence

2. **Kompletuhon ang Previous Stages**
   - Kung ikaw usa ka reviewer, kompletuhon ang tanan nga tulo ka stages
   - Siguroha ang RECEIVED → REVIEWED → FORWARDED
   - Maghulat sa sistema aron ma-process

3. **Maghulat sa Previous Stage**
   - Kung ang voucher wala sa imong stage, maghulat
   - Ang previous department kinahanglan makompleto una
   - Check ang notifications para sa updates

4. **I-refresh ang Page**
   - Ang button state mahimong ma-update
   - I-press ang F5 aron i-refresh
   - Check kung makita ang button

5. **Kontak ang Administrator**
   - Mahimong workflow configuration issue
   - Ang sistema mahimong kinahanglan adjustment
   - I-report ang problema

---

## Form Issues

### Issue: Dili Makasubmit sa Voucher Form

**Symptoms**:
- Dili nag-function ang Submit button
- Ang form nagpakita og validation errors
- Dili makasave og draft

**Solutions**:

1. **Check ang Required Fields**
   - Siguroha nga napuno ang tanan nga required fields
   - Pangitaa ang red error indicators
   - I-fix ang validation errors

2. **Check ang Field Validation**
   - Ang amount kinahanglan mas dako sa zero
   - Kinahanglan mapili ang Payee
   - Dili mahimo empty ang Particulars
   - I-fix ang bisan unsa nga validation errors

3. **Sulayi ang Pag-Save isip Draft Una**
   - I-save ang draft aron ma-preserve ang trabaho
   - I-fix ang bisan unsa nga issues
   - I-submit human sa pag-fix

4. **Clear ang Form ug Sugdi Pag-usab**
   - Kung corrupted ang form, i-refresh ang page
   - I-re-enter ang information
   - Sulayi ang pag-submit pag-usab

5. **Check ang Browser Console**
   - I-press ang F12 para sa developer tools
   - Pangitaa ang JavaScript errors
   - I-note ang errors ug kontak ang administrator

---

### Issue: Dili Ma-Ablihan ang Dropdown

**Symptoms**:
- Dili ma-ablihan ang Payee/Item/Tag dropdown
- Dili makapili gikan sa directory
- Ang dropdown makita pero walay sulod

**Solutions**:

1. **I-click sa Field**
   - I-click diretso sa input field
   - Sugdi ang pag-type aron ma-trigger ang search
   - Ang dropdown dapat makita

2. **I-type aron Mag-Search**
   - I-type ang payee/item/tag name
   - Ang results dapat ma-filter
   - Pilia gikan sa filtered results

3. **I-refresh ang Page**
   - Ang page mahimong kinahanglan reload
   - I-press ang F5
   - Sulayi ang dropdown pag-usab

4. **Clear ang Browser Cache**
   - Ang cached JavaScript mahimong daan
   - Clear ang cache
   - Reload ang page

5. **Kontak ang Administrator**
   - Ang directory mahimong walay sulod
   - System configuration issue
   - I-report ang problema

---

## Performance Issues

### Issue: Hinay ang Sistema

**Symptoms**:
- Dugay ma-load ang pages
- Delayed ang mga aksyon
- Ang sistema daw dili responsive

**Solutions**:

1. **Check ang Internet Connection**
   - Ang hinay nga connection makahimo og delays
   - I-test ang connection speed
   - Sulayi ang lain nga network kung available

2. **I-close ang Uban nga Tabs/Programs**
   - Ang daghang browser tabs makapahinay
   - I-close ang unnecessary tabs
   - I-close ang ubang programs nga naggamit sa internet

3. **Clear ang Browser Cache**
   - Ang accumulated cache makapahinay sa browser
   - Clear ang cache ug cookies
   - I-restart ang browser

4. **Sulayi ang Lain nga Browser**
   - Ang current browser mahimong hinay
   - Sulayi ang Chrome, Firefox, o Edge
   - Tan-awa kung ma-improve ang performance

5. **Check ang System Load**
   - Ang daghang users makapahinay sa sistema
   - Sulayi during sa off-peak hours
   - Kontak ang administrator bahin sa system load

---

## Nanginahanglan Pa Ba og Tabang?

Kung ang imong issue wala sakop dinhi:

1. **Check ang FAQ**: [Frequently Asked Questions](./faq.md)
2. **Review ang Role Tutorials**: Check ang tutorials para sa imong specific role
3. **Kontak ang System Administrator**: Para sa issues nga wala ma-resolve sa troubleshooting
4. **I-document ang Issue**: I-note kung unsa ang imong gibuhat, error messages, ug steps aron ma-reproduce

:::warning Report Issues
Kung makontak sa support, i-provide:
- Kung unsa ang imong gisulay buhaton
- Error messages (kung aduna)
- Steps aron ma-reproduce ang issue
- Browser ug operating system
- Screenshots (kung makatabang)
:::

:::info System Maintenance
Kung ang sistema kompleto nga unavailable, mahimong nag-undergo og maintenance. Check sa imong administrator para sa scheduled maintenance windows.
:::

