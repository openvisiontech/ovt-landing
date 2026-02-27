ulisdk: The Robotic Nervous System for Agentic AI
ulisdk is a high-performance middleware designed to bridge the gap between traditional robotic infrastructures and modern Agentic AI ecosystems. By leveraging the Model Context Protocol (MCP), ulisdk enables physical assets to export their telemetry and functional capabilities as discoverable "tools" for Large Language Models (LLMs).

🚀 Key Features
MCP-Native Integration: Automatically wrap robotic functions into MCP services, allowing AI Agents (Claude, GPT, etc.) to call hardware functions directly.

Dynamic Asset Discovery: Assets self-describe their capabilities (e.g., "Navigate to GPS," "Capture Thermal Frame") upon connection.

Agentic Interoperability: Moves beyond static APIs—LLMs can reason through available asset "Agents" to complete complex missions.

Hardware Agnostic: Proven on the Uli Kaya 3-wheel platform; extensible to any sensor or actuator fleet.

Unified Interface (ULI): A single, hardened interface for data exportation and remote execution.

🛠 Quick Start
Installation
Bash

# Clone the repository
git clone https://github.com/openvisiontech/ulisdk.git
cd ulisdk

# Install core dependencies (C++/Python)
./scripts/install_dependencies.sh
Exposing an Asset to an AI Agent
Python

import ulisdk

# Initialize the bridge for the Uli Kaya platform
bridge = ulisdk.MCPBridge(asset_id="ULI-KAYA-V1")

# Export capabilities as discoverable tools
bridge.export_tool(name="move_to", func=my_navigation_logic)
bridge.export_stream(name="video_feed", source="/dev/video0")

bridge.start()
print("ulisdk: Asset is now discoverable by AI Agents.")
🤖 Case Study: Uli Kaya
The Uli Kaya 3-wheel test robot serves as the reference implementation for ulisdk.

Task: An AI agent receives a prompt: "Inspect the perimeter and report any anomalies."

Execution: The agent queries ulisdk, discovers the Maps and anomaly_detection tools on Uli Kaya, and autonomously constructs the execution plan via the MCP bridge.

🏛 Federal & Defense
Open Vision Technology is a registered federal contractor.

CAGE Code: 18NH2

UEI: U6GJVDKFSYG1

Compliance: Designed with MOSA (Modular Open Systems Approach) principles for JADC2 and autonomous defense applications.

📄 License
This software is currently under a Proprietary License for Open Vision Technology. For commercial licensing or federal partnership inquiries, please contact:
Email: genshianglin@gmail.com
Web: ulisdk.com