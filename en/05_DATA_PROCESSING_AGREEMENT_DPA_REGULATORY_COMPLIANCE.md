# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Data Processing & Regulatory Compliance Agreement (DPA)
**Document Code:** `EN-TELCO-DPA-2026-05`  
**Contract Reference:** `EN-TELCO-MSA-2026-01` Annex-4  
**Regulatory Framework:** National Telecommunications Law (Law No. 5809) & KVKK / GDPR  
**Date:** October 18, 2026  

---

### 1. Parties & Regulatory Classification

1. **OPERATOR (Data Controller):** Licensed telecommunications public operator determining the lawful purposes and technical modalities of subscriber communications and personal data processing.
2. **SAAS PROVIDER (Data Processor):** Entity processing telecom subscriber metadata strictly on behalf of and pursuant to the documented written instructions of OPERATOR.

---

### 2. Telecom Data Categories & Secrecy Classifications

| Data Category | Specific Data Types | Classification | Statutory Minimum Retention |
| :--- | :--- | :--- | :--- |
| **Subscriber Identity (PII)** | National ID, Full Legal Name, Address, Contact Info | Sensitive PII | Duration of subscription + 10 Years |
| **Network Identifiers** | MSISDN (Phone No), IMSI (SIM Card ID), IMEI (Hardware ID) | Telecommunications Secret | Operational lifecycle of device/SIM |
| **Traffic Data (CDR / IPDR)** | Calling/Called Parties, Session Duration, Volume (MB), Source/Dest IP | Secrecy of Telecommunications | Minimum 2 Years (Law No. 5809) |
| **Cellular Location Data** | Cell Global Identity (CGI), GPS, Sector ID | High-Sensitivity Location Data | Anonymized immediately post-session |

---

### 3. Absolute Data Sovereignty & Cross-Border Transfer Prohibition

1. **In-Country Processing Mandate:** In compliance with national telecommunications privacy legislation, no subscriber identity, traffic record, call metadata, or cellular location information shall be transferred, routed, stored, or processed outside the territorial borders of Turkey.
2. **Exclusion of Foreign Cloud Dependencies:** The runtime clusters, active-active databases, and disaster recovery sites shall physically reside within audited Tier-3/Tier-4 domestic data centers.
3. **Telemetry & Crash Logs Isolation:** Third-party global APM and crash diagnostics SaaS tools (e.g., Datadog, Sentry Cloud) shall not receive un-sanitized IP logs or subscriber identifiers; all telemetry must remain on self-hosted instances.

---

### 4. Technical and Cryptographic Safeguards

1. **Data in Transit:** Enforced TLS 1.3 encryption across all public interfaces; mutual certificate validation (mTLS) with automated cert rotation inside the Istio service mesh.
2. **Data at Rest:** Encrypted using AES-256 with keys managed within FIPS 140-2 Level 3 Hardware Security Modules (HSM) and HashiCorp Vault.
3. **Dynamic Data Masking:** Operator customer care portals dynamically mask subscriber MSISDN and IMSI entries (`+90 532 *** ** 12`), restricting plaintext viewing to authorized lawful intercept units only.
4. **Developer Code Hygiene:** Strict prohibition against logging PII, passwords, authentication tokens, or eSIM cryptographic keys in plain text format (`stdout` / console logs).

---

### 5. Breach Notification & Regulatory Penalties

1. **24-Hour Operator Alert:** SAAS PROVIDER shall notify OPERATOR within twenty-four (24) hours of becoming aware of any confirmed or suspected security incident or unauthorized access.
2. **72-Hour Regulatory Report:** SAAS PROVIDER shall supply OPERATOR with all forensics, affected subscriber lists, and vulnerability assessments within 36 hours to enable OPERATOR’s statutory 72-hour filing with data protection and telecommunication authorities.
3. **Regulatory Fines Indemnity:** Any administrative fines levied against OPERATOR by telecommunication regulators (e.g., BTK) or data protection boards directly attributable to SAAS PROVIDER’s non-compliance shall be fully indemnified by SAAS PROVIDER.
