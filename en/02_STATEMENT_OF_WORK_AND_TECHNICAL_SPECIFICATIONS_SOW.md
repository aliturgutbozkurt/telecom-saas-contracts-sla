# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Statement of Work & Technical Specifications (SOW)
**Document Code:** `EN-TELCO-SOW-2026-02`  
**Contract Reference:** `EN-TELCO-MSA-2026-01` Annex-1  
**Version:** `v1.2.0-TECHNICAL`  
**Date:** October 18, 2026  

---

### 1. Scope and Technical Objectives

This Statement of Work ("SOW") defines the end-to-end technical specifications, cloud-native architecture, microservices topology, external telecommunications interfaces, performance SLAs, and milestone delivery schedules for the **"TelcoPulse Omni-BSS & eSIM Cloud Suite"** delivered by TELCOCLOUD to NEXUSTEL.

---

### 2. Architecture & Technology Stack

The platform is built on cloud-native principles designed for extreme low-latency and continuous carrier-grade reliability:

1. **Compute & Runtime:** Bare-metal Kubernetes (v1.30+) deployed across dual active-active availability zones.
2. **Service Mesh & Zero Trust:** Istio Service Mesh enforcing mutual TLS (mTLS v1.3) with cryptographic hardware keys stored in FIPS 140-2 Level 3 Hardware Security Modules (HSM).
3. **Data Streaming & Event Backbone:** Clustered Apache Kafka with 3x replication factor, partition-level ordering, and sustained 150,000 msg/sec processing capacity.
4. **Data Persistence Tier:**
   * **Transactional:** PostgreSQL 16 managed by Patroni for zero-failover database clustering.
   * **In-Memory Cache & Quotas:** Distributed Redis Cluster (< 2ms response times).
   * **Analytical / CDR Big Data:** ClickHouse Distributed Columnar Database enabling sub-second multi-dimensional aggregation across tens of billions of CDR records.

```
+---------------------------------------------------------------------------------------------------+
|                         TELCOPULSE DETAILED FUNCTIONAL ARCHITECTURE                               |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ INGRESS LAYER ] ---> [ API GATEWAY (Kong/Envoy) - Rate Limiting & Auth Tokenization ]          |
|                                     │                                                             |
|           ┌─────────────────────────┼─────────────────────────┐                                   |
|           ▼                         ▼                         ▼                                   |
|  [ MODULE 1: eSIM RSP ]    [ MODULE 2: 5G CHF/OCS ]  [ MODULE 3: SUBSCRIBER BSS ]                 |
|  - GSMA SGP.22 / SGP.32    - 3GPP Rel-16/17 Specs    - Catalog & Offer Engine                     |
|  - SM-DP+ / SM-DS Orchestr - Diameter Ro/Gy Enteg.   - Dynamic Quota Rules                        |
|  - Apple / Android Push    - HTTP/2 Nchf Services    - Billing & Subscription Lifecycle           |
|           │                         │                         │                                   |
|           └─────────────────────────┼─────────────────────────┘                                   |
|                                     ▼                                                             |
|                    [ KAFKA EVENT STREAMING (High Throughput Event Bus) ]                          |
|                                     │                                                             |
|           ┌─────────────────────────┴─────────────────────────┐                                   |
|           ▼                                                   ▼                                   |
|  [ MODULE 4: FRAUD GUARD ]                   [ MODULE 5: REGULATORY & CDR VAULT ]                 |
|  - Real-time SIM-Swap & Port-Out Check       - 5809 Law / GDPR Compliant Logging                  |
|  - International Revenue Share Fraud (IRSF)  - SHA-256 Timestamps / WORM Storage                  |
|  - Sub-2 second anomaly alerting             - Sovereign In-Country Data Isolation                |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

### 3. Core Functional Modules

#### Module 1: GSMA Remote SIM Provisioning (eSIM RSP)
* **Standards:** GSMA SGP.22 (Consumer) and SGP.32 (IoT/eUICC) specifications.
* **Capabilities:** High-volume eSIM profile generation, SM-DP+ cryptographic handshake, Apple eSIM Quick Transfer, Android automated push provisioning, and GSMA Root CI Certificate verification.

#### Module 2: 5G Convergent Charging & Rating Engine (CHF/OCS)
* **Standards:** 3GPP TS 32.296, TS 32.299 (Diameter Ro/Gy), and TS 32.291 (5G Service Based Architecture HTTP/2 Nchf).
* **Capabilities:** Sub-millisecond rating for packet-switched data sessions, real-time balance reservations, dynamic throttling upon quota depletion, shared family and corporate fleet quotas.

#### Module 3: Subscriber & Catalog Lifecycle Manager (BSS Core)
* **Capabilities:** Unified subscriber database, Mobile Number Portability (MNP) switchboard, plan upgrades, add-on purchasing, recurring billing runs, and dunning/suspension automation.

#### Module 4: Telecom Fraud & SIM-Swap Guard
* **Capabilities:** Instant REST API for banking and fintech partners to verify SIM changes within the past 48 hours to prevent OTP interception; velocity tracking; high-risk call route blocking.

#### Module 5: Regulatory Compliance & CDR Log Vault
* **Capabilities:** Write-Once-Read-Many (WORM) storage for all Call Detail Records (CDR) and IP Detail Records (IPDR) for a mandatory minimum retention period of 2 years; cryptographic timestamping via national authority time anchors; automated PII data masking for back-office operators.

---

### 4. Integration Matrix

| External Component | Protocol / Standard | Direction | Purpose |
| :--- | :--- | :--- | :--- |
| **HLR / HSS / UDM** | Diameter S6a / HTTP/2 Ud | Bidirectional | Subscriber credentials & profile sync |
| **5G Core (AMF / SMF)** | HTTP/2 REST (3GPP Nchf) | Bidirectional | Real-time session and quota management |
| **PCRF / PCF** | Diameter Gx / HTTP/2 Npcf | Bidirectional | Policy and QoS rules orchestration |
| **SMSC Gateway** | SMPP v3.4 / REST | Outbound/Inbound | Automated notifications, OTPs, warnings |
| **National MNP Hub** | XML over SOAP with mTLS | Bidirectional | Central clearinghouse for number ports |

---

### 5. Performance Benchmarks & High Availability

* **Throughput Capacity:** 10,000 TPS standard load; sustained **25,000 TPS** during peak hour; burst handling up to **40,000 TPS** without dropped requests.
* **Latency Profile:**
  * 5G Charging Credit-Control (Nchf): p95 < 20ms, **p99 < 45ms**.
  * eSIM Profile Download Initiation: p95 < 150ms, **p99 < 300ms**.
* **Disaster Recovery:**
  * Multi-region Active-Active cluster between Istanbul (Primary) and Ankara (Secondary).
  * **RPO = 0 (Zero Data Loss)** via synchronous distributed storage replication.
  * **RTO < 15 Minutes** for full automated cutover in the event of complete physical data center loss.

---

### 6. Delivery Milestones

| Milestone | Deliverables | Target Timeline | Verification Method |
| :--- | :--- | :--- | :--- |
| **Phase 1: Foundation** | K8s clusters deployed, HSM integration, network direct links | 60 Days | High-Level Design (HLD) signoff |
| **Phase 2: Core Integration** | RSP, CHF, HLR/HSS, and SMSC endpoints connected | 60 Days | End-to-end sandbox call & eSIM load |
| **Phase 3: Validation & UAT**| 30,000 TPS stress test, security pentest, DR chaos test | 30 Days | Formal UAT test report approval |
| **Phase 4: Go-Live** | 500k subscriber pilot migration, full network cutover | 30 Days | Production Go-Live certificate |
