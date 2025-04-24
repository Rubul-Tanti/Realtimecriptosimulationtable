# Realtimecriptosimulationtable

A responsive React + Redux Toolkit app that simulates WebSocket updates to track live crypto prices

1. [Objective](#objective)  
2. [Tech Stack & Architecture](#tech-stack-architecture)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
4. [Demo](#demo)  
5. [UI Layout & Features](#ui-layout-features)  
6. [State Flow](#state-flow)  
7. [Thought Process](#thought-process)  
8. [Bonus](#bonus)  
9. [License](#license)
## 🎯 Objective
A real time crypto table that will show real time data 
but instead of real data use dummy data and create fake simulation using redux-toolkit
## 🛠 Tech Stack & Architecture

- **Framework:** React (javaScript)  
- **State Management:** Redux Toolkit   
- **Styling:** Tailwind CSS   
- **Data Simulation:** `settimeout recurrsion` mock WebSocket class  
- **Folder Structure:**
- **src**
  - 1-assets (constains all media files like img)
  - 2-component (custom cumpontes including table)
  - 3-data (contains dummy data)
  - 4-pages(contains pages )
  - 5-services(contains reducers and slice)
  - 6-store
  - App.jsx
 
---

## 🏁 Getting Started

### Prerequisites

- Node.js ≥ 14.x  
- npm or yarn  

### Installation

```bash
# clone repo
git clone https://github.com/Rubul-Tanti/Realtimecriptosimulationtable
cd cripto-table

# install dependencies
npm install
# or
yarn install
