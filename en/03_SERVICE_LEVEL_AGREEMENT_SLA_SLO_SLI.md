# TelcoPulse Omni-BSS & eSIM Cloud Suite
## Service Level Agreement (SLA / SLO / SLI)
**Document Code:** `EN-TELCO-SLA-2026-03`  
**Contract Reference:** `EN-TELCO-MSA-2026-01` Annex-2  
**Version:** `v1.1.0-ENTERPRISE`  
**Date:** October 18, 2026  

---

### 1. Conceptual Framework: SLI vs. SLO vs. SLA

Carrier-grade telecommunications demands precision. We distinguish between three levels of measurement:

```
+-----------------------------------------------------------------------------------+
| SLI (Observed Metric)          SLO (Engineering Objective)   SLA (Legal Commitment)|
| Prometheus / SRE Gauges   ->   Internal Reliability Target-> Breach Penalty Matrix|
| "Current 30-day Uptime"        "Objective: 99.999% Uptime"   "<99.99% => 20% credit"|
+-----------------------------------------------------------------------------------+
```

* **Service Level Indicator (SLI):** A quantifiable, real-time metric measured continuously at production endpoints.
* **Service Level Objective (SLO):** The internal engineering reliability threshold pursued by the SRE team.
* **Service Level Agreement (SLA):** The contractually binding promise giving rise to financial remedies (Service Credits) or termination rights if breached.

---

### 2. Precise Mathematical SLI Formulations

#### 2.1. Availability SLI
$$\text{SLI}_{\text{Uptime}} = \left( \frac{\text{Total Operational Minutes} - \text{Unscheduled Outage Minutes}}{\text{Total Operational Minutes}} \right) \times 100$$

#### 2.2. Latency Compliance SLI
$$\text{SLI}_{\text{Latency}} = \left( \frac{\text{Transactions with Response Time} \le 45\text{ms}}{\text{Total Valid Transactions}} \right) \times 100$$

#### 2.3. System Defect / Error Rate SLI
$$\text{SLI}_{\text{Error}} = \left( \frac{\text{Unintended 5xx HTTP / Diameter Error Results}}{\text{Total Processed Transactions}} \right) \times 100$$

---

### 3. Service Level Objectives (SLO) & Outage Budgets

| Service Tier | Target Availability | Max Monthly Allowed Downtime | Max Annual Allowed Downtime |
| :--- | :--- | :--- | :--- |
| **Core Charging & eSIM (CHF / RSP)** | **99.999%** (Five Nines) | **26.30 Seconds** | **5.26 Minutes** |
| **BSS Lifecycle & Product Catalog** | **99.99%** (Four Nines) | **4.38 Minutes** | **52.60 Minutes** |
| **Subscriber Self-Care & Web APIs** | **99.95%** | **21.60 Minutes** | **4.38 Hours** |
| **CDR Analytics & Archival** | **99.50%** | **3.65 Hours** | **43.80 Hours** |

---

### 4. Incident Priority Classification & MTTA / MTTR

| Priority | Operational Criteria | Initial Response (MTTA) | Target Resolution (MTTR) | Operating Hours |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Blocker** | Core 5G charging down, eSIM downloading blocked, >5% subscribers impacted. | **<= 5 Minutes** | **<= 60 Minutes** | 24/7/365 War Room |
| **P2 - Critical** | Redundancy degraded (one data center lost), p99 latency > 100ms, regional provisioning halt. | **<= 15 Minutes** | **<= 4 Hours** | 24/7/365 |
| **P3 - Major** | Performance degradation, reporting latency, non-critical admin tool defect. | **<= 60 Minutes** | **<= 24 Hours** | Business hours (8x5) |
| **P4 - Minor** | Minor cosmetic UI flaws, documentation inconsistencies. | **<= 4 Hours** | **<= 5 Business Days** | Normal business days |

---

### 5. Error Budget & Engineering Policy

For a 99.99% availability target, the monthly **Error Budget is 0.01%** (approx. 4 minutes and 23 seconds).

1. **Budget Health > 50%:** Normal rapid deployment of new features and business roadmap items continues.
2. **Budget Health 25% - 50%:** Deployments restricted to low-risk, pre-validated changes. Increased automated testing requirements.
3. **Budget Health < 25% or Depleted:**
   * **Mandatory Feature Freeze:** All new feature releases are immediately halted until the start of the next calendar month.
   * 100% of engineering bandwidth is redirected to site reliability, root-cause fixes, infrastructure hardening, and chaos engineering.

---

### 6. Service Credit Penalties for SLA Breach

Failure to achieve the Core Charging and eSIM availability levels incurs direct financial penalties deducted from the subsequent monthly SaaS invoice:

| Monthly Achieved Core Uptime | Service Credit (% Deducted from Monthly Fee) | Financial Value (Based on $185,000 Base) |
| :--- | :--- | :--- |
| **>= 99.99%** | **0% (Compliant)** | $0 |
| **99.95% to 99.989%** | **10%** | $18,500 |
| **99.90% to 99.949%** | **25%** | $46,250 |
| **99.50% to 99.899%** | **50%** | $92,500 |
| **< 99.50%** | **100% (Full Month Waived) + Termination Right** | $185,000 + Breach of Contract Action |

*P1 MTTR Surcharge:* For each additional 30 minutes beyond the 60-minute MTTR threshold during a P1 incident, an additional 5% penalty applies up to a maximum cap of 100% of the monthly fee.

---

### 7. Exclusions & Permitted Maintenance

Downtime calculation excludes:
* Approved scheduled maintenance windows (Sundays between 02:00 and 05:00 local time).
* National telecommunications optical fiber cuts occurring in the national transmission grid outside SAAS PROVIDER's scope.
* Documented Force Majeure events.
