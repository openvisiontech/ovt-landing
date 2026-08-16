

# **Technical Whitepaper: Uli SDK**

## **Bridging Heterogeneous Assets with Agentic AI via Dynamic Knowledge Graphs and Enhanced Cursor-on-Target (CoT)**

### 

### **Executive Overview**

The **Uli (Unified Link Interface) SDK** serves as the tactical software nervous system for Agentic AI, operating as a high-performance middleware that connects heterogeneous physical assets—including ground platforms, aerial units, and edge sensors—with multi-domain AI reasoning ecosystems. Built upon a modular **client-server messaging architecture** where distributed services interact over a standardized Unified Link Interface, Uli SDK enables dynamic discovery, asset contextualization, and runtime adaptability across contested environments. By synthesizing asset identity, functional capabilities, and live telemetry feeds into a structured **Knowledge Graph Context Layer**, Uli SDK delivers a shared, real-time world model for AI agents and human operators. Enhanced by decentralized, service-hosted **UDP Multicast Cursor-on-Target (CoT)** event pipelines, Uli SDK transports multi-modal situational awareness—including spatial XML, low-latency imagery, 3D point cloud meshes, and neural tensor arrays—with zero cloud dependency.

---

### **1\. Core Architectural Principles**

#### **Dynamic Client-Server Messaging Architecture**

At the core of the Uli SDK is a distributed **client-server messaging architecture** where software components expose and consume services through a standardized Unified Link Interface:

* **Dynamic Service Lifecycle:** Service-hosting components can be registered, initialized, reconfigured, or decommissioned at runtime without disrupting ongoing operations or requiring system-wide recompilation.  
* **Runtime Adaptability:** The architecture dynamically adjusts to changing mission requirements, payload reconfigurations, and intermittent tactical network connectivity.  
* **Modular Open Systems Approach (MOSA):** Engineered in full compliance with MOSA principles, eliminating vendor lock-in and allowing modular integration of specialized AI modules, robotics controllers, and tactical sensors.  
* **Reduced Integration Latency:** Eliminates rigid, hard-coded payload integrations, cutting onboarding and reconfiguration timelines by **40%+**.

#### **Multi-Domain Heterogeneous Interoperability**

Engineered in compliance with the **DoD Modular Open Systems Approach (MOSA)**, the Uli SDK provides standard data fabrics and APIs across disparate operating domains:

* **Unmanned Ground & Aerial Systems:** Autonomous mobility, sensor suites, and payload controllers.  
* **Industrial & Tactical Systems:** Heavy vehicle buses (J1939), robotics stacks (ROS/ROS2, NVIDIA ISAAC ROS), and edge compute clusters.  
* **Tactical Command & Intelligence Layers:** Next-Generation Command and Control (NGC2) frameworks, JADC2 nodes, TAK/CoT networks, and Agentic AI reasoning engines.

2\. **Knowledge Graph Synthesis & AI Reasoning**

The Uli SDK implements a **Discovery-Driven Semantic Engine** that transforms unstructured telemetry and hardware specifications into contextual knowledge optimized for Large Language Models (LLMs) and Agentic reasoning engines. 

#### **Client-Server Context Discovery Vectors**

Through dedicated discovery services hosted across Uli SDK endpoints, assets self-announce three foundational context vectors:

* **Asset Context:** Unique system identification (URI, serial, hardware profile), spatial localization/pose, operational domain, and security privileges.  
* **Capability Context:** Executable functional skill sets, operational boundaries, command interfaces, and acceptable parameter envelopes.  
* **Telemetry Context:** Data topic definitions, streaming rates, engineering units, and schema definitions.

#### **Dynamic Knowledge Graph Synthesis**

Context vectors discovered by client-server endpoints are ingested as nodes and relationships within an edge-hosted **Knowledge Graph**. This generates an operational world model that allows AI agents to query asset availability, perform semantic state estimation, and evaluate mission plans against live environmental states in real time. 

#### **Autonomous Command & Execution**

AI agents leverage the Knowledge Graph to formulate precise task allocations, mission plans, and low-level control parameters. The Uli SDK translates high-level agentic intent into high-fidelity commands, driving physical actuation across ROS2 nodes, bare-metal C++ loops, and payload controllers.

### **3\. Extended Cursor-on-Target (CoT) & Human-Machine Teaming**

Uli SDK implements tactical situation sharing directly within its client-server messaging architecture, enabling any component to host a **CoT Event Service** for distributed broadcasting. 

**Flexible CoT Service Hosting:** Any node or subsystem running Uli SDK can instantiate a lightweight CoT Event Service to originate, transform, and broadcast situational updates without requiring a central broker.

**UDP Multicast Tactical Transport:** Utilizes bandwidth-efficient UDP Multicast streams to broadcast CoT events across tactical edge networks, ensuring simultaneous delivery to AI agents, edge nodes, and operator end-user devices (EUDs).

**Multi-Modal Payload Containers:** Extends traditional spatial CoT XML metadata to encapsulate high-bandwidth binary buffers directly within event packets:

* Low-latency EO/IR imagery frames.  
* 3D spatial point clouds and mesh geometry.  
* Neural network tensor arrays and latent feature embeddings.  
  **Collaborative AI Tensor Sharing:** Distributed AI nodes exchange neural feature maps over the CoT transport layer, enabling swarm-level collaborative inference and state prediction without streaming saturated raw video feeds.  
  **TAK Ecosystem Interoperability:** Provides bi-directional compatibility with ATAK, WinTAK, and TAK Server architectures, delivering a shared Common Operational Picture (COP) for human operators and AI agents.  
  **Agent-to-UI (A2UI) Dynamic Interfaces:** Native Dart-FFI and C++ bindings empower AI agents to dynamically generate and update Flutter control dashboards as newly discovered asset services come online.

### **4\. Operational Integrity: Security, Safety, and Protocol Support**

#### **Security Architecture**

* **Certificate-Based Authentication:** Cryptographic identity verification for every node joining the Uli SDK context mesh.  
* **Role-Based Access Control (RBAC):** Strict enforcement of Data Access Privileges (Classified, Controlled, Unclassified) and Application Roles (Operator, Maintainer, Administrator).

#### **Safety & State Reliability**

* **Redundant Safety Triggers:** Automated monitoring coupled with hardware-level emergency stop (E-Stop) commands.  
* **Two-Tiered State Machines:** Deterministic operational modes (Standard, Reduced, Training, Maintenance) to prevent unvalidated command execution during critical failures.

### **5\. Development and Deployment Ecosystem**

* **Multi-Language Bindings:** Automated code generation tools produce native C++ implementations, high-efficiency Python bindings for ML pipelines, and Dart-FFI bindings for cross-platform UI rendering.  
* **Cross-Compilation:** Built using Bazel for optimized target compilation across x86\_64 servers and ARM64 NVIDIA Jetson platforms (Nano, Xavier, Orin, DGX Spark).  
* **Reference Platform (Uli Kaya):** Validated on Open Vision Technology’s **Uli Kaya** omnidirectional 3-wheel development robot, demonstrating full-stack sensor fusion, real-time CoT broadcasting, and dynamic agentic control execution.

### **Conclusion**

The Uli SDK delivers an adaptable software architecture for next-generation defense and autonomous enterprise systems. By combining dynamic Knowledge Graph context generation, high-bandwidth UDP Multicast CoT extensions, and MOSA-compliant protocols, Uli SDK bridges physical sensors and edge hardware with Agentic AI—delivering actionable situational awareness and autonomous execution across multi-domain operational environments.

For technical inquiries and developer access, visit [ulisdk.com](https://www.ulisdk.com/).