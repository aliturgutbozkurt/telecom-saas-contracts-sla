# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Master Services Agreement (MSA)
**Contract Code:** `EN-TELCO-MSA-2026-01`  
**Effective Date:** November 01, 2026  
**Execution Date:** October 18, 2026  

---

### Clause 1: Parties to the Agreement

This Master Services Agreement ("Agreement") is entered into by and between:

1. **OPERATOR:**  
   **NexusTel Global Telecommunications Corp.**  
   NexusTel Tower, 245 Financial Avenue, Sariyer, Istanbul, Turkey  
   Trade Registry No: 384920 | Tax ID: 8920192841  
   *(hereinafter referred to as **"OPERATOR"** or **"NEXUSTEL"**)*  

2. **SAAS PROVIDER:**  
   **TelcoCloud Enterprise Network & Software Technologies Inc.**  
   METU Technopark Innovation Hub, 4th Floor, No: 402, Cankaya, Ankara, Turkey  
   Trade Registry No: 194821 | Tax ID: 7291048201  
   *(hereinafter referred to as **"SAAS PROVIDER"** or **"TELCOCLOUD"**)*  

OPERATOR and SAAS PROVIDER may be referred to individually as a **"Party"** and collectively as the **"Parties"**.

---

### Clause 2: Definitions & Interpretations

* **BSS (Business Support Systems):** The telecommunications software layer managing subscriber onboarding, product catalog, rating, convergent charging, billing, and omni-channel customer touchpoints.
* **CHF / CCS (Charging Function / Convergent Charging System):** The 3GPP Rel-16/17 compliant high-throughput rating and credit-control engine operating in real-time across 4G/5G data, voice, and messaging sessions.
* **eSIM RSP (Remote SIM Provisioning):** The GSMA SGP.22 / SGP.32 compliant platform enabling remote over-the-air cryptographic downloading and lifecycle management of digital subscriber profiles (eUICC).
* **SaaS Service:** The proprietary TelcoPulse software suite provided by SAAS PROVIDER to OPERATOR on a dedicated private cloud infrastructure basis.
* **Core Availability (Uptime):** The percentage of time in any given calendar month during which the critical rating and provisioning engines are fully operational and responding to network requests.

---

### Clause 3: Scope of Engagement & Performance

1. **Deployment Model:** SAAS PROVIDER shall deploy, integrate, test, and continuously operate the **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** across OPERATOR's dedicated bare-metal Kubernetes infrastructure across Tier-4 geographically redundant data centers.
2. **Dedicated Cloud Isolation:** Under no circumstances shall OPERATOR's subscriber data, transaction logs, or network traffic be shared, processed, or commingled on public multi-tenant clouds.
3. **Continuous Maintenance & SRE:** SAAS PROVIDER provides 24/7/365 Site Reliability Engineering (SRE) and Level-1 through Level-4 technical support in strict accordance with the Service Level Agreement (SLA).

---

### Clause 4: Intellectual Property Rights (IPR)

1. **SAAS PROVIDER IPR:** SAAS PROVIDER retains sole and exclusive ownership of all patent rights, copyrights, trademarks, source codes, container images, and proprietary algorithms comprising the TelcoPulse platform. OPERATOR is granted a non-exclusive, non-transferable, commercial SaaS license during the term.
2. **OPERATOR & Subscriber Data IPR:** OPERATOR maintains exclusive and absolute ownership over all subscriber personal data, Call Detail Records (CDR), Internet Protocol Detail Records (IPDR), cellular location telemetry, and financial transactional datasets. SAAS PROVIDER acquires zero ownership rights, liens, or encumbrances over OPERATOR data.
3. **Bespoke Integrations:** Intellectual property in custom integration adapters specifically developed for OPERATOR's proprietary legacy systems and funded by OPERATOR shall vest exclusively in OPERATOR.

---

### Clause 5: Commercial Terms & Payment Schedule

1. **One-Time Implementation & Integration Fee:** A fixed fee of **USD 1,250,000** payable upon successful completion and signoff of SOW Phase 1 and the successful execution of the first live 5G call and eSIM profile download.
2. **Monthly Enterprise SaaS & SLA Subscription Fee:** A recurring baseline fee of **USD 185,000 per month** covering up to 20,000,000 active subscribers and 25,000 peak TPS. Subscribers exceeding 20 Million shall be billed at USD 4,500 per additional 1,000,000 active subscribers per month.
3. **Payment Terms:** Invoices are payable within thirty (30) calendar days from receipt via wire transfer.
4. **Service Credit Deductions:** Any penalties incurred due to SLA breaches shall be directly offset and deducted from the subsequent monthly subscription invoice.

---

### Clause 6: Limitation of Liability & Indemnification

1. **Liability Cap:** Except as provided in Clause 6.2, each Party's total aggregate liability arising out of or related to this Agreement shall be limited to the total fees paid or payable by OPERATOR to SAAS PROVIDER during the twelve (12) months preceding the incident.
2. **Uncapped Liabilities:** The liability cap in Clause 6.1 shall not apply to:
   * Gross negligence, willful misconduct, or fraud,
   * Breach of Confidentiality obligations (NDA),
   * Direct fines imposed by regulatory telecommunications bodies (BTK / National Authorities) arising from SAAS PROVIDER's failure to maintain data residency or security controls,
   * Third-party Intellectual Property infringement indemnification.
3. **IP Infringement Indemnity:** SAAS PROVIDER shall defend, indemnify, and hold harmless OPERATOR against any third-party claim alleging that the software infringes any patent, copyright, or trade secret.

---

### Clause 7: Term, Termination & Exit Management

1. **Term:** This Agreement enters into force upon execution and shall remain effective for an initial commitment period of thirty-six (36) months from the formal commercial Go-Live date.
2. **Termination for Material Cause:** Either Party may terminate immediately upon written notice if the other Party commits a material breach and fails to cure such breach within fifteen (15) days of written notice.
3. **Chronic SLA Breach Termination:** OPERATOR may terminate this Agreement without penalty if the Core Availability drops below 99.99% for three (3) consecutive months or any four (4) months within a rolling 12-month period.
4. **Data Return & Migration Assistance:** Upon termination, SAAS PROVIDER shall export and deliver all subscriber databases and transaction records in standard formats (PostgreSQL dump, Parquet) within 30 days and provide transition assistance for up to 90 days.

---

### Clause 8: Governing Law & Jurisdiction

1. This Agreement shall be governed by and construed in accordance with the substantive laws of the Republic of Turkey.
2. Any dispute that cannot be resolved through good-faith executive escalation within fifteen (15) days shall be referred to and finally resolved by arbitration administered by the **Istanbul Arbitration Centre (ISTAC)** in accordance with the ISTAC Arbitration Rules. The seat of arbitration shall be Istanbul; the language shall be English/Turkish. Alternatively, the Istanbul (Caglayan) Courts shall have exclusive judicial jurisdiction.

---

### Signatures

IN WITNESS WHEREOF, the authorized representatives of the Parties have executed this Agreement in two (2) original counterparts.

| NEXUSTEL GLOBAL TELECOMMUNICATIONS CORP. | TELCOCLOUD ENTERPRISE NETWORK & SOFTWARE INC. |
| :--- | :--- |
| **Signature:** __________________________ | **Signature:** __________________________ |
| **Name:** Dr. Mehmet Akif Ersoy | **Name:** Kerem Selim Ozturk |
| **Title:** Chief Technology Officer (CTO) | **Title:** Chief Executive Officer (CEO) |
| **Date:** October 18, 2026 | **Date:** October 18, 2026 |
