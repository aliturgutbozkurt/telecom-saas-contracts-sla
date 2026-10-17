# TelcoPulse Omni-BSS & eSIM Cloud Suite
## SaaS Subscription & License Agreement
**Document Code:** `EN-TELCO-LIC-2026-04`  
**Contract Reference:** `EN-TELCO-MSA-2026-01` Annex-3  
**Version:** `v1.0.0-COMMERCIAL`  
**Date:** October 18, 2026  

---

### 1. Grant of License & Scope of Use

1. **Enterprise SaaS License:** SAAS PROVIDER grants OPERATOR a worldwide, non-exclusive, non-transferable enterprise subscription license to access, configure, and utilize the TelcoPulse platform for OPERATOR’s retail, enterprise, and wholesale telecommunications operations.
2. **Dedicated Cloud Isolation:** In compliance with carrier security frameworks, the platform shall be hosted in dedicated private infrastructure (Dedicated VPC or bare-metal Kubernetes clusters). Multi-tenant sharing of runtime processes, databases, or memory caches with external third-party entities is strictly prohibited.

---

### 2. Capacity Tiers & Subscription Pricing

Subscription fees are governed by the volume of active telecommunication subscribers and peak transaction throughput (TPS):

| Subscription Tier | Monthly Base Fee | Guaranteed Peak TPS | Included Monthly CDR Volume |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Base): 0 - 20M Subscribers** | **$185,000 / Month** | **25,000 TPS** | **3.5 Billion CDRs** |
| **Tier 2 (Growth): 20M - 35M Subscribers** | **$245,000 / Month** | **35,000 TPS** | **6.0 Billion CDRs** |
| **Tier 3 (Max): 35M - 50M+ Subscribers** | **$295,000 / Month** | **50,000 TPS** | **10.0 Billion CDRs** |

*Burst Capacity:* Additional transaction capacity exceeding agreed tiers is billed at $3,000 per month per increment of 1,000 peak TPS.

---

### 3. Software Lifecycle, Upgrades & Deprecation

1. **Regular Updates:** All security patches, bug fixes, and minor releases are provided at no incremental charge throughout the subscription term.
2. **N-1 Version Support:** SAAS PROVIDER guarantees full maintenance and patch support for the current production release and at least one preceding major version (N-1) for a minimum of 18 months.
3. **Regulatory Adaptations:** Mandates enacted by GSMA or national telecommunications regulators shall be incorporated into the core software at least thirty (30) days prior to their legal enforcement date.

---

### 4. Exit Management & Data Sanitization

1. **No Vendor Lock-In:** All subscriber state records, historical ratings, and configuration manifests shall remain accessible and exportable in open, non-proprietary formats (PostgreSQL dump, Apache Parquet, JSON).
2. **Decommissioning Protocol:** Within thirty (30) days of contract termination and confirmation of complete data handoff to OPERATOR, SAAS PROVIDER shall perform cryptographic data sanitization across all staging and backup environments in accordance with **NIST SP 800-88 Rev. 1** and provide a legally binding Certificate of Data Destruction.
