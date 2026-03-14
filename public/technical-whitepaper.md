

# **Technical Whitepaper: Uli SDK**

## **Bridging Robotic Assets with Agentic AI**

### 

### **Executive Overview**

The **Uli (Unified Link Interface) SDK** is the robotic nervous system for Agentic AI. It is a high-performance middleware designed to bridge the gap between traditional infrastructures and modern Agentic AI ecosystems. By leveraging a skills-based architecture, Uli SDK enables physical assets to expose their functional capabilities and telemetry as discoverable “context” and “tools” for Language Models.

---

### **1\. Core Architectural Principles**

#### **Dynamic and Self-Configuring Infrastructure**

At the heart of the Uli SDK is a dynamic, self-configuring infrastructure. This architecture allows functional modules to be discovered, integrated, and utilized at runtime through unified interfaces. By eliminating static, pre-configured connections, the system achieves true agility, allowing components to be seamlessly added or removed to meet evolving mission requirements.

#### **Multi-Domain Interoperability**

The framework connects disparate systems across multiple domains:

* **Aerial and Ground Assets**: Drones and autonomous vehicles.  
* **Operational Systems**: Robot arms, process tools, and controllers.  
* **Intelligence Layers**: AI agents and data viewers/loggers.

Leveraging a **DoD MOSA-compliant design** (Modular Open Systems Approach), the Uli SDK ensures seamless collaboration and rapid reconfiguration.

---

### **2\. Advanced AI Integration: Context Discovery**

#### **Contextual Discovery & Interoperability Infrastructure**

The Uli SDK is designed to enable the dynamic **Discovery of Robotic Asset Context,** including physical identity and security governance, the **Context of Functional Capabilities**, and high-fidelity **Telemetry Context**.

By utilizing the Unified Link Interface, the Uli SDK transforms complex robotic hardware into a self-describing ecosystem, providing AI agents with the foundational context required for situational reasoning and autonomous command execution.

**Implementation Detail:**

1. **Capability Export**: Assets export their identity, functional capabilities (Uli SDK agents), and telemetry (data topics) through the Unified Link Interface.  
2. **Discovery Services**: Clients identify asset functional capabilities and telemetry at runtime through dedicated discovery services.  
3. **Asset Context**: Every asset provides a standardized context string including:  
   * **Description and URI**: (e.g., com.openvisiontech.uli-kaya.\<serial\_number\>).  
   * **Subsystem ID**: Facilitates direct SDK access to the asset hardware.  
   * **Physical Pose**: Real-time spatial coordinates and orientation.  
   * **Control Availability**: Enum status (Under Control, Available, Not Available).  
   * **Governance**: Defined App Access Privileges (Operator, Maintainer, Depot) and Data Access Tiers (Classified, Controlled, Unclassified).  
4. **Markdown Context Strings**: Discovered functional capabilities and telemetry provide context in markdown format. These strings describe data structures, semantics of enclosed fields, and specific usage cases.  
5. **Autonomous Reasoning**: AI agents query the SDK for discovered assets. Using provided context strings, the AI decides whether to subscribe to telemetry or execute specific functions to act upon its reasoning.

#### **A2UI (Agent-to-UI) Framework**

The SDK features native **Dart-FFI integration**, creating a powerful A2UI framework. This enables AI agents to drive real-time, high-fidelity user interfaces directly from data topic streams.

**Implementation Detail:**

* **UI Integration**: Via Dart-FFI, the SDK serves as the backend for Flutter-UI, capable of displaying media contents and 3D drawings.  
* **Contextual UI**: Context strings provide the information needed for the AI to select appropriate Flutter UI Widgets for displaying data or providing user input fields for configuration and periodic control parameters.

**Semantic Knowledge Retrieval**

The Uli SDK functions as the ingestion engine for an autonomous **Knowledge Graph**. By exporting markdown-formatted context strings, the SDK allows the AI ecosystem to construct a “Context Layer” that represents the entire robotic fleet. AI agents can then perform semantic retrieval to ground their decision-making.

Implementation Detail:

* **Reasoning**: AI agents query this graph to identify assets with the correct **Data Access Privileges** and **Control Availability**.  
* **Execution**: From the graph, agents retrieve the exact **Capability Context** required to generate configurations and control parameters for the hardware, ensuring mission execution is grounded in high-fidelity system knowledge.  
* **State Estimation**: AI agents utilize the **Telemetry Context** and subscribed data topics to perform high-level state estimation. By reasoning over the semantics of the live data stream, the agent maintains an accurate world model of the asset’s physical status, environmental interactions, and operational health within the Knowledge Graph.

---

### **3\. Operational Integrity: Security, Safety, and Reliability**

* **Security**: The framework utilizes a **certificate-based authentication** model. Access is strictly governed by the Data Access Privileges (Classified, Controlled, Unclassified) and App Access roles (Operator, Maintainer, Administrator) defined in the Asset Context.  
* **Safety**: An integrated safety framework combines proactive detection with a redundant triggering system. It automatically responds to application errors or manual e-stop commands.  
* **Reliability**: Achieved through a two-tiered state machine system supported by operating modes such as Standard, Reduced, Training, and Maintenance.

---

### **4\. Development and Deployment Ecosystem**

* **Code Generation**: Utilities produce C++ code for messages and applications while automatically generating **Python bindings** and **Dart-FFI**.  
* **High-Efficiency Building**: Utilizes **Bazel** for cross-building for x86\_64 and **NVIDIA Jetson** (Nano, Xavier, Orin).  
* **IDE Support**: Developers utilize the **Claude Code** and **Google Antigravity IDE** for accelerated SDK development.  
* **Deployment**: Included shell scripts simplify the staging and deployment of applications across networked devices.

---

### **Conclusion**

The Uli SDK is engineered to deliver a decisive edge in adaptability and operational integrity. By bridging the gap between AI and robotics through a skills-based, MOSA-compliant architecture, it provides a mission-ready solution that eliminates vendor lock-in.

**For more information, visit [www.ulisdk.com](http://www.ulisdk.com/).**