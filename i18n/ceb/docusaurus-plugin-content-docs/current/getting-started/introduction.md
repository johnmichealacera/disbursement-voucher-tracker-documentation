---
sidebar_position: 1
title: Pasiuna sa Sistema
description: Pagkat-on bahin sa Disbursement Voucher Tracker system, ang mga features niini, ug mga benepisyo
tags: [getting-started, introduction, overview]
---

# Pasiuna sa Sistema

Maayong pag-abot sa **Disbursement Voucher Tracker**! Kining komprehensibong giya makatabang kanimo nga masabtan ug magamit nimo ang sistema sa epektibo, bisan unsa pa ang imong teknikal nga background.

## Unsa ang Disbursement Voucher Tracker?

Ang Disbursement Voucher Tracker usa ka moderno, web-based nga aplikasyon nga gidesinyo alang sa operasyon sa munisipyo. Kini nag-streamline sa tibuok proseso sa paghimo, pag-review, pag-approve, ug pag-track sa disbursement vouchers—ang opisyal nga mga dokumento nga gigamit aron ma-authorize ang mga bayad gikan sa gobyerno nga pondo.

### Katuyoan

Kining sistema nag-digitize ug nag-automate sa kaniadto paper-based, time-consuming nga proseso. Imbes nga pisikal nga mga dokumento nga nagbalhin-balhin sa taliwala sa mga departamento, tanan nahitabo na elektroniko uban sa:

- **Real-time tracking** sa voucher status
- **Automated notifications** kung kinahanglan ang aksyon
- **Complete audit trails** alang sa compliance ug transparency
- **Multi-level approval workflows** nga nag-enforce sa proper authorization
- **Role-based access** nga nagsiguro nga ang mga users makakita ug makabuhat lamang sa ilang gina-authorize

## System Overview ug Architecture

Ang Disbursement Voucher Tracker gibuhat gamit ang moderno nga web technologies:

- **Frontend**: Next.js uban sa TypeScript para sa paspas, responsive user interface
- **Backend**: Secure server architecture nga nag-handle sa tanan nga business logic
- **Database**: PostgreSQL para sa reliable, secure data storage
- **Security**: Role-based access control ug comprehensive audit logging

### Giunsa Kini Nag-Function

Ang sistema nag-operate sa **workflow-based model** diin ang mga vouchers nag-agay sa lain-laing mga yugto:

1. **Creation**: Ang user naghimo og disbursement voucher uban sa payment details
2. **Review**: Daghang mga departamento ang nag-review ug nag-validate sa voucher
3. **Approval**: Ang authorized personnel nag-approve sa voucher
4. **Processing**: Ang Treasury nag-process sa payment
5. **Completion**: Ang payment gi-release ug gi-record

Ang matag yugto adunay specific requirements ug permissions, nga nagsiguro sa proper oversight ug compliance sa gobyerno nga mga regulasyon.

## Key Features ug Benepisyo

### 🎯 Key Features

#### Multi-Role Support
Ang sistema nagsuporta sa **12 ka lain-laing user roles**, ang matag usa adunay specific responsibilities:
- **REQUESTER**: Department staff nga naghimo og vouchers
- **GSO**: General Services Office para sa procurement vouchers
- **HR**: Human Resources para sa HR-related disbursements
- **SECRETARY**: Initial review ug routing
- **MAYOR**: Executive approval authority
- **BAC**: Bids and Awards Committee para sa procurement review
- **BUDGET**: Budget allocation verification
- **ACCOUNTING**: Financial validation
- **TREASURY**: Payment processing ug release
- **DEPARTMENT_HEAD**: Department-level approval
- **FINANCE_HEAD**: Financial oversight
- **ADMIN**: System administration

#### Three-Stage Review Process
Ang matag reviewing department nagsunod sa structured process:
- **RECEIVED**: Pag-acknowledge sa pagdawat sa voucher
- **REVIEWED**: Pag-complete sa review
- **FORWARDED**: Pagpadala sa sunod nga departamento

Kini nagsiguro sa accountability ug clear tracking sa matag lakang.

#### Specialized Workflows
- **Standard Workflow**: Para sa regular office disbursements
- **GSO Workflow**: Para sa procurement uban sa BAC review
- **HR Workflow**: Para sa human resources disbursements

#### BAC Multi-Reviewer System
Para sa procurement vouchers, daghang BAC members ang kinahanglan mag-review independently, uban sa configurable requirements (default: 3 reviewers).

#### Comprehensive Tracking
- **Approval Progress Bar**: Visual representation sa voucher status
- **Activity Log**: Complete audit trail sa tanan nga aksyon
- **Real-time Notifications**: Automatic alerts kung kinahanglan ang aksyon
- **Status Badges**: Clear visual indicators sa voucher state

#### Directory Management
- **Payee Directory**: Quick selection sa approved payees
- **Tag Directory**: Categorization para sa GSO vouchers
- **Item Directory**: Pre-configured items uban sa default prices

### 💡 Benepisyo

#### Para sa Individual Users
- **Time Savings**: Wala na maghulat sa pisikal nga mga dokumento
- **Clarity**: Kanunay mahibaloan kung asa ang imong voucher sa proseso
- **Convenience**: Access gikan sa bisan unsa nga computer uban sa internet
- **Notifications**: Dili na makalimtan kung kinahanglan ang aksyon

#### Para sa Departments
- **Efficiency**: Mas paspas nga processing times
- **Transparency**: Clear visibility sa tanan nga vouchers
- **Accountability**: Complete audit trails
- **Compliance**: Built-in workflow enforcement

#### Para sa Organization
- **Cost Reduction**: Mas gamay nga papel, printing, ug manual handling
- **Better Reporting**: Dali nga access sa data ug statistics
- **Compliance**: Automatic enforcement sa approval requirements
- **Audit Readiness**: Complete historical records

## Browser Requirements ug Compatibility

Aron magamit ang Disbursement Voucher Tracker, kinahanglan nimo:

### Recommended Browsers
- **Google Chrome** (latest version) - Recommended
- **Mozilla Firefox** (latest version)
- **Microsoft Edge** (latest version)
- **Safari** (latest version, para sa Mac users)

### System Requirements
- **Internet Connection**: Stable internet connection ang kinahanglan
- **Screen Resolution**: Minimum 1024x768 pixels (mas dako nga recommended)
- **JavaScript**: Kinahanglan enabled sa imong browser
- **Cookies**: Kinahanglan enabled para sa session management

### Mobile Access
Ang sistema **responsive** ug nag-function sa tablets ug smartphones, bisan pa ang desktop o laptop computer ang recommended para sa pinakamaayong experience, labi na kung:
- Naghimo og vouchers uban sa multiple items
- Nag-review sa detailed voucher information
- Nag-manage sa directories (Admin functions)

### Pagkuha og Tabang
Kung makasinati ka og technical issues:
1. Sulayi ang pag-refresh sa imong browser
2. Clear ang imong browser cache
3. Sulayi ang lain nga browser
4. Kontak ang imong system administrator

## Unsa ang Sunod?

Karon nga nasabtan mo na kung unsa ang sistema ug unsa ang mahimo niini, andam ka na sa:

1. **[First-Time Login](./first-login.md)** - Pagkat-on kung giunsa ma-access ang sistema
2. **[Understanding User Roles](./user-roles.md)** - Pag-discover kung unsa ang mahimo sa imong role
3. **[Role-Based Tutorials](../roles/requester.md)** - Moadto sa tutorials para sa imong specific role

:::tip Getting Started
Kung nag-login ka sa unang higayon, sugdi sa [First-Time Login](./first-login.md) guide. Kini mag-walk through sa pag-access sa sistema ug pag-sabot sa imong dashboard.
:::

:::info Need Help?
Kung adunay mga pangutana o nanginahanglan og tabang, kontak ang imong system administrator o tan-awa ang [FAQ](../reference/faq.md) section.
:::

