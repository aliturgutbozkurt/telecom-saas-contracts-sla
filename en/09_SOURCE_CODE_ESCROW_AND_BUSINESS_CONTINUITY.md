# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Source Code Escrow & Business Continuity Agreement
**Document Code:** `EN-TELCO-ESC-2026-09`  
**Contract Reference:** `EN-TELCO-MSA-2026-01` Annex-8  
**Classification:** LEGAL PROTECTIVE INSTRUMENT  
**Date:** October 18, 2026  

---

### 1. Rationale and National Critical Infrastructure Protection

Telecommunications operations represent vital national infrastructure. To safeguard NEXUSTEL against the catastrophic risk of vendor bankruptcy, cessation of trade, or sudden abandonment of maintenance services, all proprietary source codes and deployment scripts are secured with an independent **Escrow Agent**.

---

### 2. Parties to Escrow

* **Depositor / Licensor:** TelcoCloud Enterprise Network & Software Technologies Inc.
* **Beneficiary / Licensee:** NexusTel Global Telecommunications Corp.
* **Escrow Agent:** **International Software Escrow & Trust Authority (TÜBİTAK BİLGEM / NCC Group)**

---

### 3. Escrow Deposit Materials

SAAS PROVIDER shall deposit an encrypted snapshot of the following assets upon every major/minor release, and no less frequently than quarterly:

1. **Complete Source Trees:** Unobfuscated source code for all microservices (eSIM RSP, 5G CHF, BSS Catalog, Fraud Guard, and CDR Vault) including Git commit logs.
2. **Infrastructure as Code (IaC):** Helm charts, ArgoCD configurations, Dockerfiles, and Terraform scripts for bare-metal Kubernetes deployment.
3. **Database Schemas:** PostgreSQL and ClickHouse DDL scripts, migration assets, and query optimization routines.
4. **Third-Party Dependency Cache:** Offline compilation cache of all required binary libraries.
5. **Compilation & Run Manual:** Step-by-step documentation detailing clean-slate compilation and cluster bootstrapping.

---

### 4. Release Conditions

The Escrow Agent shall release the deposit materials to OPERATOR exclusively upon occurrence of any of the following verified release conditions:

1. **Insolvency or Liquidation:** SAAS PROVIDER files for bankruptcy, enters administration, or ceases business operations.
2. **Abandonment of Support:** SAAS PROVIDER fails to deliver contracted 24/7/365 Tier-2/Tier-3 support or rectify P1 incidents, and fails to remedy within ten (10) business days of written warning.
3. **Material Regulatory Non-Compliance:** Unjustified refusal to implement required statutory telecommunication security directives.

---

### 5. Rights Conferred Upon Release

Upon valid release of the escrow materials:
1. OPERATOR receives a perpetual, non-exclusive, royalty-free license to use, compile, modify, and enhance the software strictly for its own internal telecommunications network operations.
2. OPERATOR shall not commercialize, sublicense, or publicly release the source code to external third parties.
